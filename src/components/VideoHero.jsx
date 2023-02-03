import React from 'react'

import mp4 from '../assets/3270945556.mp4'
import Vimeo from '@u-wave/react-vimeo'
function VideoHero({video}) {
    function callback(){
        return
    }
  return (

<div className = 'pb-[56.25%] relative '>  <iframe src={video} webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" allowFullScreen={true} frameborder="0" className='w-[100%] h-[100%] absolute top-0 left-0 z-30' allow="autoplay; fullscreen">

  </iframe>
  <div className="mx-auto w-fit max-w-7xl mt-16 pb-20 text-center lg:my-48 lg:text-left z-30 absolute ">
    <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
      <h1 className="text-xl font-bold tracking-tight text-white sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl">
        <span className="block xl:inline">Creating Partnerships to </span>{' '}
        <span className="block text-red-600 xl:inline">Advance, Protect and Reward Superior Healthcare</span>
      </h1>
      <p className="hidden md:flex mx-auto mt-3 max-w-md text-lg text-white font-light leading-1 sm:text-xl md:mt-5 md:max-w-3xl">
        Healthcare Risk Advisors partners with healthcare organizations to identify and solve their unique challenges in services for self-insurance programs, risk transfer, risk management, and claims and litigation.
      </p>
      <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
          <a
            href="#"
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-transparent hover:text-red-600 border-[1px] border-red-600 md:py-4 md:px-10 md:text-lg"
          >
            Get started
          </a>
        </div>
       
      </div>
    </div>
  </div></div>

  )
}

export default VideoHero