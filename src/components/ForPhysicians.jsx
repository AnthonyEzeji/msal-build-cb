import React from 'react'

import { CheckIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const features = [
  {
    name: '5% Risk Management Education Discount',
    description:
      'For the completion of risk management courses.',
  },
  {
    name: '5% Waiver of Consent Discount',
    description: 'We handle any claim that comes your way, without your prior written consent.',
  },
  {
    name: '7% Joint Defense Discount',
    description:'Automatic discount for insured physicians participating in joint defense.',
  },
  {
    name: '5% Obstretrics Discount',
    description:
      'Discount for physicians affiliated with sponsor hospitals.',
  },
  {
    name: '7.5% – 12% Claims-Free Discount',
    description: '7.5% discount for claims-free in last five years. 12% in last 10 years.',
  },
  {
    name: '2% Prepay Discount',
    description: 'Available to physicians that pay their annual premium in full prior to their due date.',
  },
  {
    name: '35% – 50% Part Time Discount',
    description:
      'For physicians in surgical and non-surgical specialties working 20 hours or less per week.',
  },
  {
    name: '50% New Doctor Discount',
    description:
      'Physicians who have recently completed an approved residency can receive a discount up to 50%.',
  },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">New York Physicians</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-600">
            Quia est qui aut velit exercitationem repudiandae voluptatem facilis. Neque est debitis dolor facilis ab
            amet.
          </p>
        </div>
        <dl className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon className="absolute mt-1 h-6 w-6 text-red-600" aria-hidden="true" />
                <p className="ml-10 text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-10 text-base leading-7 text-gray-600">{feature.description}</dd>
            </div>
          ))}
        </dl>
        <button className='mt-10 w-full bg-red-600 rounded-md p-3 font-semibold text-white border-[1px] hover:border-red-600 hover:bg-transparent hover:text-red-600'><a href="/solutions/ny-physicians">More</a></button>
      </div>
    </div>
  )
}