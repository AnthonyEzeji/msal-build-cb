import React from 'react'

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import img from '../../assets/department-chair-pic.svg'
const features = [
  {
    name: 'Frequent Flyers :',
    description:
      'Find your frequent flyers and take prescriptive actions to mitigate risk.',
    icon: CloudArrowUpIcon,
    href:'/department-chair/freq-flyers'
  },
  {
    name: 'ICD Level Malpractice Insights :',
    description: 'Med Mal Insights reviewing the Procedure and Diagnosis.',
    icon: LockClosedIcon,
    href:'/department-chair/icd-level-malpractice-insights'
  },
  {
    name: 'Med Mal Contributing Factors :',
    description: 'Identify the leading contributing factors leading to Med Mal.',
    icon: ServerIcon,
    href:'/department-chair/med-mal-contributing-factors'
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-red-600">Find Insights</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Department Chair</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We will help the department chair to review the  performance and also enable them to manage risk better.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute top-1 left-1 h-5 w-5 text-red-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}<a href = {feature.href} className='text-red-500 mx-2 font-semibold border-b border-red-500'>View Insights.</a></dd>
                    
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={img}
            alt="Product screenshot"
            className="w-[48rem] max-w-[600px] rounded-xl  sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}