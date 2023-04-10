import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import img from '../assets/about_us-careers.png'

function Careers() {

 return (

    <><div>

         <Navbar />
         <div className="relative px-10  xl:px-32 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 flex flex-col items center bg-slate-100">
         <div className="py-5 relative px-20">  
            <div className="container m-auto text-gray-600 ">
            
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6   lg:items-center lg:gap-12">
                  
                <div className="md:5/12 lg:w-5/12 ">
                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Careers at Healthcare Risk Advisors</h2>
                    <p className="my-6 text-gray-600">HRA hires accomplished professionals who understand the importance of client service. We offer a competitive compensation and benefits package and promote ongoing professional development for employees at every level of the organization. Our team consists of accomplished professionals from a variety of disciplines including:</p>
                    <li className="py-1 marker:text-red-600 ">Insurance and Brokerage Services</li>
                    <li className="py-1 marker:text-red-600">Claims Investigation and Litigation</li>
                    <li className="py-1 marker:text-red-600">Insurance, Contract, and Corporate Law</li>
                    <li className="py-1 marker:text-red-600">Risk Management and Loss Control</li>
                    <li className="py-1 marker:text-red-600">Finance</li>
                    <li className="py-1 marker:text-red-600">Information Technology</li>
                    <li className="py-1 marker:text-red-600">Human Resources</li>
                    <li className="py-1 marker:text-red-600">Corporate Communications</li>
                  
                   
                </div>
                <div className="w-full max-w-24 h-auto ">
                    <img className = 'mt-10' src={img}/>
                    {/* <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height=""/> */}
                </div>
                </div>
                <p class="mt-6 text-gray-600 ">Current job openings are detailed below. Click the title of the position you’re interested in to get started!</p>
            </div>
            </div>

         <div className='px-20'>
             <iframe className='shadow-md px-16 rounded-md' title="fojp-hic-hrmdirect" src="https://fojp-hic.hrmdirect.com/employment/job-openings.php?search=true&amp;nohd=&amp;city=-1&amp;cust_sort1=29016" width="100%" height="600" frameborder="0" data-uw-styling-context="true"></iframe>
         </div>
         </div>

     </div><Footer /></>
)

}




export default Careers