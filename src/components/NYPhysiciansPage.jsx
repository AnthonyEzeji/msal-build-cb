import React from 'react'
import ContactUs from './ContactUs'
import Footer from './Footer'
import Navbar from './Navbar'
import sheild_icon from '../assets/nyphysicians_page_img/shield.png'
import records_icon from '../assets/nyphysicians_page_img/records.png'
import communication_icon from '../assets/nyphysicians_page_img/communication.png'
import computer_icon from '../assets/nyphysicians_page_img/computer.png'
import indication_img from '../assets/nyphysicians_page_img/Consulting-rafiki.png'



export default function NYPhysiciansPage() {

  return (
    <>
    <Navbar/>  
    <div className="bg-slate-50">

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
        <div className="mx-auto max-w-3xl py-18 sm:py-30 lg:py-36">
          <div className="text-center">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Professional Liability insurance for physicians affiliated with leading New York hospitals
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            As part of The Doctors Company, we provide New York physicians and affiliated healthcare providers with a portfolio of flexible coverage options to meet your MPL needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                 <a
                href="#contactus"
                className="rounded-md px-3.5 py-2.5 text-sm font-semibold items-center justify-center  border-transparent bg-red-600 text-white hover:bg-transparent hover:text-red-600 border-[1px] border-red-600 md:py-4 md:px-10 md:text-lg"
                >
                Request an indication
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

    <div className="bg-slate-50">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-4 sm:py-6 lg:py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Available Discounts
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Looking to lower your premium? We provide Physicians with the following savings options.
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
        </div>
      </div>
    </div>

<section class="bg-slate-50 mx-auto px-4 py-2 pb-10 sm:px-6 lg:px-4">
    <div class="grid grid-cols-1 max-w-6xl mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="h-full w-full m-auto shadow bg-gradient-to-r from-slate-100 via-slate-50 to-white p-6 gap-8 rounded-lg border-2 border-slate-100">
                <div class="my-auto">
                <h3 className="text-6xl text-center text-zinc-800 font-bold">5%</h3>
                <h4 class="text-xl text-center text-zinc-700 font-bold">Risk Management Education Discount</h4>
                <div class="text-base text-center text-zinc-600">For the completion of risk management courses.</div>
                </div> 
                
            </div>

            <div className="h-full w-full m-auto shadow bg-gradient-to-r from-slate-100 via-slate-50 to-white p-6 gap-8 rounded-lg border-2 border-slate-100">
                <div class="my-auto">
                <h3 className="text-6xl text-center text-zinc-800 font-bold">5%</h3>
                <h4 class="text-xl text-center text-zinc-700 font-bold">Waiver of Consent Discount</h4>
                <div class="text-base text-center text-zinc-600">We handle any claim that comes your way, without your prior written consent.</div>
                </div>
            </div>

            <div class="h-full w-full m-auto shadow bg-gradient-to-r from-slate-100 via-slate-50 to-white p-6 gap-8 rounded-lg border-2 border-slate-100">
                <div class="my-auto">
                <h3 className="text-6xl text-center text-zinc-800 font-bold">7%</h3>
                <h4 class="text-xl text-center text-zinc-700 font-bold">Joint Defense Discount</h4>
                <div class="text-base text-center text-zinc-600">Automatic discount for insured physicians participating in joint defense.</div>
                </div>
            </div>

            <div class="h-full w-full m-auto shadow bg-gradient-to-r from-slate-100 via-slate-50 to-white p-6 gap-8 rounded-lg border-2 border-slate-100">
                <div class="my-auto">
                <h3 className="text-6xl text-center text-zinc-800 font-bold">5%</h3>
                <h4 class="text-xl text-center text-zinc-700 font-bold">Obstretrics Discount</h4>
                <div class="text-base text-center text-zinc-600">Discount for physicians affiliated with sponsor hospitals.</div>
                </div>
            </div>


            <div class="h-full w-full m-auto shadow bg-gradient-to-r from-slate-100 via-slate-50 to-white p-6 gap-8 rounded-lg border-2 border-slate-100">
                <div class="my-auto">
                <h3 className="text-4xl text-center text-zinc-800 font-bold">7.5% – 12%</h3>
                <h4 class="text-xl text-center text-zinc-700 font-bold">Claims-Free Discount</h4>
                <div class="text-base text-center text-zinc-600">7.5% discount for claims-free in last five years. 12% in last 10 years.</div>
                </div>
            </div>

            <div class="h-full w-full m-auto shadow bg-gradient-to-r from-slate-100 via-slate-50 to-white p-6 gap-8 rounded-lg border-2 border-slate-100">
                <div class="my-auto">
                <h3 className="text-6xl text-center text-zinc-800 font-bold">2%</h3>
                <h4 class="text-xl text-center text-zinc-700 font-bold">Prepay Discount</h4>
                <div class="text-base text-center text-zinc-600">Available to physicians that pay their annual premium in full prior to their due date.</div>
                </div>
            </div>


            <div class="h-full w-full m-auto shadow bg-gradient-to-r from-slate-100 via-slate-50 to-white p-6 gap-8 rounded-lg border-2 border-slate-100">
                <div class="my-auto">
                <h3 className="text-4xl text-center text-zinc-800 font-bold">35% – 50%</h3>
                <h4 class="text-xl text-center text-zinc-700 font-bold">Part Time Discount</h4>
                <div class="text-base text-center text-zinc-600">For physicians in surgical and non-surgical specialties working 20 hours or less per week.</div>
                </div>
            </div>

            <div class="h-full w-full m-auto shadow bg-gradient-to-r from-slate-100 via-slate-50 to-white p-6 gap-8 rounded-lg border-2 border-slate-100">
                <div class="my-auto">
                <h3 className="text-6xl text-center text-zinc-800 font-bold">50%</h3>
                <h4 class="text-xl text-center text-zinc-700 font-bold">New Doctor Discount</h4>
                <div class="text-base text-center text-zinc-600">Physicians who have recently completed an approved residency can receive a discount up to 50%.</div>
                </div>
            </div>

    </div>
</section>



<section class="pb-12 lg:pt-[120px] lg:pb-[90px] bg-white">
  <div class="container mx-auto">
    <div class="-mx-4">
      <div class="w-full px-4">
        <div class="mx-auto mb-12 max-w-[800px] text-center lg:mb-20">
          <h2
            class="text-dark mb-2 text-3xl font-bold sm:text-4xl md:text-[40px]"
          >
           Why Hospitals Insurance Company?
          </h2>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:lg:xl:grid-cols-4 group shadow-xl shadow-neutral-100 border ">
            <div
                class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                        <img src={records_icon} class="w-20 items-center" width="512" height="512" alt="burger illustration"/>
            
                      <p class="text-xl font-medium text-slate-700 mt-3">New York claims expertise.</p>
            </div>

            <div
                class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                        <img src={computer_icon} class="w-24 items-center" width="512" height="512" alt="burger illustration"/>
                         <p class="text-xl font-medium text-slate-700 mt-7">Competitive rates for affiliated physicians.</p>
                
            </div>

            <div class="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
                        <img src={communication_icon} class="w-20 items-center" width="512" height="512" alt="burger illustration"/>
                      
                <p class="text-xl font-medium text-slate-700 mt-3">Owned by The Doctors Company, the largest physician-owned medical malpractice insurer.</p>
                
            </div>


            <div class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
                        <img src={sheild_icon} class="w-20" width="512" height="512" alt="burger illustration"/>
                <p class="text-xl font-medium text-slate-700 mt-3">Financial strength – over $6.5B in assets.</p>
            </div>


        </div>

  </div>
</section>


<div class="flex h-screen items-center justify-center bg-slate-50 px-4">
  <div class="max-w-xl overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
    <img src={indication_img} alt="plant" class="h-auto w-full" />
    <div class="p-5 content-center text-center">
    <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Request and Indication</h1>
      <p className="m-2 mt-3 text-lg mb-5 text-gray-700">Want to calculate your potential savings? Complete the form below and we’ll respond within 48 hours to start your personalized quote. We’ll incorporate all applicable discounts based on the answers provided.</p>
      <button class="rounded-md px-3.5 py-2.5 text-sm font-semibold items-center justify-center  border-transparent bg-red-600 text-white hover:bg-transparent hover:text-red-600 border-[1px] border-red-600 md:py-4 md:px-10 md:text-lg">Request an Indication</button>
    </div>
  </div>
</div>



        

    




    <Footer/>
    </>
     
  )
}
