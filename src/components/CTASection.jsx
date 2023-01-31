import React from 'react'

export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-6 text-center sm:py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">
            <span className="block">Mangage your risk.</span>
            <span className="block">Contact us today.</span>
          </h2>
          <p className="mt-4 text-lg leading-2 prose text-black">
          Our clinical initiatives are designed to encourage positive changes in culture and practice, support new technologies, and enhance operational efficiencies – all with the goal of achieving the best possible outcomes and increasing patient satisfaction.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-5 py-3 text-base font-medium text-white hover:bg-transparent hover:text-red-600 border-[1px] hover:border-white sm:w-auto"
          >
            Request An Indication
          </a>
        </div>
      </div>
    )
  }

