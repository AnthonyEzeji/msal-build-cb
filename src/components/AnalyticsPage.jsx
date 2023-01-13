import React from 'react'
import ContactUs from './ContactUs'
import FAQ from './FAQ'
import Footer from './Footer'
import Navbar from './Navbar'
import img from '../assets/hra_analytics_smphoto.jpg'
function AnalyticsPage() {
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
                <rect x={0} y={0} width={4} height={4} className="text-indigo-600" fill="currentColor" />
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
                <rect x={0} y={0} width={4} height={4} className="text-indigo-600" fill="currentColor" />
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
                <rect x={0} y={0} width={4} height={4} className="text-indigo-600" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-lg flex flex-col items-center">
          <h1>
            <span className="block text-center text-lg font-semibold text-indigo-600">Introducing</span>
            <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Data Analytics Center of Excellence
            </span>
          </h1>
          <img className = 'mt-10' src={img}/>
          <p className="mt-8 text-xl leading-8 text-gray-500">
          HRA leverages a team of actuaries and healthcare analytics experts to support our clients in making data-driven decisions to improve patient safety and reduce medical malpractice exposures, leading to improved financial performance.
          </p>
        </div>
        <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
          <p>
          Data sharing and collaboration is essential to improving patient safety and reducing the rate of medical malpractice claims – and to ensure your policy is priced to appropriately manage your risk. Through the identification of high-risk, high-cost complications, and the implementation of effective operational improvements, together, we can accelerate patient safety and optimize risk management efforts.
           
          </p>
          <p>
          Our experienced analytics team leverages a modern data analytics platform, and analyzes a wealth of procedural and claims data to identify liability trends, losses, and potential exposures. Then, our in-house experts collaboratively with our clients, develop actions plans and resources to mitigate the risk identified by the analytics team. We partner with your teams to establish an organizational culture that encourages constant improvement in risk management efforts.
           
          </p>
          <p className='text-xl text-black'>
            We use analytics to:
          </p>
          <ul role="list">
            <li>- Ensure we’re underwriting at the right price to manage your risk​
</li>
            <li>- Pass along savings not identifiable with traditional loss rating techniques</li>
            <li>- Make recommendations to improve your losses by identifying patterns that are driving losses across our customer base</li>
            <li>- Help you integrate risk management and patient safety in a way that motivates change and drives action by highlighting the drivers between medical liability and your larger operations</li>
            <li>- Partner with your teams to support your priority projects with customized data and insight​​</li>
          </ul>
      
        
         
        
       
         
        
      
     
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

export default AnalyticsPage