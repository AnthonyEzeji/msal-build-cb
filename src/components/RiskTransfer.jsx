import React from 'react'
import ContactUs from './ContactUs'
import FAQ from './FAQ'
import Footer from './Footer'
import Navbar from './Navbar'
import img from '../assets/risk-transfer.jpg'
function RiskTransfer() {
  return (
    <div className='pt-[103px]'>
         <div className="relative overflow-hidden bg-white py-16">
      <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
        <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
          <svg
            className="absolute top-12 left-full translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-red-600" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-red-600" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
         
        </div>
      </div>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg flex flex-col items-center">
          <h1>
            <span className="block text-center text-lg font-semibold text-red-600">Introducing</span>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Risk Transfer - Insurance Solutions
            </span>
          </h1>
          <img className = 'mt-10' src={img}/>
          <p className="mt-8 text-xl leading-8 text-gray-500">
          As part of The Doctors Company, Healthcare Risk Advisors offers a broad portfolio of insurance solutions for hospitals and healthcare organizations. We provide professional and general liability insurance coverage for hospitals and their employed healthcare professionals.
          </p>
        </div>
        <div className="prose prose-lg prose-red mx-auto mt-6 text-gray-500">
          <p>
          Keep your hospital or healthcare system on the leading edge with risk sharing, streamlined administration, consolidated coverage, and enhanced reporting—all provided by seasoned insurance and risk financing professionals.
           
          </p>
          <p>
          Our hospital clients also benefit from patient safety and claims services designed to reduce MPL risk, minimize claims and lower premiums.
           
          </p>
          
      
        
         
        
       
         
        
      
     
        </div>
      </div>
    </div>
        <Navbar/>
         <ContactUs></ContactUs>

<Footer/>
    </div>
  )
}

export default RiskTransfer