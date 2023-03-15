import React, { useEffect } from 'react'
import Vector from '../assets/Risk management-bro.svg'
import Vector2 from '../assets/Orthopedic-bro.svg'
import LossRun2 from './LossRun2'
import { useState } from 'react';
export default function Example() {
  const [showLossRun, setShowLossRun] = useState(false);
  useEffect(() => {
   console.log(showLossRun)
  }, [showLossRun])
  
  
    return (
      <div className={` flex flex-col-reverse md:flex-row w-full justify-center items-center md:py-20   `}>
                <img className='max-w-[450px] w-auto h-auto hidden 2xl:flex  ' src = {Vector2}></img>
        <div className=" max-w-2xl py-16 px-6 text-center relative sm:py-20 lg:px-8   h-[600px] max-w-[600px]">
         
         {!showLossRun&& <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl">
            <span className="block">Mangage your risk.</span>
            <span className="block text-red-600">Contact us today.</span>
          </h2>
          <p className="mt-4 text-xl leading-2 underlined prose text-zinc-700  drop-shadow-md ">
          Our clinical initiatives are designed to encourage positive changes in culture and practice, support new technologies, and enhance operational efficiencies – all with the goal of achieving the best possible outcomes and increasing patient satisfaction.
          </p>
          </div>} 
         <LossRun2 showLossRun={showLossRun} setShowLossRun={setShowLossRun} />
         
        </div>
        <img className='max-w-[450px] w-auto h-auto' src = {Vector}></img>
      </div>
    )
  }

