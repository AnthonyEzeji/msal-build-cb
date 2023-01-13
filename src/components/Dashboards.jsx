import { Fragment, useState } from 'react'
import { Dialog, Transition, Combobox } from '@headlessui/react'

import HRALogo from '../assets/hra logo white.png'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'


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
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  Link
} from "react-router-dom";
import DropDown from './DropDown';
import { useEffect } from 'react';

import { loginRequest } from '../authConfig';
import callMsGraph from '../graph'
const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Calendar', href: '/calendar', icon: CalendarIcon, current: false },
]
const reports= [
  { id: 1, name: 'Claim Summary Analysis',reportId:'a3ef48eb-70d7-48a9-af55-5635ab5eb9b8',groupId:'8f324dbc-a380-4ccc-8e06-53579d35d24b', groupName:'NGA_HRA_CLM_POWER_USERS' },
  { id: 2, name: 'Risk Management Analysis', reportId:"aa9dff0b-d603-44fc-bd6c-c4f3cf07f6b1",groupId:"d98a2020-a2a9-43ef-a6f6-77a2ab244e01", groupName:"NGA_HRA_RIM_POWER_USERS"},

]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

 
export default function Dashboards() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { instance } = useMsal();
  const sampleReportUrl = 'https://ngapnodepbiembed.azurewebsites.net/api/getPBIEmbedTokenNode?reportId=';
  // --------- Set State -------------------

  const [filteredReports, setFilteredReports] = useState([])
  const [selectedReport, setSelectedReport] = useState(filteredReports[0])
  const [reportNotes, setReportNotes] = useState([])
  const [query, setQuery] = useState('')
  const filteredReportsToDisplay =
    query === ''
      ? filteredReports
      : filteredReports
      /*.filter((report) => {
        return report?.name.toLowerCase().includes(query.toLowerCase())
      })*/
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
      }
    },
  });
  const eventHandlersMap = new Map([
    ['loaded', function () {
      console.log('Report has loaded');
    }],
    ['rendered', function () {
    console.log('Report has rendered');

      // Update display message
      //setMessage('The report is rendered')
    }]
  ]);
  const [accessToken, setAccessToken] = useState(null);
