import { useRef, useState, useEffect } from "react";
import { IconButton, Stack } from "@fluentui/react";
import { BroomRegular, DismissRegular, SquareRegular, ShieldLockRegular, ErrorCircleRegular } from "@fluentui/react-icons";
import HomeNavbar from '../../components/HomeNavbar'
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import rehypeRaw from "rehype-raw"; 
import video from '../../assets/sample_01 (1080p).mp4'
import  "./ChatMS.css";
import Azure from "../../assets/hra logo no words.jpg";
import { AppConfigurationClient } from "@azure/app-configuration"
import {
    ChatMessage,
    ConversationRequest,
    conversationApi,
    Citation,
    ToolMessageContent,
    ChatResponse,
    getUserInfo
} from "../../api/api";
import { Answer } from "../../components/Answer/Answer";
import  QuestionInput  from "../../components/QuestionInput/QuestionInput";

const Chat = () => {
    const lastQuestionRef = useRef("");
    const chatMessageStreamEnd = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showLoadingMessage, setShowLoadingMessage] = useState(false);
    const [activeCitation, setActiveCitation] = useState();
    const [isCitationPanelOpen, setIsCitationPanelOpen] = useState(false);
    const [appConfigVars, setAppConfigVars] = useState({})
    const [answers, setAnswers] = useState([{
        role: 'system',
        content: 'You are an AI assistant that helps people find information.'
      }]);
    const abortFuncs = useRef([] );
    const [showAuthMessage, setShowAuthMessage] = useState(false);
    
    const getUserInfoList = async () => {
        const userInfoList = await getUserInfo();
        if (userInfoList.length === 0 && window.location.hostname !== "127.0.0.1") {
            setShowAuthMessage(false);
        }
        else {
            setShowAuthMessage(false);
        }
    }
   
      
    

    const makeApiRequest = async (question) => {
        lastQuestionRef.current = question;

        setIsLoading(true);
        setShowLoadingMessage(true);
        const abortController = new AbortController();
        abortFuncs.current.unshift(abortController);

        const userMessage = {
            role: "user",
            content: question
        };
console.log(answers)
        const request = {
            messages: [...answers.filter((answer) => answer.role !== "error"), userMessage]
        };

        let result = {} ;
        try {
            const response = await conversationApi(request, abortController.signal);
            console.log(response)
            if (response?.body) {
                
                const reader = response.body.getReader();
                let runningText = "";
                while (true) {
                    console.log(1)
                    const {done, value} = await reader.read();
                    if (done) break;

                    var text = new TextDecoder("utf-8").decode(value);
                    console.log(text)
                    const objects = text.split("\n");
                    console.log(objects)
                    objects.forEach((obj) => {
                        try {
                            runningText += obj;
                            result = JSON.parse(runningText);
                            console.log(result)
                            console.log('result',result.choices[0].messages)
                            setShowLoadingMessage(false);
                            let messages =result.choices[0].messages
                            
                            setAnswers([...answers, userMessage, ...messages]);
                            runningText = "";
                        }
                        catch { }
                    });
                }
              
            }
            
        } catch ( e )  {
            if (!abortController.signal.aborted) {
                console.error(result);
                let errorMessage = "An error occurred. Please try again. If the problem persists, please contact the site administrator.";
                if (result.error?.message) {
                    errorMessage = result.error.message;
                }
                else if (typeof result.error === "string") {
                    errorMessage = result.error;
                }
                setAnswers([...answers, userMessage, {
                    role: "error",
                    content: errorMessage
                }]);
            } else {
                setAnswers([...answers, userMessage]);
            }
        } finally {
            setIsLoading(false);
            setShowLoadingMessage(false);
            abortFuncs.current = abortFuncs.current.filter(a => a !== abortController);
        }

        return abortController.abort();
    };

    useEffect(() => {
     console.log(answers)
    }, [answers])
    
    const clearChat = () => {
        lastQuestionRef.current = "";
        setActiveCitation(undefined);
        setAnswers([]);
    };

    const stopGenerating = () => {
        abortFuncs.current.forEach(a => a.abort());
        setShowLoadingMessage(false);
        setIsLoading(false);
    }

    useEffect(() => {
        getUserInfoList();
    }, []);

    useEffect(() => chatMessageStreamEnd.current?.scrollIntoView({ behavior: "smooth" }), [showLoadingMessage]);

    const onShowCitation = (citation) => {
        setActiveCitation([citation.content, citation.id, citation.title ?? "", citation.filepath ?? "", "", ""]);
        setIsCitationPanelOpen(true);
    };

    const parseCitationFromMessage = (message) => {
        if (message.role === "tool") {
            try {
                const toolMessage = JSON.parse(message.content) ;
                console.log(toolMessage.citations)
                return toolMessage.citations;
            }
            catch {
                return [];
            }
        }
        return [];
    }

    return (
        <div className='w-screen h-screen m-0 flex flex-row z-30 absolute' role="main">
          <video className='w-full h-full object-cover absolute top-0 left-0 z-3 ' muted autoPlay loop src={video}></video>
            
            {showAuthMessage ? (
                <Stack className={"chatEmptyState"}>
                    <ShieldLockRegular className="chatIcon"style={{color: 'darkorange', height: "200px", width: "200px"}}/>
                    <h1 className={"chatEmptyStateTitle"}>Authentication Not Configured</h1>
                    <h2 className={"chatEmptyStateSubtitle"}>
                        This app does not have authentication configured. Please add an identity provider by finding your app in the 
                        <a href="https://portal.azure.com/" target="_blank"> Azure Portal </a>
                        and following 
                         <a href="https://learn.microsoft.com/en-us/azure/app-service/scenario-secure-app-authentication-app-service#3-configure-authentication-and-authorization" target="_blank"> these instructions</a>.
                    </h2>
                    <h2 className="chatEmptyStateSubtitle" style={{fontSize: "20px"}}><strong>Authentication configuration takes a few minutes to apply. </strong></h2>
                    <h2 className="chatEmptyStateSubtitle" style={{fontSize: "20px"}}><strong>If you deployed in the last 10 minutes, please wait and reload the page after 10 minutes.</strong></h2>
                </Stack>
            ) : (
                <Stack horizontal className="chatRoot ">
                    <div className="chatContainer ">
                        {!lastQuestionRef.current ? (
                            <Stack className="chatEmptyState">
                                <img
                                    src={Azure}
                                    className="chatIcon"
                                    aria-hidden="true"
                                />
                                <h1 className="chatEmptyStateTitle">Start chatting</h1>
                                <h2 className="chatEmptyStateSubtitle">This chatbot is configured to answer your questions</h2>
                            </Stack>
                        ) : (
                            <div className="chatMessageStream" style={{ marginBottom: isLoading ? "40px" : "0px"}} role="log">
                                {answers.map((answer, index) => (
                                    <>
                                        {answer.role === "user" ? (
                                            <div className="chatMessageUser" tabIndex={0}>
                                                <div className="chatMessageUserMessage">{answer.content}</div>
                                            </div>
                                        ) : (
                                            answer.role === "assistant" ? <div className={"chatMessageGpt"}>
                                                <Answer
                                                    answer={{
                                                        answer: answer.content,
                                                        citations: parseCitationFromMessage(answers[index - 1]),
                                                    }}
                                                    onCitationClicked={c => onShowCitation(c)}
                                                />
                                            </div> : answer.role === "error" ? <div className={"chatMessageError"}>
                                                <Stack horizontal className={"chatMessageErrorContent"}>
                                                    <ErrorCircleRegular className={"errorIcon"} style={{color: "rgba(182, 52, 67, 1)"}} />
                                                    <span>Error</span>
                                                </Stack>
                                                <span className={"chatMessageErrorContent"}>{answer.content}</span>
                                            </div> : null
                                        )}
                                    </>
                                ))}
                                {showLoadingMessage && (
                                    <>
                                        <div className="chatMessageUser">
                                            <div className={"chatMessageUserMessage"}>{lastQuestionRef.current}</div>
                                        </div>
                                        <div className={"chatMessageGpt"}>
                                            <Answer
                                                answer={{
                                                    answer: "Generating answer...",
                                                    citations: []
                                                }}
                                                onCitationClicked={() => null}
                                            />
                                        </div>
                                    </>
                                )}
                                <div ref={chatMessageStreamEnd} />
                            </div>
                        )}

                        <Stack horizontal className='chatInput'>
                            {isLoading && (
                                <Stack 
                             
                                    horizontal
                                    className={"stopGeneratingContainer"}
                                    role="button"
                                    aria-label="Stop generating"
                                    tabIndex={0}
                                    onClick={stopGenerating}
                                    onKeyDown={e => e.key === "Enter" || e.key === " " ? stopGenerating() : null}
                                    >
                                        <SquareRegular className={"stopGeneratingIcon"} aria-hidden="true"/>
                                        <span className={"stopGeneratingText"} aria-hidden="true">Stop generating</span>
                                </Stack>
                            )}
                            <div
                                role="button"
                                tabIndex={0}
                                onClick={clearChat}
                                onKeyDown={e => e.key === "Enter" || e.key === " " ? clearChat() : null}
                                aria-label="Clear session"
                                >
                                <BroomRegular
                                    className="clearChatBroom"
                                    style={{ background: isLoading || answers.length === 0 ? "#BDBDBD" : "radial-gradient(109.81% 107.82% at 100.1% 90.19%, #0F6CBD 33.63%, #2D87C3 70.31%, #8DDDD8 100%)", 
                                            cursor: isLoading || answers.length === 0 ? "" : "pointer"}}
                                    aria-hidden="true"
                                />
                            </div>
                            <QuestionInput
                                clearOnSend
                                placeholder="Type a new question..."
                                disabled={isLoading}
                                onSend={question => makeApiRequest(question)}
                               
                            />
                        </Stack>
                    </div>
                    {answers.length > 0 && isCitationPanelOpen && activeCitation && (
                    <Stack.Item className="citationPanel" tabIndex={0} role="tabpanel" aria-label="Citations Panel">
                        <Stack aria-label="Citations Panel Header Container" horizontal className="citationPanelHeaderContainer" horizontalAlign="space-between" verticalAlign="center">
                            <span aria-label="Citations" className={"citationPanelHeader"}>Citations</span>
                            <IconButton iconProps={{ iconName: 'Cancel'}} aria-label="Close citations panel" onClick={() => setIsCitationPanelOpen(false)}/>
                        </Stack>
                        <h5 className="citationPanelTitle" tabIndex={0}>{activeCitation[2]}</h5>
                        <div tabIndex={0}> 
                        <ReactMarkdown 
                            linkTarget="_blank"
                            className="citationPanelContent"
                            children={activeCitation[0]} 
                            remarkPlugins={[remarkGfm]} 
                            rehypePlugins={[rehypeRaw]}
                        />
                        </div>
                        
                    </Stack.Item>
                )}
                </Stack>
            )}
        </div>
    );
};

export default Chat;
