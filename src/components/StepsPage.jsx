import { CheckIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import DashImg1 from '../assets/dashboard-img-1.png'
import CTASection from '../components/CTASection'

import Step1 from '../components/process/Step1'
import Step2 from '../components/process/Step2'
import Step3 from '../components/process/Step3'
import Step7 from '../components/process/Step7'
import Step8 from '../components/process/Step8'
import Step6 from '../components/process/Step6'
import Footer from './Footer'
import Step5 from './process/Step5'
import Step4 from './process/Step4'
const steps = {
 1: { id: '01', name: 'Risk', href: '#', status: 'current' , reportId:"blah blah"},
 2: { id: '02', name: 'Compare With Peers', href: '#', status: 'upcoming' },
 3: { id: '03', name: 'Share Loss Run ', href: '#', status: 'upcoming' },
 4: { id: '04', name: 'View Claims Data', href: '#', status: 'upcoming' },
 5: { id: '05', name: 'View Frequent Fliers', href: '#', status: 'upcoming' },
 6: { id: '06', name: 'View Plaintiff Firms', href: '#', status: 'upcoming' },
 7: { id: '07', name: 'Add Value', href: '#', status: 'upcoming' },
 8: { id: '08', name: 'Contact', href: '#', status: 'upcoming' }
}



export default function Example() {
    const [stepState, setStepState] = useState(Object.entries(steps))
    const [currStep, setCurrStep] = useState(steps[1])

    function getCurrentStep(){
      var tempStepState = Object.fromEntries(stepState)
      for(var i = 1; i <= stepState.length;i++){
        if(tempStepState[i]?.status==='current'){
          console.log(tempStepState[i])
          setCurrStep(tempStepState[i])
        }
      }
    }
    useEffect(() => {
      getCurrentStep()
      }, [stepState])
  
    function handleStepClick(e){


var stepIdx = parseInt(e.target.id)

     
        var currStepState = Object.fromEntries(stepState)
    
     
       
    
            var prevStep = currStepState[stepIdx-1]
            var nextStep = currStepState[stepIdx+1]
     
           
                
          
                for(var i = 1; i <= Object.keys(steps).length;i++){
                  if(parseInt(steps[i].id)!==stepIdx){
                    steps[i].status = 'upcoming'
                  }else{
                    steps[i].status = 'current'
                  }
           
                }
            
        
        
  setStepState(Object.entries(currStepState))
    }
  return (
    <div>  
        <Navbar/>
        <div className='w-screen bg-slate-700 h-[70px] absolute top-[90px]'></div>
         <nav className='mt-40 bg-gray-300' aria-label="Progress">
    <ol role="list" className="divide-y divide-slate-600  border-t-[1px] border-b-[1px] border-gray-400 md:flex md:divide-y-0">
      {Object.keys(Object.fromEntries(stepState)).map((step, stepIdx) => {
       
       var stepsToUse = Object.fromEntries(stepState)
       var step = stepsToUse[stepIdx+1]
        return(  <li key={step.name} className="relative md:flex md:flex-1 ">
        { step.status === 'current' ? (
          <a href={step.href} className="flex items-center px-6 py-4 text-sm font-medium " aria-current="step">
            <span   className="flex h-10 w-10 flex-shrink-0 items-center bg-slate-600 justify-center rounded-full border-2 border-slate-600">
              <span className="text-white">{step.id}</span>
            </span>
            <span id = {stepIdx+1} onClick={(e)=>handleStepClick(e)} className="ml-4 text-sm font-medium text-slate-900">{step.name}</span>
          </a>
        ) : (
          <a href={step.href} className="group flex items-center">
            <span   className="flex items-center px-6 py-4 text-sm font-medium">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-red-600">
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
                className={stepIdx===parseInt(currStep.id-1)?'h-full w-full text-slate-600':"hidden"}
                viewBox="0 0 22 80"
                fill={stepIdx===parseInt(currStep.id-1)?'none':'white'}
                preserveAspectRatio="none"
                color='blue'
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
  
  <main className='flex items-center justify-center '>
    {/*<img className=' h-auto w-auto max-h-[1000px] rounded-xl' src={DashImg1} alt="" />*/}
    {currStep?.id==='01'&&<Step1/>}
    {currStep?.id==='02'&&<Step2/>}
    {currStep?.id==='03'&&<Step3 />}
    {currStep?.id==='04'&&<Step4/>}
    {currStep?.id==='05'&&<Step5/>}
    {currStep?.id==='06'&&<Step6/>}
    {currStep?.id==='07'&&<Step7/>}
    {currStep?.id==='08'&&<Step8/>}
    
  </main>
  <Footer/>
  </div>
 
  )
}