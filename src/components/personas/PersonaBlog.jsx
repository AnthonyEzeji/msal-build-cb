import { PowerBIEmbed } from 'powerbi-client-react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../Navbar'
import { models } from 'powerbi-client';
import Footer from '../Footer'
import { ArrowLeftCircleIcon, CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import { AuthenticatedTemplate, UnauthenticatedTemplate, useIsAuthenticated, useMsal } from '@azure/msal-react'
import { BiLeftArrow } from 'react-icons/bi'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

import img1 from '../../assets/persona images/department-insights.png'
import img2 from '../../assets/persona images/financial-benchmark.png'
import img3 from '../../assets/persona images/freq-flyers.png'
import img4 from '../../assets/persona images/freq-sev-trends.png'
import img5 from '../../assets/persona images/icd-level-med-mal.png'
import img6 from '../../assets/persona images/kpi-boardroom.png'
import img7 from '../../assets/persona images/med-mal-contributing-factors.png'
import img8 from '../../assets/persona images/med-mal-overview.png'
import img9 from '../../assets/persona images/national-benchmark.png'
//map for persona-blog content with routes as keys
const dashboards = {
  '/cxo/department-insights':{img:img1,content:'New Content', caption:'Department Insights' , persona : 'CXO'},
  '/cxo/financial-benchmarking':{img:img2,content:'New Content', caption:'Financial Benchmarking', persona : 'CXO'},
  '/cxo/kpi-boardroom':{img:img6,content:'New Content', caption:'KPI Boardroom', persona : 'CXO'},
  '/department-chair/med-mal-contributing-factors':{img:img7,content:'New Content', caption:'Med Mal Contributing Factors', persona : 'Department Chair'},
  '/department-chair/icd-level-malpractice-insights':{img:img5,content:'New Content', caption:'ICD Level Malpractice Insights', persona : 'Department Chair'},
  '/department-chair/freq-flyers':{img:img3,content:'New Content', caption:'Frequent Flyers' , persona : 'Department Chair'},
  '/risk-manager/med-mal':{img:img8,content:'New Content', caption:'Hospital Med Mal Overview' , persona : 'Risk Manager'},
  '/risk-manager/frequency-severity-trends':{img:img4,content:'Frequency & Severity Trends', caption:'Frequency/Severity Trends', persona : 'Risk Manager'},
  '/risk-manager/national-benchmarking':{img:img9,content:'National Benchmarks', caption:'National Benchmarking', persona : 'Risk Manager'}
}

function PersonaBlog() {
  var navigate = useNavigate()
    const [location, setLocation] = useState('')


      //gets current route (/risk-manger/med-mal)
      useEffect(() => {
        setLocation(window.location.href.split(window.location.origin)[1])
      
        }, [])

    //sets location state to current route and calls mockSignIn function
   
    
      
  return (
   
    <div>
    <div>
 <Navbar/>
        <div className="bg-white py-[100px] px-6 lg:px-8">
          
      <div className="mx-auto lg:max-w-5xl md:max-w-4xl sm:max-w-4xl text-base leading-7 text-gray-700">
      <ArrowLeftIcon className='w-8' onClick ={()=>navigate(`/${location.split('/')[1]}`)}/>
        <p className="text-base font-semibold leading-7 text-red-600 ">Our Tailored Insights for a {dashboards[location]?.persona}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{dashboards[location]?.caption}</h1>
        <figure className="mt-4">
          
        <img className='w-full' src={dashboards[location]?.img} alt="" />
         
        </figure>
        <p className="mt-6 text-xl leading-8">
        We offer end-to-end solutions for growing businesses. Discover how connecting the workforce helps your organization stay productive, efficient and engaged. Through managed services, you'll be able to scale operations without breaking your budget.
        </p>
        <div className="mt-10 max-w-2xl">
        {/*
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Data types.</strong> Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                blanditiis ratione.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Loops.</strong> Anim aute id magna aliqua ad ad non
                deserunt sunt. Qui irure qui lorem cupidatat commodo.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Events.</strong> Ac tincidunt sapien vehicula erat
                auctor pellentesque rhoncus. Et magna sit morbi lobortis.
              </span>
            </li>
          </ul>
              */}
          
        </div>
        

      </div>
    </div>
       <Footer/>
    </div>
    </div>


  )
}

export default PersonaBlog