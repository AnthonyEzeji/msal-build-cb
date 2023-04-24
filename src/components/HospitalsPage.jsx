import React from 'react'
import ContactUs from './ContactUs'
import FAQ from './FAQ'
import Footer from './Footer'
import Navbar from './Navbar'
import img from '../assets/hospitals_page_img/hospitals_page.jpg'
import risk_transfer_icon from '../assets/hospitals_page_img/risk_transfer_icon.png'
import self_insurance_icon from '../assets/hospitals_page_img/self_insurance_programs_icon.png'
import claims_litigation_icon from '../assets/hospitals_page_img/claims_litigation_icon.png'
import patient_safety_icon from '../assets/hospitals_page_img/patient_safety_icon.png'
import data_analytics_service from '../assets/hospitals_page_img/data_analytics_service.png'

function HospitalsPage() {
  return (
    <>
      <Navbar />

      <div className="bg-white">
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
            className="absolute top-1/3 right-full -translate-y-1/2 -translate-x-32 transform"
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
        </div></div>
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-24 sm:py-36 lg:py-42">
          <div className="text-center">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Solutions for Hospitals
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-700">
            Comprehensive insurance and risk management advisory services for hospitals and healthcare organizations.
            </p>
            <p className="mt-1 text-base leading-8 text-slate-600">
            For over 40 years, Healthcare Risk Advisors has partnered with large and small healthcare organizations to identify and solve their unique self-insurance, risk transfer, and risk management needs.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
                 <a
                href="#contactus"
                className="rounded-md px-3.5 py-2.5 text-sm font-semibold items-center justify-center  border-transparent bg-red-600 text-white hover:bg-transparent hover:text-red-600 border-[1px] border-red-600 md:py-4 md:px-10 md:text-lg"
                >
                Contact Us
                </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
        </div>
      </div>
    </div>
      

      <div class=" bg-gray-50 overflow-hidden ">
    <div class="container m-auto px-6 space-y-8 text-gray-500 md:px-12 ">
        <div>
            <h2 class="mt-4 text-2xl text-slate-700 font-bold md:text-4xl">Services <br class="lg:block" hidden/></h2>
            <span class="text-zinc-700 text-lg font-semibold">How can Healthcare Risk Advisors help you manage your risk? HRA offers the following intervention services.</span>
        </div>
        <div class="mt-16 grid  divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
            <div class="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div class="relative p-8 space-y-8">
                    <img src={risk_transfer_icon} class="w-10" width="512" height="512" alt="burger illustration"/>
                    
                    <div class="space-y-2">
                        <h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Risk Transfer</h5>
                        <p class="text-sm text-gray-600">Professional and General Liabilit Coverage.</p>
                    </div>
                    <a href="/solutions/risk-transfer" class="flex justify-between items-center group-hover:text-yellow-600">
                        <span class="text-sm">Learn more</span>
                        <span class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&#8594;</span>
                    </a>
                </div>
            </div>
            <div class="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div class="relative p-8 space-y-8">
                    <img src={self_insurance_icon} class="w-10" width="512" height="512" alt="burger illustration"/>
                    
                    <div class="space-y-2">
                        <h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Self-Insurance Programs</h5>
                        <p class="text-sm text-gray-600">Design, setup and self-insurance adminitration services.</p>
                    </div>
                    <a href="/solutions/self-insurance" class="flex justify-between items-center group-hover:text-yellow-600">
                        <span class="text-sm">Learn more</span>
                        <span class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&#8594;</span>
                    </a>
                </div>
            </div>
            <div class="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div class="relative p-8 space-y-8">
                    <img src={claims_litigation_icon} class="w-10" width="512" height="512" alt="burger illustration"/>
                    
                    <div class="space-y-2">
                        <h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Claims and Litigation Services</h5>
                        <p class="text-sm text-gray-600">Over 30 years experience handling hospital claims</p>
                    </div>
                    <a href="/solutions/claims-and-litigation" class="flex justify-between items-center group-hover:text-yellow-600">
                        <span class="text-sm">Learn more</span>
                        <span class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&#8594;</span>
                    </a>
                </div>
            </div>

            <div class="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div class="relative p-8 space-y-8">
                    <img src={patient_safety_icon} class="w-10" width="512" height="512" alt="burger illustration"/>
                    
                    <div class="space-y-2">
                        <h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Patient Safety and Risk Management</h5>
                        <p class="text-sm text-gray-600">Education, training and risk management best practices.</p>
                    </div>
                    <a href="/solutions/patient-safety-and-risk-management" class="flex justify-between items-center group-hover:text-yellow-600">
                        <span class="text-sm">Learn more</span>
                        <span class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&#8594;</span>
                    </a>
                </div>
            </div>

            <div class="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div class="relative p-8 space-y-8">
                    <img src={data_analytics_service} class="w-10" width="512" height="512" alt="burger illustration"/>
                    
                    <div class="space-y-2">
                        <h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">Data Analytics Services</h5>
                        <p class="text-sm text-gray-600">Leveraging claims, risk, and clinical data in support of patient safety initiatives.</p>
                    </div>
                    <a href="/solutions/hospitals/data-analytics" class="flex justify-between items-center group-hover:text-yellow-600">
                        <span class="text-sm">Learn more</span>
                        <span class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&#8594;</span>
                    </a>
                </div>
            </div>

            
          
        </div>
    </div>
</div>


     
      <section id ="contactus"> <ContactUs/> </section>
      
      <Footer/>
    </>
  )
}

export default HospitalsPage