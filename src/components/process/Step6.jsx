import React from 'react'
import Vector from '../../assets/Hospital family visit-bro.svg'
import Vector2 from '../../assets/Hospital family visit-rafiki.svg'
import Step6Image from '../../assets/Plaintiff Firm.svg'
export default function Example() {
    return (
      <div className=" flex flex-col  w-full justify-center items-center pt-16 pb-40">
      
        <div className=" max-w-2xl pt-10 pb-5 px-6 text-center sm:py-5 lg:px-8 ">
          <h2 className="text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl">
            <span className="block">Know Your Plaintiff Firms</span>
            <span className="block text-red-600 text-3xl">Devise a Data Driven Litigation Strategy</span>
          </h2>
        
        </div>
        <img className='max-w-[350px] w-auto h-auto' src = {Step6Image}></img>
      </div>
    )
  }
