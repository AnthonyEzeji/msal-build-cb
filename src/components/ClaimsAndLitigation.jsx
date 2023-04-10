import React from 'react'
import ContactUs from './ContactUs'
import FAQ from './FAQ'
import Footer from './Footer'
import Navbar from './Navbar'
import img from '../assets/claims-and-litigation.jpg'
function ClaimsAndLitigtion () {
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
    Claims and Litigation Services
            </span>
          </h1>
          <img className = 'mt-10' src={img}/>
          <p className="mt-8 text-xl leading-8 text-gray-500">
          Healthcare Risk Advisors has decades of experience handling hospital claims. We have the people, expertise, and experience to defend you and your providers.
          </p>
        </div>
        <div className="prose prose-lg prose-red mx-auto mt-6 text-gray-500">
          <p>
          HIC’s claim philosophy is to aggressively defend claims without merit and fairly and efficiently resolve those that do. 
           
          </p>
          <p>
          Our attorneys have years of experience defending medical malpractice, long term care, and general liability cases. By working closely with our risk management team and leveraging our own investigators and registered nurses, we bring a thorough understanding of hospital medicine and common procedures across specialties.  For cases with merit, efforts are made to negotiate a fair settlement, as early resolution helps control both indemnity and expense costs for our insureds. Claims that do not appear to have merit are vigorously defended
           
          </p>
          
      
          <p>
          We establish close working relationships with our hospital clients and maintain a high level of communication throughout the claims process. You can count on our team to protect your interests and work to achieve best possible outcomes.
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

export default ClaimsAndLitigtion 