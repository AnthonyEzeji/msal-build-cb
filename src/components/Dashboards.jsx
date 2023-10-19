import { Fragment, useState } from 'react'
import { Dialog, Transition, Combobox } from '@headlessui/react'
import Navbar from '../components/Navbar'
import HRALogo from '../assets/hra logo white.png'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

//import reports from '../reportsConfig.json'
import { models } from 'powerbi-client';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { PowerBIEmbed } from 'powerbi-client-react';
import { AuthenticatedTemplate, useIsAuthenticated, useMsal } from '@azure/msal-react'
import '../css/Embed.css'
import axios from 'axios'
import Avatar from '@mui/material/Avatar';
import {
  Bars3Icon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  StarIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  Link
} from "react-router-dom";
import DropDown from './DropDown';
import { useEffect } from 'react';
import { addDoc, getDocs, collection, onSnapshot, where, query as fsquery, serverTimestamp, orderBy, Timestamp } from "@firebase/firestore"

import { loginRequest } from '../authConfig';

import {callMsGraph} from '../graph'
import { MdNotes, MdReport, MdSavedSearch } from 'react-icons/md';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
 
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

 
export default function Dashboards() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { instance } = useMsal();
  const [loggedInAcc, setLoggedInAcc] = useState(instance.getActiveAccount())
  const [accessToken, setAccessToken] = useState(null);
  const [userGroups, setUserGroups] = useState([])
  const [selectedUserGroup, setSelectedUserGroup] = useState({})
  const isAuthenticated = useIsAuthenticated()
  const [showCreateInsight, setShowCreateInsight] = useState(false)
  const [reports, setReports] = useState([])
  const [authenticated, setAuthenticated] = useState(false)
  const [savedReports, setSavedReports] = useState([])
  const [savedReportSelected, setSavedReportSelected] = useState(false)
  const [commentInputText, setCommentInputText] = useState('')
  const [selectedReport, setSelectedReport] = useState({reportName:'State Claims Benchmarking', reportId:'2b88dd24-f14f-4a78-9d4d-faf6a11839d8'})
  const [reportLayout, setReportLayout] = useState(models.LayoutType.MobileLandscape)

  const [width, setWidth] = useState(window.innerWidth);
  const config = {
    headers:{
      accesstoken: accessToken,
    
    }
  };
  const sampleReportUrl = `${process.env.REACT_APP_FUNCTION_ENDPOINT}api/getPBITokenTDCSI?code=${process.env.REACT_APP_EMBED_KEY}&reportId=${selectedReport?.reportId}&mstoken=${accessToken}`;
  // --------- Set State -------------------

  
  const [pbiReportConfig, setReportConfig] = useState({
    type: 'report',
    embedUrl: undefined,
    tokenType: models.TokenType.Embed,
    accessToken: undefined,
    settings: {
      panes: {
        filters: {
          expanded: false,
          visible: false
        }
        
      },
      layoutType:reportLayout
    },
  });
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

const isMobile = width <= 768;
 useEffect(() => {
 
  if(isMobile){

    setReportConfig({...pbiReportConfig, settings: {
      panes: {
        filters: {
          expanded: false,
          visible: false
        }
      },
      layoutType:models.LayoutType.MobilePortrait
    }})
 
  }else if(!isMobile){
  
    setReportConfig({...pbiReportConfig, settings: {
      panes: {
        filters: {
          expanded: false,
          visible: false
        }
      },
      layoutType:models.LayoutType.MobileLandscape
    }})
    
  }


 }, [width])
 useEffect(() => {
  console.log(isMobile)
 }, [isMobile])
  const eventHandlersMap = new Map([
    ['loaded', function () {

    }],
    ['rendered', function () {


      // Update display message
      //setMessage('The report is rendered')
    }]
  ]);


//Sets auth state to true when user is authenticated
useEffect(() => {

  if(isAuthenticated){
  

    setAuthenticated(true)
    
  }
}, [])











 //Create a comment for selected report






 


  


//Gets the time elapsed since post was created (e.g. "1h ago")


const axiosInstance = axios.create({


  baseURL:process.env.REACT_APP_FUNCTION_ENDPOINT,
  timeout: 10000
});




 /*async function getSavedReports(){

     await axiosInstance.get(`/users/${instance.getActiveAccount()?.idTokenClaims?.oid}/reports?token=${accessToken}`).then(res=>{

       setSavedReports(res.data)
     
     })
}*/



//function accepts a report as a parameter and returns whether the current user has it saved






