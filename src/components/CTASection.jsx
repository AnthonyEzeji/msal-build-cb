import React from 'react'
import Vector from '../assets/Risk management-bro.svg'
export default function Example() {
    return (
      <div className="bg-red-600  flex flex-col-reverse md:flex-row w-full justify-center">
        <div className=" max-w-2xl py-16 px-6 text-center sm:py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Mangage your risk.</span>
            <span className="block">Contact us today.</span>
          </h2>
          <p className="mt-4 text-xl leading-2 prose text-zinc-900 drop-shadow-md ">
          Our clinical initiatives are designed to encourage positive changes in culture and practice, support new technologies, and enhance operational efficiencies – all with the goal of achieving the best possible outcomes and increasing patient satisfaction.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex w-full items-center justify-center rounded-md border-transparent bg-white px-5 py-3 text-base font-medium text-red-600 hover:bg-transparent hover:text-white border-[1px] hover:border-white sm:w-auto"
          >
            Request An Indication
          </a>
         
        </div>
        <img className='max-w-[400px]' src = {Vector}></img>
      </div>
    )
  }

