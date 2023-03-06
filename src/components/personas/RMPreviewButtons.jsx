import React from 'react'

import { ArrowLeftIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import img from '../../assets/Risk management-rafiki.svg'
import { Link, useNavigate } from 'react-router-dom'
import { loginRequest } from '../../authConfig'
import { useIsAuthenticated, useMsal } from '@azure/msal-react'
const features = [
  {
    name: 'Hospital Med Mal Overview :',
    description:
      'Review your Med Mal Exposure.',
    icon: CloudArrowUpIcon,
    href:'/risk-manager/med-mal',
    hrefLive:'/risk-manager/med-mal-live'
  },
  {
    name: 'Frequency/Severity Trends :',
    description: 'Find out how you are trending.',
    icon: LockClosedIcon,
    href:'/risk-manager/frequency-severity-trends',
    hrefLive:'/risk-manager/frequency-severity-trends-live'

  },
  {
    name: 'National Benchmarking :',
    description: 'Find out how you compare against similar organizations.',
    icon: ServerIcon,
    href:'/risk-manager/national-benchmarking',
    hrefLive:'/risk-manager/national-benchmarking-live'
  },
]

export default function Example() {
  var navigate = useNavigate()
  const isAuthenticated = useIsAuthenticated()
  const {instance} = useMsal()
  const handleLogin = () => {
    /* instance.loginPopup(loginRequest).catch(e => {
         console.log(e);
     }); */
     instance.loginRedirect(loginRequest).catch(e => {
       console.log(e);
   });
  }
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
            <ArrowLeftIcon  className='w-8' onClick ={()=>navigate(`/`)}/>
              <h2 className="text-base font-semibold leading-7 text-red-600">Mitigate Risk</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Risk Manager</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              It is time for businesses to shift from risk management to a risk enabled performance management system to identify emerging risk trends.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute top-1 left-1 h-5 w-5 text-red-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}<a href = {feature.href} className='text-red-500 mx-2 font-semibold hover:border-none border-b border-red-500'>View Sample</a>{!isAuthenticated===true?<Link onClick={handleLogin} to = {feature.hrefLive} className='text-sky-600 mx-2 font-semibold hover:border-none border-b border-sky-600'>View Live Dashboard &#40;Sign-In Required&#41;</Link>:<Link  to = {feature.hrefLive} className='text-sky-600 mx-2 font-semibold hover:border-none border-b border-sky-600'>View Live Dashboard &#40;Sign-In Required&#41;</Link>}</dd>
                    
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