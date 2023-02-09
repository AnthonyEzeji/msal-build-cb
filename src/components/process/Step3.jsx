import React from 'react'
import { BiUpArrow } from 'react-icons/bi'
import Vector from '../../assets/Hospital family visit-bro.svg'
import Vector2 from '../../assets/Hospital family visit-rafiki.svg'
import Step3Image from '../../assets/Loss Run.svg'
export default function Example() {
    return (
      <div className=" flex flex-col  w-full justify-center items-center pt-16 pb-40">
      
        <div className=" max-w-2xl py-10 px-6 text-center sm:py-10 lg:px-8 ">
          <h2 className="text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl">
            <span className="block">Share your Loss Run</span>
            <span className="block text-red-600 text-2xl"></span>
          </h2>
        
        </div>
        <button className='p-2 bg-red-600 text-white w-fit flex items-center rounded-md font-semibold hover:bg-transparent hover:text-red-600 hover:border-red-600 border-[1px]'><p className='mr-1'>Upload</p> <BiUpArrow></BiUpArrow></button>
        <img className='max-w-[350px] w-auto h-auto' src = {Step3Image}></img>
       
      </div>
    )
  }
