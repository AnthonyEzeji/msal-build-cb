import { useState } from "react";
import { Stack, TextField } from "@fluentui/react";
import { SendRegular } from "@fluentui/react-icons";
import  "../../assets/Send.svg";
import styles from "./QuestionInput.css";


import React from 'react'

function QuestionInput({ onSend, disabled, placeholder, clearOnSend }) {
    const [question, setQuestion] = useState("");

    const sendQuestion = () => {
        if (disabled || !question.trim()) {
            return;
        }

        onSend(question);

        if (clearOnSend) {
            setQuestion("");
        }
    };

    const onEnterPress = (ev) => {
        if (ev.key === "Enter" && !ev.shiftKey) {
            ev.preventDefault();
            sendQuestion();
        }
    };

    const onQuestionChange = (_ev, newValue) => {
        setQuestion(newValue || "");
    };

    const sendQuestionDisabled = disabled || !question.trim();

  return (
    <Stack horizontal className='questionInputContainer'>
    <TextField
        className="questionInputTextArea"
        placeholder={placeholder}
        multiline
        resizable={false}
        borderless
        value={question}
        onChange={onQuestionChange}
        onKeyDown={onEnterPress}
    />
    <div className="questionInputSendButtonContainer"
        role="button" 
        tabIndex={0}
        aria-label="Ask question button"
        onClick={sendQuestion}
        onKeyDown={e => e.key === "Enter" || e.key === " " ? sendQuestion() : null}
    >
        { sendQuestionDisabled ? 
            <SendRegular className="questionInputSendButtonDisabled"/>
            :
            <img src='' className="questionInputSendButton"/>
        }
    </div>
    <div className="questionInputBottomBorder" />
</Stack>
  )
}

export default QuestionInput


