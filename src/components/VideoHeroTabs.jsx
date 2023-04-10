import React from 'react'

import mp4 from '../assets/3270945556.mp4'
import Vimeo from '@u-wave/react-vimeo'
import { useIsAuthenticated, useMsal } from '@azure/msal-react'
import { useState } from 'react'
import { loginRequest } from '../authConfig'
import { Link } from 'react-router-dom'
import { LightBulbIcon } from '@heroicons/react/24/solid'
function VideoHeroTabs({video}) {
    function callback(){
        return
    }
    const { instance } = useMsal();
    let isAuthenticated = useIsAuthenticated()
    const handleLogin = () => {
      /* instance.loginPopup(loginRequest).catch(e => {
           console.log(e);
       }); */
       instance.loginRedirect(loginRequest).catch(e => {
         console.log(e);
     });
   }
    const [heroTab,setHeroTab ] = useState({caption:'CXO', url:'/cxo',previewMessage:'Monitor your hospital\'s risk, finance and KPIs. Benchmark your department\'s performance to your peers.'})
    function handleTabClick(e){
        console.log(e.target.id)
        switch (e.target.id) {
            case 'cro':
                setHeroTab({caption:'Risk Manager', url:'/risk-manager',previewMessage:' Shift to pro-active risk management and deliver actionable insights to your providers.'})
                break;
                case 'cmo':
                    setHeroTab({caption:'Department Chair', url:'/department-chair',previewMessage:' Obtain clarity on procedures and diagnosis associated with malpractice.'})
                    break;
                    case 'csuite':
                        setHeroTab({caption:'CXO', url:'/cxo',previewMessage:'Monitor your hospital\'s risk, finance and KPIs. Benchmark your department\'s performance to your peers.'})
                        break;
        
            default:
                setHeroTab('Risk Manager')
                break;
        }
    }
  return (

<div className = 'pb-[56.25%] relative '>  <iframe src={video} webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" allowFullScreen={true} frameborder="0" className='w-[100%] h-[100%] absolute top-0 left-0 z-30' allow="autoplay; fullscreen">

  </iframe>
  <div className="mx-auto w-fit max-w-7xl mt-16 pb-20 text-center lg:ml-20 lg:my-48 lg:text-left z-30 absolute  ">
  
    <div className="w-fit max-w-[700px]  2xl:mx-auto 2xl:mt-20 relative flex  items-start justify-center p-4 bg-black/[.60] rounded-2xl">
        <div className = 'w-full '>
        <h1 className="text-xl font-bold tracking-tight text-white sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl">
        <span className="block xl:inline">Creating Partnerships to </span>{' '}
        <br></br>
        <span className="block text-red-500 xl:inline">Advance, Protect and Reward Superior Healthcare</span>
      </h1>
      <p className="hidden md:flex mx-auto mt-3 max-w-md text-sm text-white font-light leading-1 sm:text-md md:mt-5 md:max-w-3xl">
        Healthcare Risk Advisors partners with healthcare organizations to identify and solve their unique challenges in services for self-insurance programs, risk transfer, risk management, and claims and litigation.
      </p>
      <a href='/totm' className='flex items-center border-[1px]   my-2 rounded-r-full justify-center text-white group hover:bg-yellow-400 hover:text-black'>
        <LightBulbIcon className='w-5 group-hover:text-black text-yellow-400'/>
        <p className='font-semibold m-1  '>
        Tip of the Month
        </p>
        
      </a>
        </div>
    <div className = 'h-full flex flex-col justify-start ml-3 border-l-[.5px] border-red-500 pl-6 min-h-[300px] '>
    <div className='flex w-fit justify-evenly '>
    <button id='csuite' onClick={(e)=>handleTabClick(e)} className = {`hover:border-slate-300 hover:border-b-2 flex font-medium   h-[70px] w-flex mx-5 text-white ${heroTab.caption==='CXO'&&'border-b-2 border-red-400'}`}>CXO</button>
    <button id='cmo' onClick={(e)=>handleTabClick(e)}  className = {`hover:border-slate-300 hover:border-b-2 flex  font-medium    h-[70px] w-fit mx-5 text-white ${heroTab.caption==='Department Chair'&&'border-b-2 border-red-400'}`}>Department Chair</button>
    <button id='cro' onClick={(e)=>handleTabClick(e)} className = {`hover:border-slate-300 hover:border-b-2 flex  font-medium    h-[70px] w-fit mx-5 text-white ${heroTab.caption==='Risk Manager'&&'border-b-2 border-red-400'}`}>Risk Manager</button>
    

</div>
<div className=' my-10 w-full h-full flex flex-col items-center '>


 <p className='text-white text-lg h-[100px] w-[350px]'>{heroTab?.previewMessage}</p>
</div>
  
    <div className=" sm:flex sm:justify-center lg:justify-start w-full">
      <div className="rounded-md shadow w-full">
      {<Link
          to={heroTab.url}
          className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-transparent hover:text-red-600 border-[1px] border-red-600 md:py-4 md:px-10 md:text-lg "
        >
        Learn More
        </Link>}
       
      </div>
     
    </div>

    </div>

    </div>
  </div></div>

  )
}

export default VideoHeroTabs