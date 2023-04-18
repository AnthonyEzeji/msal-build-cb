import React from 'react'
import { MdAnalytics, MdOutlineAnalytics } from 'react-icons/md'

function Achievements() {
  return (
    <div class='container' className='w-fit min-h-screen mx-6 lg:mx-12 my-10 '>
        <div className='p-2  flex justify-center'>
            <div className='lg:w-3/4 w-full  md:flex flex-col items-center'>
            <h1 className=' text-xl lg:text-3xl xl:text-4xl font-bold text-slate-600 my-5 lg:my-2 text-center'> <span className='text-red-600'>Reducing Liability </span> Exposure  for Our Partners for Over 30 Years</h1>
            <p className='xl:text-2xl text-lg  text-slate-600 my-2 text-center   '>Healthcare Risk Advisors ensures our partners have appropriate levels of coverage—as well as access to best-in-class risk prevention services and resources—so they can focus their time and effort on the communities they serve.</p>
            </div>
           
        </div>
        <div className='flex flex-col lg:flex-row'>
        <div className='md:w-[50%]  rounded-md border-[1px] border-gray-300 mx-2 flex flex-col-reverse mb-4 md:mb-0'>
        <div className='flex flex-col items-center  p-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
</svg>
<h1 className='text-4xl text-center text-slate-600'>
                7%
            </h1>
            <p className='text-slate-600'>LOWER</p>
        </div>
        <div className='p-2 border-b-[1px] border-gray-200'>
        
            <p className=' text-mdlg:text-xl text-center text-slate-600'>average indemnity paid limited to $2M vs. high-risk venues benchmark</p>
        </div>
    </div>
    <div className='md:w-[50%]  rounded-md border-[1px] border-gray-300 mx-2 flex flex-col-reverse'>
        <div className='flex flex-col items-center  p-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
</svg>
<h1 className='text-4xl text-center text-slate-600'>
                13%
            </h1>
            <p className='text-slate-600'>LESS</p>
        </div>
        <div className='p-2 border-b-[1px] border-gray-200'>
        
            <p className=' text-mdlg:text-xl text-center text-slate-600'>average expenses paid vs. high-risk venues benchmark</p>
        </div>
    </div>
  
</div>
        <div className='flex flex-col lg:flex-row'>
        <div className='md:w-[50%] p-2'>
                <p className='text-lg lg:text-xl xl:text-2xl lg:text-center font-light text-slate-600'>
                “HRA has been our integral partner in identifying opportunities to improve patient safety and outcomes through their careful analytics. While this has reduced the risk of liability, our relationship has also helped us improve the quality of care that we provide.”
                </p>
                <p className='text-md lg:text-xl lg:text-center mt-2  text-slate-600'>
                - A Nine-location New York Hospital
                </p>
            </div>
            <div className='md:w-[50%] p-2'>
                <p className='text-lg lg:text-xl xl:text-2xl lg:text-center font-light text-slate-600'>
                “One unfortunate consequence of being an obstetrician is lawsuits. The one silver lining in it has been my dealings with the folks at HRA-HIC. As my defense team they have been thorough, professional, tireless, and successful! I could not have been happier with the outcomes and them.”
                </p>
                <p className='text-md lg:text-xl lg:text-center mt-2  text-slate-600'>
                - An Insured NY Obstetrician
                </p>
            </div>
        </div>

     </div>
  )
}

export default Achievements