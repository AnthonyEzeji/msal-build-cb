import React from 'react'
import HeroImage from '../assets/blog images/HeroHealthCare.jpg';
function Hero() {
  return (  <main className="lg:relative">
  <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
    <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
      <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl">
        <span className="block xl:inline">Creating Partnerships to </span>{' '}
        <span className="block text-indigo-600 xl:inline">Advance, Protect and Reward Superior Healthcare</span>
      </h1>
      <p className="mx-auto mt-3 max-w-md text-lg text-slate-800 sm:text-xl md:mt-5 md:max-w-3xl">
        Healthcare Risk Advisors partners with healthcare organizations to identify and solve their unique challenges in services for self-insurance programs, risk transfer, risk management, and claims and litigation.
      </p>
      <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
          <a
            href="#"
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-transparent hover:text-indigo-600 border-[1px] border-indigo-600 md:py-4 md:px-10 md:text-lg"
          >
            Get started
          </a>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <a
            href="#"
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-slate-50 md:py-4 md:px-10 md:text-lg"
          >
            Live demo
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
    <img
      className="absolute inset-0 h-full w-full object-cover"

      src={HeroImage}alt=""
    />
  </div> 
</main>
  )
}

export default Hero