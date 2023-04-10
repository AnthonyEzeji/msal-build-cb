import React from 'react'
import ContactUs from './ContactUs'
import FAQ from './FAQ'
import Footer from './Footer'
import Navbar from './Navbar'
import img from '../assets/patient-safety-img.jpg'
function PatientSafety() {
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
            Patient Safety & Risk Management
            </span>
          </h1>
          <img className = 'mt-10' src={img}/>
          <p className="mt-8 text-xl leading-8 text-gray-500">
          The Healthcare Risk Advisors Risk Management team is responsible for minimizing malpractice risk through the development and support of risk reduction strategies.  Our team works collaboratively with our insured hospitals, physicians and long-term care facilities to improve healthcare quality and safety and reduce malpractice risk.
          </p>
        </div>
        <div className="prose prose-lg prose-red mx-auto mt-6 text-gray-500">
          <p>
          Under the direction of our chief medical officer, the program supports our clients’ efforts to improve patient safety across all areas of medicine. Our clinical initiatives are designed to encourage positive changes in culture and practice, support new technologies, and enhance operational efficiencies – all with the goal of achieving the best possible outcomes and increasing patient satisfaction.  Our initiatives are developed with input from clinical committees, analysis of internal and external data, evaluation of medical literature and opinions from experts, interactions with clinical leaders from our insured institutions, and funding from the program.
           
          </p>
          <p>
          We engage clinical and administrative leadership to develop interventions and teaching opportunities in high-risk areas. Our team accesses data from a variety of sources, including clinical records, state and national research databases, surveys, and claims information.  Our findings help define and inform the department’s focus, objectives and communication with clients.
           
          </p>
          
      
          <p>
        
          Our interventions include team and simulation training, development of best practice guidelines, documentation standards, and reducing risks associated with electronic medical record systems. Our team also conducts office assessments and provides ongoing education for insured physicians in the form of online courses, regular webinars, and bi-annual risk management conferences
          </p>
          <p>
          Our goal is to minimize claims and lower premiums by preventing patient harm, enhancing teamwork, and improving documentation.
           
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

export default PatientSafety