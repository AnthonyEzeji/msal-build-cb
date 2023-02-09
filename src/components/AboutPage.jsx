import React from 'react'
import { Link } from 'react-router-dom'
import ContactUs from './ContactUs'
import FAQ from './FAQ'
import Footer from './Footer'
import Navbar from './Navbar'
import img from '../assets/istockphoto-1322854789-170667a.jpg'
function AboutPage() {
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
     <svg
       className="absolute bottom-12 left-full translate-x-32 transform"
       width={404}
       height={384}
       fill="none"
       viewBox="0 0 404 384"
     >
       <defs>
         <pattern
           id="d3eb07ae-5182-43e6-857d-35c643af9034"
           x={0}
           y={0}
           width={20}
           height={20}
           patternUnits="userSpaceOnUse"
         >
           <rect x={0} y={0} width={4} height={4} className="text-red-600" fill="currentColor" />
         </pattern>
       </defs>
       <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
     </svg>
   </div>
 </div>
 <div className="relative px-6 lg:px-8">
   <div className="mx-auto max-w-prose text-lg flex flex-col items-center">
     <h1>
       <span className="block text-center text-lg font-semibold text-red-600">Our Mission</span>
       <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
         About Us
       </span>
     </h1>
     <img className = 'mt-10' src={img}/>
     <p className="mt-8 text-xl leading-8 text-gray-500">
     Healthcare Risk Advisors (HRA) offers insurance and risk management services, including consulting focused on self-insurance, risk transfer methods, the reduction of liability and improvement of patient outcomes, and more. With an overall goal of ensuring appropriate levels of coverage and access to best-in-class risk mitigation services and resources, HRA is focused on allowing our members to focus their time and effort on the communities they serve. 
     </p>
   </div>
   <div className="prose prose-lg prose-red mx-auto mt-6 text-gray-500">
     <p>
     With over four decades of experience in the New York State medical insurance and risk management scene, HRA brings a long and successful history of working successfully with some of biggest hospital systems in the state, including The Mount Sinai and Montefiore Health Systems. HRA’s resources include those of the former Hospitals Insurance Company, (HIC) an entity with a long history of writing and filling the professional liability insurance needs of New York doctors – including hospital clients and their associated Voluntary Attending Physicians (VAPs.)
      
     </p>
     <p>
     Today, HRA is expanding its partnerships beyond larger hospital systems to include community hospitals, Voluntary Attending Physicians, and other groups of various sizes. HRA is committed to making its services available to organizations large and small, and continuing to leverage lessons learned from decades of experience to help members gain access to best-in-class risk prevention services.
      
     </p>
    <p>HRA is a member of the TDC Group, a $6B entity serving over 100,000 healthcare providers and organizations as the nation’s largest provider of Insurance, Risk Management, and Healthcare Practice Improvement Solutions.</p>
 
   
    
   
  
    
   
 

   </div>
 </div>
</div>
   <Navbar/>
 
    <ContactUs></ContactUs>
<FAQ></FAQ>
<Footer/>
</div>
  )
}

export default AboutPage