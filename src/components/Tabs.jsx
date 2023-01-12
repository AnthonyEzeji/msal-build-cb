import React from 'react'
import { Tab } from '@headlessui/react'
import { useState } from 'react'

function Tabs() {
    const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <div className='py-10 flex flex-col items-center'><Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex} >
    <Tab.List className={' w-fit flex justify-evenly p-0 bg-gray-100'}>
      <Tab><h1 className = {selectedIndex===0?'font-black md:text-3xl text-2xl text-slate-700 m-5 ':'font-black md:text-3xl text-2xl text-slate-300 m-5  '}>Hospitals</h1></Tab>
      <Tab><h1  className = {selectedIndex===1?'font-black md:text-3xl text-2xl text-slate-700  m-5 ':'font-black md:text-3xl text-2xl text-slate-300 m-5 '}>Physicians</h1></Tab>
  
    </Tab.List>
    <Tab.Panels className=' md:w-[70%] w-[90%] flex justify-center items-center pt-10 '>
      <Tab.Panel className='w-fit h-fit flex items-center justify-center  flex-col'>
        
    <p className=' p-6 text-2xl text-slate-700 w-full drop-shadow-sm leading-loose font-light'>
    We have a strong history of leading patient safety initiatives and leveraging data to minimize risk and prevent claims. For decades, our expertise was exclusive to aiding the closed system of hospitals at which we were founded. We take pride in the fact that we are now able to take this experience and use it to help hospitals throughout the nation manage their risk.
    </p>
  <div className ='drop-shadow-md bg-white rounded-md flex flex-col items-start  w-full'>
  
 <div className = 'w-full hover:bg-slate-100'>
 <h1 className='text-slate-700 text-3xl px-2 py-4 font-semibold w-fit'>
        Risk Transfer
      </h1>
      <p className ='text-slate-500 text-xl px-2 w-fit pb-2'>
      Professional and General Liability Coverage.
      </p>

 </div>
   <div className = 'w-full hover:bg-slate-100 border-t-[1px] border-slate-300'>
   <h1 className='text-slate-700 text-3xl px-2 py-4 font-semibold w-fit'>
      Self-Insurance Programs​​
      </h1>
      <p className ='text-slate-500 text-xl px-2 w-fit pb-2'>
      Design, setup and self-insurance administration services​.
      </p>
   </div>
   <div className = 'w-full hover:bg-slate-100 border-t-[1px] border-slate-300'>
   <h1 className='text-slate-700 text-3xl px-2 py-4 font-semibold w-fit'>
     Claims and Litigation
      </h1>
      <p className ='text-slate-500 text-xl px-2 w-fit pb-2'>
      Over 30 years experience handling hospital claims.
      </p>
   </div>
   <div className = 'w-full hover:bg-slate-100 border-t-[1px] border-slate-300'>
   <h1 className='text-slate-700 text-3xl px-2 py-4 font-semibold w-fit'>
   Patient Safety and Risk Management
      </h1>
      <p className ='text-slate-500 text-xl px-2 w-fit pb-2'>
      Education, training, and risk management best practices.
      </p>
   </div>
        <div className = 'w-full hover:bg-slate-100 border-t-[1px] border-slate-300'>
   <h1 className='text-slate-700 text-3xl px-2 py-4 font-semibold w-fit'>
   Data Analytics Services
      </h1>
      <p className ='text-slate-500 text-xl px-2 w-fit pb-2'>
      Leveraging claims, risk, and clinical data in support of patient safety initiatives.
      </p>
   </div>
    
  </div>
       </Tab.Panel>
       <Tab.Panel className='w-fit h-fit flex items-center justify-center  flex-col'>
        
        <p className=' p-6 text-2xl text-slate-700 w-full drop-shadow-sm leading-loose font-light'>
        Looking to lower your premium? We provide Physicians with the following savings options.
        </p>
      <div className ='drop-shadow-md bg-white  rounded-md flex flex-col items-start  w-full'>
      
     <div className = 'w-full hover:bg-slate-100'>
     <h1 className='text-slate-700 text-3xl px-2 py-4 font-semibold w-fit'>
     5%
Risk Management Education Discount

          </h1>
          <p className ='text-slate-500 text-xl px-2 w-fit pb-2'>
          For the completion of risk management courses.
          </p>
    
     </div>
       <div className = 'w-full hover:bg-slate-100 border-t-[1px] border-slate-300'>
       <h1 className='text-slate-700 text-3xl px-2 py-4 font-semibold w-fit'>
       5%
Waiver of Consent Discount
          </h1>
          <p className ='text-slate-500 text-xl px-2 w-fit pb-2'>
          We handle any claim that comes your way, without your prior written consent.
          </p>
       </div>
       <div className = 'w-full hover:bg-slate-100 border-t-[1px] border-slate-300'>
       <h1 className='text-slate-700 text-3xl px-2 py-4 font-semibold w-fit'>
         7% Joint Defense Discount
          </h1>
          <p className ='text-slate-500 text-xl px-2 w-fit pb-2'>
        Automatic discount for insured physicians participating in joint defense.
          </p>
       </div>
       <div className = 'w-full hover:bg-slate-100 border-t-[1px] border-slate-300'>
       <h1 className='text-slate-700 text-3xl px-2 py-4 font-semibold w-fit'>
       5% Obstretrics Discount
          </h1>
          <p className ='text-slate-500 text-xl px-2 w-fit pb-2'>
         Discount for physicians affiliated with sponsor hospitals.
          </p>
       </div>
            <div className = 'w-full hover:bg-slate-100 border-t-[1px] border-slate-300'>
       <h1 className='text-slate-700 text-3xl px-2 py-4 font-semibold w-fit'>
7.5% - 12% Claims-Free Discount
          </h1>
          <p className ='text-slate-500 text-xl px-2 w-fit pb-2'>
         7.5% discount for claims-free in last 5 years. 12% in last 10 years
          </p>
       </div>
       <div className = 'w-full hover:bg-slate-100 border-t-[1px] border-slate-300'>
       <h1 className='text-slate-700 text-3xl px-2 py-4 font-semibold w-fit'>
2% Prepay Discount
          </h1>
          <p className ='text-slate-500 text-xl px-2 w-fit pb-2'>
        Available to physcians that pay their annual premium in full prior to their due date.
          </p>
       </div>
       <div className = 'w-full hover:bg-slate-100 border-t-[1px] border-slate-300'>
       <h1 className='text-slate-700 text-3xl px-2 py-4 font-semibold w-fit'>
35% - 50% Part Time Discount
          </h1>
          <p className ='text-slate-500 text-xl px-2 w-fit pb-2'>
        For physcians in surgical and non-surgical specialties working 20 hours or less per week.
          </p>
       </div>
       <div className = 'w-full hover:bg-slate-100 border-t-[1px] border-slate-300'>
       <h1 className='text-slate-700 text-3xl px-2 py-4 font-semibold w-fit'>
50% New Doctor Discount 
          </h1>
          <p className ='text-slate-500 text-xl px-2 w-fit pb-2'>
         Physicians who have recently completed an approved residency can recieve a discount up to 50%.
          </p>
       </div>
        
      </div>
           </Tab.Panel>
   
    </Tab.Panels>
  </Tab.Group>
  </div>
 
   
  )
}

export default Tabs