//function to request access token needed for ms graph requests
 async function RequestAccessToken() {
  if(isAuthenticated){
instance.setActiveAccount(instance.getAllAccounts()[0])
let account = instance.getActiveAccount()
    
 
    const request = {
        ...loginRequest,
        account: account
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    await instance.acquireTokenSilent(request).then((response) => {
    
        setAccessToken(response?.accessToken);
      
    }).catch((e) => {
         instance.acquireTokenPopup(request).then((response) => {
            setAccessToken(response?.accessToken);
        });
    });
  }
  
 }
 //function handles a user saving a report
/*async function handleSaveReport(){
  await axiosInstance.post(`/users/${instance.getActiveAccount().idTokenClaims?.oid}/reports?token=${accessToken}`,{...selectedReport,user:instance.getActiveAccount()}).then(res=>{
    
    setSavedReportSelected(!savedReportSelected)
    
    setSavedReports([...savedReports,res.data])
    setFilteredReports([...filteredReports])
  })
 }
 //function handles user removing report from their saved reports
 async function removeSavedReport(){
  
  await axiosInstance.delete(`/users/${instance.getActiveAccount()?.idTokenClaims?.oid}/reports?token=${accessToken}`, {data:selectedReport}).then((res)=>{

  
  setSavedReportSelected(!savedReportSelected)
 
  })
  setFilteredReports(filteredReports)
  setSavedReports(savedReports.filter(function(report){
       
    return report.reportId!==selectedReport.reportId
}))
}
*/
//When an access token is set, we make a request to ms graph for the user's groups
 useEffect(() => {
  if(isAuthenticated){
    console.log(instance.getActiveAccount())
    instance.setActiveAccount(instance.getAllAccounts()[0])
    RequestAccessToken()
  }
   

 }, [isAuthenticated])



 //function filters reports based on the user's groups

 //When the user's groups are set, we filter the reports




 //When the filtered reports are set, the current selected report to display is set to the first report in filtered reports

 
  // ---------Sign in -------------------
  //Config for power-bi based on selected report
  const mockSignIn = async () => {

    const reportConfigResponse = await fetch(`${process.env.REACT_APP_FUNCTION_ENDPOINT}api/getPBITokenTDCSI?code=${process.env.REACT_APP_EMBED_KEY}&reportId=${selectedReport?.reportId}&mstoken=${accessToken}`);


    if (!reportConfigResponse.ok) {
      console.error(`Failed to fetch config for report. Status: ${reportConfigResponse.status} ${reportConfigResponse.statusText}`);
      return;
    }

    const reportConfig = await reportConfigResponse.json();
    
    setReportConfig({
      ...pbiReportConfig,
      //embedUrl: reportConfig.EmbedUrl,
      embedUrl: reportConfig.embedUrl[0].embedUrl,
      accessToken: reportConfig.accessToken
      //accessToken: reportConfig.EmbedToken.Token
    });

  };
  //handles msal user logout
  const handleLogout = () => {
    /* instance.logoutPopup({
         postLogoutRedirectUri: "/",
         mainWindowRedirectUri: "/"
     });*/
     window.sessionStorage.clear()
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  }
  //function handles a user selecting a report from filtered reports
function handleReportChange(e){
  
  setSelectedReport(e)

}


//When a new report is selected, the corresponding notes/comments are requested from google firestore db
//When a new report is selected, the corresponding notes/comments are requested from google firestore db
useEffect(() => {
  


if(accessToken!==null){
    mockSignIn()
}
  
   

      //setSavedReportSelected(checkIfSaved(selectedReport))
  
 
}, [accessToken])

//When a report is selected, function checkIfSaved() checks to see if the report is included in the users saved reports




 

  return (
    <AuthenticatedTemplate>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-100 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <Link to='/' className="flex flex-shrink-0 items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src={HRALogo}
                        alt="Your Company"
                      />
                    </Link>
                    <nav className="mt-5 space-y-1 px-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                              'mr-4 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div className="flex flex-shrink-0 bg-gray-700 p-4">
                    <a href="#" className="group block flex-shrink-0">
                      <div className="flex items-center">
                        <div>
                          <img
                            className="inline-block h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <Link to="/" className="whitespace-nowrap text-base font-medium
             text-white hover:text-gray-900" onClick={handleLogout}>
                            Sign Out
                          </Link>
                        </div>
                      </div>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">{/* Force sidebar to shrink to fit close icon */}</div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
      
        <div className="flex flex-1 flex-col ">
         <Navbar/>
          <main className="flex-1 ">
            <div className="py-6">
              <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="  text-2xl font-semibold text-gray-900">Dashboard</h1>
              </div>
              <div className="mx-auto max-w-7xl  px-4 sm:px-6 md:px-8 w-full">
                {/* Replace with your content */}
                <div className="py-4">
               
        
                  
                  


                  {/*<div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
                  */}
                </div>
               {/*!savedReportSelected? <button className='bg-slate-700 border-[1px] text-white hover:bg-transparent hover:text-slate-700 p-3 rounded-md border-slate-700 my-4 min-w-[120px] felx justify-center' onClick={handleSaveReport}><p className="flex justify-center h-fit text-lg items-center min-h-[26px]">Save<StarIcon className='h-6'/></p></button>:<button className='bg-green-600 border-[1px] text-white hover:bg-transparent hover:text-green-600 p-3 rounded-md border-green-600 my-4 min-w-[120px] felx justify-center' onClick={removeSavedReport}><p className="flex justify-center h-fit text-lg items-center min-h-[26px]">Saved<CheckIcon className='h-6'/></p></button>*/}
                <PowerBIEmbed
              
                embedConfig={pbiReportConfig}
                eventHandlers={eventHandlersMap}
                cssClassName="report-style-class"
                getEmbeddedComponent={
                  (embeddedReport) => {
                    window.report = embeddedReport;
                  }
                }
              />
             
                {/* /End replace */}
              
              </div>
           
            </div>
          </main>
        </div>
      </div>
    </AuthenticatedTemplate>
  )
}
