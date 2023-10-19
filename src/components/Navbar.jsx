import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import TDCSILogo from '../assets/TDCSI Logo black and red.png'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
  BuildingOffice2Icon
} from '@heroicons/react/24/outline'
import {
  Link, useParams
} from "react-router-dom";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { AiOutlineInfoCircle, AiOutlineMedicineBox } from 'react-icons/ai';
import {BsBoxArrowInRight, BsFileText} from 'react-icons/bs'
import { useMsal,useIsAuthenticated } from '@azure/msal-react'
import { loginRequest } from '../authConfig';
import callMsGraph from '../graph'
import { Avatar } from '@mui/material';
import { useState } from 'react';
import HRALogo from '../assets/hra logo white.png'
import Hero from './Hero';
import { useEffect } from 'react';
import { VscLaw, VscPerson } from 'react-icons/vsc';
import * as  tb from 'react-icons/tb'
import * as  md from 'react-icons/md'
import * as  bi from 'react-icons/bi'
import axios from 'axios';
import Chat from '../pages/chat/Chat';
import { Chat16Regular, Chat20Regular, Chat24Regular } from '@fluentui/react-icons';


const solutionsFeatures = [
  {
    name: 'Analytics',
    href: '/solutions/hospitals/data-analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    icon: ChartBarIcon,
  },
  {
    name: 'Patient Safety And Risk Management',
    href: '/solutions/patient-safety-and-risk-management',
    description: 'Patient Safety And Risk Management.',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Risk Transfer', href: '#', description: "Risk Transfer.", icon: ShieldCheckIcon },
  {
    name: 'Claims And Litigation Services',
    href: '/solutions/claims-and-litigation',
    description: "Claims And Litigation Services.",
    icon: VscLaw,
  },
  {
    name: 'Self-Insured Programs',
    href: '/solutions/self-insurance',
    description: 'Design, setup and self-insurance administration services.',
    icon: VscPerson,
  },
]
const mobileMenu = [
  {
    option: 'Solutions',
    subOptions:[
      {
        name:'Analytics', 
        href:'/solutions/hospitals/data-analytics',
        description:'Get a better understanding of where your traffic is coming from.'
      },
      {
        name:'Patient Safety And Risk Management', 
        href:'/solutions/patient-safety-and-risk-management',
        description:'Patient Safety and Risk Management'
      },
      {
        name:'Risk Transfer', 
        href:'/solutions/risk-transfer',
        description:'Risk Transfer'
      },
      {
        name:'Claims and Litigation', 
        href:'/solutions/claims-and-litigation',
        description:'Claims and litigation services.'
      },  
      {
        name:'Self-Insured Programs', 
        href:'/solutions/self-insurance',
        description:'Design, setup and self-insurance administration services.'
      }
    ],
   
    icon:''
  },
  {
    option: 'Who We Serve',
    subOptions:[
      {
        name:'Hospitals', 
        href:'/solutions/hospitals',
        description:''
      },
      {
        name:'NY Physicians', 
        href:'/solutions/ny-physicians',
        description:''
      },
     
    ],
   
    icon:''
  }, 
  {
    option: 'Insights',
    subOptions:[
      {
        name:'Blogs', 
        href:'/blog',
        description:''
      },
     
     
    ],
   
    icon:''
  },
  {
    option: 'About Us',
    subOptions:[
      {
        name:'About Us', 
        href:'/about',
        description:''
      },
      {
        name:'Leadership', 
        href:'/about/leadership',
        description:''
      },
      {
        name:'Careers', 
        href:'/about/careers',
        description:''
      },
      {
        name:'News and Events', 
        href:'/about/news-events',
        description:''
      },
     
    ],
   
    icon:''
  },
  
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'About Us',
    description: 'What we offer.',
    href: '/about',
    icon: AiOutlineInfoCircle,
  },
  {
    name: 'Leadership',
    description: 'Learn more about the leadership team behind Healthcare Risk Advisors.',
    href: '/about/leadership',
    icon: tb.TbPyramid,
  },
  {
    name: 'Careers',
    description: 'Interested in joining the Healthcare Risk Advisors team?',
    href: '/about/careers',
    icon: md.MdOutlineWorkOutline,
  },
  { name: 'News and Events', description: 'Keep up with the latest news and press releases from HRA.', href: '/about/news-events', icon: bi.BiNews },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  const [bg, setBg] = useState('bg-transparent')
  const [optionMenuToShow, setOptionMenuToShow] = useState(null)
  const [textColor, setTextColor] = useState('black')
  const isAuthenticated = useIsAuthenticated()
  const [accessToken, setAccessToken] = useState(null)
  const { instance } = useMsal();

  let params = useParams()
  
 

  async function RequestAccessToken() {
    
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
async function getUserInfoFromEndpoint(){
  let activeAccount = instance.getActiveAccount()
  console.log(activeAccount)

    await axios.get(`${process.env.REACT_APP_FUNCTION_ENDPOINT}api/getADRolesAssigned?code=${process.env.REACT_APP_ROLE_ASSIGN_KEY}&un=${activeAccount?.username}`).then(res=>{
    
      if(res.status === 200){
        console.log(res.data[0])
        window.sessionStorage.setItem('account', JSON.stringify(res.data[0]))
        
      }
     
    })
}

useEffect(() => {
 
  
 if(accessToken!==null){

  getUserInfoFromEndpoint()
 }
}, [accessToken])


const loginCallback = instance.addEventCallback(async message=>{
  
  if(message.eventType ==="msal:loginSuccess"){
  
    RequestAccessToken()
    
  }else if(message.eventType ==="msal:logoutSuccess"){
    window.sessionStorage.removeItem('account')
  }
})
  const handleLogin = () => {
    /* instance.loginPopup(loginRequest).catch(e => {
         console.log(e);
     }); */
     instance.loginRedirect(loginRequest).then(response=>{
      return instance
     }).catch(e => {
       console.log(e);
   });
 }
 const handleLogout = () => {
  /* instance.logoutPopup({
       postLogoutRedirectUri: "/",
       mainWindowRedirectUri: "/"
   });*/
  instance.logoutRedirect({
    postLogoutRedirectUri: "/",
  });
}
 let imgs=[TDCSILogo,"https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",HRALogo]
const [showLogout, setShowLogout] = useState(false)

function handleOptionClick(e){
  if(e.target.id!==null && e.target.id!==undefined){
    console.log(e.target.id)
    if(optionMenuToShow===e.target.id){
      setOptionMenuToShow(null)
    }else if(optionMenuToShow!==e.target.id){
      setOptionMenuToShow(e.target.id)
    }
    
  }

}
const [showChat, setShowChat] = useState(false)
  return (
    <div className="fixed  w-screen z-40 top-0 drop-shadow-md" id='nav'>
      <Popover className="relative bg-slate-50  ">
        <div className="mx-auto max-w-7xl py-1 px-4 sm:px-6 bg-transparent sticky">
          <div className="flex items-center justify-between  md:justify-between md:space-x-10 ">
            <div className="flex justify-start lg:w-0 lg:flex-1  ">
              <Link to="/">
                <span className="sr-only">Your Company</span>
                <img
                  className=" w-auto h-12  text-white"
                  src={imgs[0]}
                  alt=""
                />
              </Link>
            </div>
            <div className="-my-2 -mr-2 flex lg:hidden ">
            <Popover.Button className="inline-flex items-center justify-center rounded-md  p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-300  border-[1px] border-slate-400">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          
           {!isAuthenticated?<div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link style={{color:textColor}} to="/" className="whitespace-nowrap text-base 
              hover:text-slate-900" onClick={handleLogin}>
                Sign in
              </Link>
            
      </div>:<div   className=' hidden lg:flex items-center relative z-10   p-2 rounded-sm w-fit '>{showLogout&&<div className = 'rounded-md absolute right-0 top-[60px] z-10 bg-zinc-200 p-4 flex flex-col justify-center'><button onClick={()=>handleLogout()} className = 'p-2 bg-red-600 text-white font-semibold border-[1px] rounded-md mt-2 border-red-600 hover:bg-transparent hover:text-red-600'>Logout</button></div>}<Avatar style={{backgroundColor:'white', color:'gray'}} onClick={()=>setShowLogout(!showLogout)} className="hover:text-red-600 border border-gray-300 text-black bg-white"  ><p className='text-sm'>{isAuthenticated&&instance.getActiveAccount()?.name.split(' ')[0][0]+instance.getActiveAccount()?.name.split(' ')[1][0]}</p></Avatar><button onClick={()=>setShowChat(!showChat)}  className='m-2 p-2  bg-white text-gray-500 font-light hover:bg-transparent border-[1px] rounded-md hover:text-slate-600 border-gray-300 flex items-center'>Chat<Chat20Regular className='text-red-500'></Chat20Regular></button></div>}
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition lg:hidden"
          >
         
            <div className="divide-y-2 h-screen overflow-y-scroll relative  divide-slate-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src={imgs[0]}
                      alt="Your Company"
                    />
                  </div>
             
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div class = 'account' className='py-5'>
                  {!isAuthenticated? <button  className="bg-red-600 text-center text-white w-full p-3 font-semibold border-[1px] hover:text-red-600 hover:bg-transparent hover:border-red-600 rounded-md" onClick={handleLogin}>
                    Sign in
                  </button>  : <div  className="bg-gray-200 text-center text-slate-700 w-full p-1 my-2 font-semibold border-[1px] border-gray-300   rounded-md" onClick={handleLogin}>
                    <p className='border-b-[1px] border-slate-400 mx-5 pb-2 mb-2'>{instance.getActiveAccount()?.username}</p>
                   < div className = 'rounded-md  right-0 top-[60px] z-20 bg-zinc-200 p-4 flex flex-col justify-center'><a className='bg-teal-700 text-center p-2 mb-2 rounded-md  text-white justify-center flex border-[1px] border-teal-700  flex-row  items-center hover:bg-transparent hover:text-teal-700' href ='https://clientportal.fojp.com/login.aspx'><p className ='px-2 text-sm'>Client Portal</p><BsBoxArrowInRight className=''/></a><a className='bg-slate-700 text-center p-2 rounded-md  text-white justify-center flex border-[1px] border-slate-600  flex-row  items-center hover:bg-transparent hover:text-slate-600' href ='/dashboard'><p className ='px-2'>Dashboard</p><BsBoxArrowInRight className=''/></a><button onClick={()=>handleLogout()} className = 'p-2 bg-red-600 text-white font-semibold border-[1px] rounded-md mt-2 border-red-600 hover:bg-transparent hover:text-red-600'>Logout</button></div>

                    
                  </div>}
                 
                     
              </div>
                <div className="mt-2">
                  <nav className="grid gap-y-4 ">
                    {mobileMenu.map((option) => (
                      <div className=''>
  <div className=' '>
                        <p id={option.option} className='text-lg font-semibold' onClick = {(e)=>handleOptionClick(e)}>{option.option}</p>
                       <div> {optionMenuToShow===option.option&&<ul className=' absolute top-20 left-0  z-30 bg-gray-200 min-h-[500px] max-w-full p-2 rounded-sm w-full flex flex-col items-end'>
                        <button className='w-full flex justify-center items-center ' onClick={()=>setOptionMenuToShow(null)}>{option.option}<md.MdClose className = 'text-red-600 font-bold'></md.MdClose></button>
                          {option.subOptions.map((subOption)=>{
                            return (
                            <li className='w-full my-2  '>
                              <a  href={subOption.href}>
                                <p className='w-full hover:bg-gray-300 bg-slate-100 p-2 ' >{subOption.name}</p>
                              </a>
                            </li>)
                            
})}
                        </ul>}</div>
                        
                      </div>
                      </div>

                    
                
                    ))}
                  </nav>
                </div>
              </div>
            
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      {showChat&&<Chat></Chat>}
    
    </div>
  )
}
