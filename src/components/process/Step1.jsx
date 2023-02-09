import React from 'react'
import Vector from '../../assets/Hospital family visit-bro.svg'
import Vector2 from '../../assets/Hospital family visit-rafiki.svg'
export default function Example() {
    return (
      <div className=" flex flex-col-reverse md:flex-row w-full justify-center items-center py-40">
                <img className='max-w-[350px] w-auto h-auto hidden 2xl:flex  ' src = {Vector2}></img>
        <div className=" max-w-2xl py-16 px-6 text-center sm:py-20 lg:px-8 ">
          <h2 className="text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl">
            <span className="block">Welcome to Healthcare Risk Advisors</span>
            <span className="block text-red-600 text-2xl">Transforming Healthcare One Patient at a Time.</span>
          </h2>
          <p className="mt-4 text-xl leading-2 underlined prose text-zinc-700  drop-shadow-md ">
          Our clinical initiatives are designed to encourage positive changes in culture and practice, support new technologies, and enhance operational efficiencies – all with the goal of achieving the best possible outcomes and increasing patient satisfaction.
          </p>
       
        </div>
        <img className='max-w-[350px] w-auto h-auto' src = {Vector}></img>
      </div>
    )
  }
