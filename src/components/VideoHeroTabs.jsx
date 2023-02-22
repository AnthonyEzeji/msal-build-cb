import React from 'react'

import mp4 from '../assets/3270945556.mp4'
import Vimeo from '@u-wave/react-vimeo'
import { useIsAuthenticated } from '@azure/msal-react'
import { useState } from 'react'
function VideoHeroTabs({video}) {
    function callback(){
        return
    }
    const isAuthenticated = useIsAuthenticated()
    const [heroTab,setHeroTab ] = useState('Risk Manager')
    function handleTabClick(e){
        console.log(e.target.id)
        switch (e.target.id) {
            case 'cro':
                setHeroTab('Risk Manager')
                break;
                case 'cmo':
                    setHeroTab('Department Chair')
                    break;
                    case 'csuite':
                        setHeroTab('Finance')
                        break;
        
            default:
                setHeroTab('Risk Manager')
                break;
        }
    }
  return (

<div className = 'pb-[56.25%] relative '>  <iframe src={video} webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" allowFullScreen={true} frameborder="0" className='w-[100%] h-[100%] absolute top-0 left-0 z-30' allow="autoplay; fullscreen">

  </iframe>
  <div className="mx-auto w-fit max-w-7xl mt-16 pb-20 text-center lg:ml-20 lg:my-48 lg:text-left z-30 absolute ">
  
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
        </div>
    <div className = 'h-full flex flex-col justify-start ml-3'>
    <div className='flex w-fit '>
    
    <button id='cro' onClick={(e)=>handleTabClick(e)} className = {` h-[70px] w-[75px] mx-5 text-white ${heroTab==='Risk Manager'&&'border-b border-red-400'}`}>CRO</button>
    <button id='cmo' onClick={(e)=>handleTabClick(e)}  className = {` h-[70px] w-[75px] mx-5 text-white ${heroTab==='Department Chair'&&'border-b border-red-400'}`}>CMO</button>
    <button id='csuite' onClick={(e)=>handleTabClick(e)} className = {` h-[70px] w-[75px] mx-5 text-white ${heroTab==='Finance'&&'border-b border-red-400'}`}>C-Suite</button>
</div>
<div className=' py-2 w-full'>
  <h1 className='text-white text-2xl w-full  mx-4 my-8 min-h-[100px]'>
{heroTab}
  </h1>
</div>
  
    <div className=" sm:flex sm:justify-center lg:justify-start w-full">
      <div className="rounded-md shadow w-full">
      {isAuthenticated?  <a
          href="/get-started"
          className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-transparent hover:text-red-600 border-[1px] border-red-600 md:py-4 md:px-10 md:text-lg "
        >
        Learn More
        </a>: <a
          href="/login"
          className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-transparent hover:text-red-600 border-[1px] border-red-600 md:py-4 md:px-10 md:text-lg"
        >
        Learn More
        </a>}
       
      </div>
     
    </div>

    </div>

    </div>
  </div></div>

  )
}

export default VideoHeroTabs