import { Fragment, useState } from 'react'
import { Dialog, Transition, Combobox } from '@headlessui/react'

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
  UsersIcon,
  XMarkIcon,
     StarIcon
} from '@heroicons/react/24/outline'
import {
  Link
} from "react-router-dom";
import DropDown from './DropDown';
import { useEffect } from 'react';

import { loginRequest } from '../authConfig';
import callMsGraph from '../graph'
import { MdNotes } from 'react-icons/md';
const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: false },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Calendar', href: '/calendar', icon: CalendarIcon, current: false },
  { name: 'Favorites', href: '/saved-reports', icon:StarIcon, current: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

 
export default function SavedReports() {
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
const [userReports, setUserReports] = useState([])


const [authenticated, setAuthenticated] = useState(false)
useEffect(() => {
  if(isAuthenticated){
    setAuthenticated(true)
  }
}, [])

useEffect(() => {
   console.log(instance.getActiveAccount().idTokenClaims.oid)
 
    console.log('authenticated')
    async function getSavedReports(){
  
        await axios.get(`https://hra-backend-q2gs-atz7s8hi9-anthonyezeji.vercel.app/users/${instance.getActiveAccount()?.idTokenClaims?.oid}/reports`).then(res=>{
          console.log(res.data)
          setUserReports(res.data)
        })
   }
getSavedReports()



}, [authenticated])

 

 



 
 useEffect(() => {
  console.log(userReports)
  if(userReports.length<=0){
    setSelectedReport(null)
  }else{
    setSelectedReport(userReports[0])
  }
 }, [userReports])
 
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
     window.sessionStorage.clear()
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  }
function handleReportChange(e){
  console.log(e)
  setSelectedReport(e)

}



useEffect(() => {
  

  mockSignIn()
  window.sessionStorage.setItem('selectedReport',JSON.stringify(selectedReport))
}, [selectedReport])
async function removeSavedReport(){
    setUserReports(userReports.filter(function(report){
       
        return report.reportId!==selectedReport.reportId
    }))
    
await axios.delete(`https://hra-backend-q2gs-atz7s8hi9-anthonyezeji.vercel.app/users/${instance.getActiveAccount()?.idTokenClaims?.oid}/reports`, {data:selectedReport})
}
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
                <h1 className="  text-2xl font-semibold text-gray-900">Favorites</h1>
              </div>
              <div className="mx-auto max-w-7xl  px-4 sm:px-6 md:px-8 w-full flex flex-col items-end">
                {/* Replace with your content */}
                <div className="py-4 w-full">
               
                  <Combobox as="div" value={selectedReport} onChange={(e)=>handleReportChange(e)} className='mt-4 '>
                    <Combobox.Label className="block text-sm font-medium text-gray-700">Select a favorite</Combobox.Label>
                    <div className="relative mt-1">
                      <Combobox.Input
                        className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                        onChange={(event) => setQuery(event.target.value)}
                        displayValue={(selectedReport) =>userReports.length>0?selectedReport?.name:'NO REPORTS RETURNED'}
                      />
                      <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </Combobox.Button>

                      {userReports.length > 0 && (
                        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {userReports.map((report) => (
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
{selectedReport&&<div className='w-full bg-slate-700 text-white  text-center  flex flex-row relative min-h-[70px] flex items-center justify-center rounded-md'><p className='ml-2 text-lg'>{selectedReport.name}</p>  {selectedReport&&<button className="w-fit bg-red-600 border-red-600 text-white rounded-md border-[1px]  hover:bg-transparent hover:text-white hover:border-white p-3 my-4 right-2 absolute font-semibold" onClick={removeSavedReport}>Remove</button>}</div>}
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
              
              </div>
           
            </div>
          </main>
        </div>
      </div>
    </AuthenticatedTemplate>
  )
}
