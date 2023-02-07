import { CheckIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import DashImg1 from '../assets/dashboard-img-1.png'
const steps = {
 1: { id: '01', name: 'Risk', href: '#', status: 'current' , reportId:"blah blah"},
 2: { id: '02', name: 'Benchmark Group', href: '#', status: 'upcoming' },
 3: { id: '03', name: 'Preview', href: '#', status: 'upcoming' },
 4: { id: '04', name: 'Preview', href: '#', status: 'upcoming' },
 5: { id: '05', name: 'Preview', href: '#', status: 'upcoming' }
}



export default function Example() {
    const [stepState, setStepState] = useState(Object.entries(steps))


    function handleStepClick(e){

       

var stepIdx = parseInt(e.target.id)

     
        var currStepState = Object.fromEntries(stepState)
     
        if(stepIdx>1 && stepIdx <= Object.keys(stepState).length){
    
            var prevStep = currStepState[stepIdx-1]
            var nextStep = currStepState[stepIdx+1]
     
           
                
               currStepState[stepIdx-1].status = 'complete'
                currStepState[stepIdx].status='current'
                for(var i = stepIdx+1; i < Object.keys(steps).length+1;i++){
                    steps[i].status = 'upcoming'
                }
            
        }else if(stepIdx === 1){
            currStepState[1].status = 'current'
            for(var i = 2; i < Object.keys(steps).length+1;i++){
                currStepState[i].status = 'upcoming'
            }
         
        }
        console.log(steps)
  setStepState(Object.entries(currStepState))
    }
  return (
    <div>  
        <Navbar/>
         <nav className='pt-40' aria-label="Progress">
    <ol role="list" className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
      {Object.keys(Object.fromEntries(stepState)).map((step, stepIdx) => {
       
       var stepsToUse = Object.fromEntries(stepState)
       var step = stepsToUse[stepIdx+1]
        return(  <li key={step.name} className="relative md:flex md:flex-1">
        {step.status === 'complete' ? (
          <a href={step.href} className="group flex w-full items-center">
            <span  className="flex items-center px-6 py-4 text-sm font-medium">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-600 group-hover:bg-slate-800">
                <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <span id = {stepIdx+1} onClick={(e)=>handleStepClick(e)} className="ml-4 text-sm font-medium text-gray-900">{step.name}</span>
            </span>
          </a>
        ) : step.status === 'current' ? (
          <a href={step.href} className="flex items-center px-6 py-4 text-sm font-medium" aria-current="step">
            <span   className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-slate-600">
              <span className="text-slate-600">{step.id}</span>
            </span>
            <span id = {stepIdx+1} onClick={(e)=>handleStepClick(e)} className="ml-4 text-sm font-medium text-slate-600">{step.name}</span>
          </a>
        ) : (
          <a href={step.href} className="group flex items-center">
            <span   className="flex items-center px-6 py-4 text-sm font-medium">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                <span className="text-gray-500 group-hover:text-gray-900">{step.id}</span>
              </span>
              <span id = {stepIdx+1} onClick={(e)=>handleStepClick(e)} className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</span>
            </span>
          </a>
        )}

        {stepIdx !== steps.length - 1 ? (
          <>
            {/* Arrow separator for lg screens and up */}
            <div className="absolute top-0 right-0 hidden h-full w-5 md:block" aria-hidden="true">
              <svg
                className="h-full w-full text-gray-300"
                viewBox="0 0 22 80"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 -2L20 40L0 82"
                  vectorEffect="non-scaling-stroke"
                  stroke="currentcolor"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </>
        ) : null}
      </li>)
      
      })}
    </ol>
  </nav>
  
  <main className='flex items-center justify-center pt-20'>
    <img className=' h-auto w-auto max-h-[1000px] rounded-xl' src={DashImg1} alt="" />
  </main>
  </div>
 
  )
}