const [userGroups, setUserGroups] = useState([])
const [selectedUserGroup, setSelectedUserGroup] = useState({})
const isAuthenticated = useIsAuthenticated()
const [showCreateInsight, setShowCreateInsight] = useState(false)

 function RequestAccessToken() {
  if(isAuthenticated){
instance.setActiveAccount(instance.getAllAccounts()[0])
let account = instance.getActiveAccount()
    
  console.log(account)
    const request = {
        ...loginRequest,
        account: account
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance.acquireTokenSilent(request).then((response) => {
     console.log('this is the instance response on login' + response)
        setAccessToken(response.accessToken);
        console.log(response.accessToken)
    }).catch((e) => {
        instance.acquireTokenPopup(request).then((response) => {
            setAccessToken(response.accessToken);
        });
    });
  }
  
 }
 useEffect(() => {
   RequestAccessToken()
 }, [isAuthenticated])
 
 useEffect(() => {
  if(isAuthenticated){
    console.log('this is the access token ----> ' + accessToken)
    async function getUserGroups(){
     await callMsGraph(accessToken).then(response=>{
       console.log(response.value)
       setUserGroups((response.value))
      })
    }
    getUserGroups()
  }
 }, [accessToken])
 function filterReports(report){
  for(var i =0; i<userGroups.length; i++){
    if(report.groupId == userGroups[i].id){
      return true
    }
  }
 
 }
 useEffect(() => {
  console.log(userGroups?.length)
  if(userGroups?.length>0){
    setFilteredReports(reports.filter(filterReports))
  }
   
 }, [userGroups])


 useEffect(() => {
   //powerbi api call to get reports in specified group
/*fetch(` https://api.powerbi.com/v1.0/thedoctors/groups/${selectedUserGroup.id}/reports`).then(response=>{
  console.log(response)
}).catch(e=>console.log(e))*/
 
 }, [])
 
 useEffect(() => {
  console.log(filteredReports)
  if(filteredReports.length<=0){
    setSelectedReport(null)
  }else{
    setSelectedReport(filteredReports[0])
  }
  
 }, [filteredReports])
 
  // ---------Sign in -------------------
  const mockSignIn = async () => {

    const reportConfigResponse = await fetch(sampleReportUrl+selectedReport?.reportId);


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
  const handleLogout = () => {
    /* instance.logoutPopup({
         postLogoutRedirectUri: "/",
         mainWindowRedirectUri: "/"
     });*/
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  }
function handleReportChange(e){
  console.log(e)
  setSelectedReport(e)

}

function handleGroupChange(e){
  console.log(e)
  setSelectedUserGroup(e)

}

useEffect(() => {
  
async function getReportNotes(){
  console.log(selectedReport)
  await axios.get(`https://hra-backend-ou85.vercel.app/notes/${selectedReport?.reportId}`).then(res=>{
    setReportNotes(res.data)

  })
}
  getReportNotes()
  mockSignIn()
}, [selectedReport])

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
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
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
                    <div className="flex flex-shrink-0 items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src={HRALogo}
                        alt="Your Company"
                      />
                    </div>
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
                          <Link to="/dashboards" className="whitespace-nowrap text-base font-medium
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
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-4">
                <a href='/'>
                <img
                  className="h-8 w-auto"
                  src={HRALogo}
                  alt="Your Company"

                />
                </a>
             
              </div>
              <nav className="mt-5 flex-1 space-y-1 px-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex flex-shrink-0 bg-gray-700 p-4">
              <a href="#" className="group block w-full flex-shrink-0">
                <div className="flex items-center">
                  <div>
                  <Avatar  className="hover:opacity-50"  >{<p>{instance.getActiveAccount()?.name?.split(',')[1][1]+instance.getActiveAccount()?.name?.split(',')[0][0]}</p>}</Avatar>
                  </div>
                  <div className="ml-3">
                    <Link to="/" className="whitespace-nowrap text-base font-medium
             text-white hover:text-gray-900" onClick={handleLogout} >
                      Sign Out
                    </Link>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1 ">
            <div className="py-6">
              <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="  text-2xl font-semibold text-gray-900">Dashboard</h1>
              </div>
              <div className="mx-auto max-w-7xl  px-4 sm:px-6 md:px-8 w-full">
                {/* Replace with your content */}
                <div className="py-4">
               
                  <Combobox as="div" value={selectedReport} onChange={(e)=>handleReportChange(e)} className='mt-4'>
                    <Combobox.Label className="block text-sm font-medium text-gray-700">Select a report</Combobox.Label>
                    <div className="relative mt-1">
                      <Combobox.Input
                        className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                        onChange={(event) => setQuery(event.target.value)}
                        displayValue={(selectedReport) => filteredReports.length>0?selectedReport?.name:'NO REPORTS RETURNED'}
                      />
                      <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </Combobox.Button>

                      {filteredReportsToDisplay.length > 0 && (
                        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {filteredReportsToDisplay.map((report) => (
                            <Combobox.Option
                              key={report.id}
                              value={report}
                              className={({ active }) =>
                                classNames(
                                  'relative cursor-default select-none py-2 pl-3 pr-9',
                                  active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                )
                              }
                            >
                              {({ active, selected }) => (
                                <>
                                  <span className={classNames('block truncate', selected && 'font-semibold')}>{report.name}</span>

                                  {selected && (
                                    <span
                                      className={classNames(
                                        'absolute inset-y-0 right-0 flex items-center pr-4',
                                        active ? 'text-white' : 'text-indigo-600'
                                      )}
                                    >
                                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                  )}
                                </>
                              )}
                            </Combobox.Option>
                          ))}
                        </Combobox.Options>
                      )}
                    </div>
                  </Combobox>
                  
                  


                  {/*<div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
                  */}
                </div>
                {selectedReport&&<PowerBIEmbed
              
                embedConfig={pbiReportConfig}
                eventHandlers={eventHandlersMap}
                cssClassName="report-style-class"
                getEmbeddedComponent={
                  (embeddedReport) => {
                    window.report = embeddedReport;
                  }
                }
              />}
                {/* /End replace */}
                {filteredReports.length>0?<div className = 'w-full h-screen  flex flex-col  mt-20  '>
                <div className = 'w-full flex items-center'>
                <h1 className = 'text-xl  text-left mr-2 font-semibold'>Comments: </h1>
                <h5 className='text-xl font-light'>
                {selectedReport?.name} 
                </h5>
              
                </div>
               
                {showCreateInsight===false&&<button onClick={()=>{setShowCreateInsight(true)}} className = 'bg-indigo-600 p-2 text-white font-semibold hover:border-[1px] hover:border-indigo-600 hover:bg-transparent hover:text-indigo-600 my-5 w-fit rounded-xl'>
                  Create +
                </button>}
             <div className={`w-full relative ${showCreateInsight ? 'flex' : 'hidden'}  py-6 flex-col `}>
              <div className = {`relative items-center p-1 border-[1px] bg-slate-600 text-white rounded-t-xl border-gray-500 flex `}>
              <Avatar className="hover:opacity-50"  >{<p>{instance.getActiveAccount().name.split(',')[1][1]+instance.getActiveAccount().name.split(',')[0][0]}</p>}</Avatar>
                <p className = 'ml-2 font-light'>{instance.getActiveAccount().name.trim().split(',')[1]+" "+ instance.getActiveAccount().name.trim().split(',')[0]}</p>
                <AiOutlineCloseCircle onClick={()=>{setShowCreateInsight(false)}} className='text-white text-xl absolute right-5 hover:text-red-600'/>
              </div>
              <textarea type="text" className = '' placeholder='  Share your insights with others' />
              <button className='bg-indigo-600 text-zinc-200 p-2 rounded-b-xl hover:bg-transparent hover:border-[1px] hover:border-indigo-600 hover:text-indigo-600'>Sumbit</button>
             </div>
                 {reportNotes.length>0? <ul className ='w-full p-10 bg-gray-100 overflow-y-scroll rounded-xl h-[50%]'>
                    {reportNotes.map(note=>{
                      return <div className = 'w-full flex flex-col bg-gray-100 p-2 rounded-md drop-shadow-md'>
                        <div className='flex items-center'>
                        <Avatar  className="hover:opacity-50"  ></Avatar>
                          <h1 className ='w-full pl-2 '>John Doe</h1>
                          
                    
                        </div>
                      
                        <p className ='py-2 my-1 ml-4 pl-2 border-l-[1px] border-gray-400'>
                        {note.text}
                        </p>
                        <p  className ='w-full pl-2 font-light'>2m ago</p>
                    
                      </div>
                    })}
                  </ul>:<div className='w-full h-[50%] flex justify-center items-center'><p>Be the first to create an insight for this report!</p></div>}
                
               
              </div>:<div className='w-full h-screen flex mt-10 items-start justify-center'><p>No report found!</p></div>}
              </div>
           
            </div>
          </main>
        </div>
      </div>
    </AuthenticatedTemplate>
  )
}
