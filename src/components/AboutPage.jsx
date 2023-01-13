import React from 'react'
import { Link } from 'react-router-dom'
import ContactUs from './ContactUs'
import Footer from './Footer'
import Navbar from './Navbar'
function AboutPage() {
  return (
    <div className = 'pt-[90px]'>
        
        <Navbar/>
        <div className='w-screen'>
            <div className ='p-4 pt-10 flex flex-col  items-center'>
                <h1 className ="my-5 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl ">About Us</h1>
             
                <div className = 'flex flex-col lg:w-[70%] md:w-[80%] '>
                <div className = 'flex xl:flex-col flex-col h-fit items-center '>
<img className = ' p-3 w-[600px] ' src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="" />
<div className='w-full '>
<p className='p-3 flex flex-1 prose prose-lg prose-indigo mx-auto text-gray-500 w-full'>Healthcare Risk Advisors (HRA) offers insurance and risk management services, including consulting focused on self-insurance, risk transfer methods, the reduction of liability and improvement of patient outcomes, and more. With an overall goal of ensuring appropriate levels of coverage and access to best-in-class risk mitigation services and resources, HRA is focused on allowing our members to focus their time and effort on the communities they serve. 
Healthcare Risk Advisors (HRA) offers insurance and risk management services, including consulting focused on self-insurance, risk transfer methods, the reduction of liability and improvement of patient outcomes, and more. With an overall goal of ensuring appropriate levels of coverage and access to best-in-class risk mitigation services and resources, HRA is focused on allowing our members to focus their time and effort on the communities they serve. 
</p>
<p className='p-3 flex flex-1 prose prose-lg prose-indigo mx-auto mt-6 text-gray-500'>With over four decades of experience in the New York State medical insurance and risk management scene, HRA brings a long and successful history of working successfully with some of biggest hospital systems in the state, including The Mount Sinai and Montefiore Health Systems. HRA’s resources include those of the former Hospitals Insurance Company, (HIC) an entity with a long history of writing and filling the professional liability insurance needs of New York doctors – including hospital clients and their associated Voluntary Attending Physicians (VAPs.)


</p>
</div>

                    </div>
                <div className = 'flex xl:flex-row-reverse flex-col h-fit mt-20 '>
<img className = ' p-3 w-[600px] ' src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
<div>
<p className='p-3 flex flex-1 prose prose-lg prose-indigo mx-auto mt-6 text-gray-500'>Today, HRA is expanding its partnerships beyond larger hospital systems to include community hospitals, Voluntary Attending Physicians, and other groups of various sizes. HRA is committed to making its services available to organizations large and small, and continuing to leverage lessons learned from decades of experience to help members gain access to best-in-class risk prevention services.
</p>
<p className='p-3 flex flex-1 prose prose-lg prose-indigo mx-auto mt-6 text-gray-500'>HRA is a member of the TDC Group, a $6B entity serving over 100,000 healthcare providers and organizations as the nation’s largest provider of Insurance, Risk Management, and Healthcare Practice Improvement Solutions.


</p>
</div>

                    </div>
                </div>
            </div>
            <div className = 'w-screen lg:h-[40vh] bg-slate-400  flex items-center justify-center'>
        <div className='flex lg:flex-row flex-col mt-10 p-4 '>
            <div className='bg-white m-2 rounded-md p-2 h-fit min-h-[220px] flex flex-col flex-1 items-center'>
             <h1 className='text-2xl px-3 text-center  block   font-bold leading-8 tracking-tight text-gray-900 '>Leadership</h1>
             <p className = 'text-center p-3 flex flex-1 prose prose-lg prose-indigo mx-auto text-gray-500'>Learn more about the leadership team behind Healthcare Risk Advisors.</p>
             <button className='bg-indigo-600 text-white border-[1px]  m-2 rounded-md drop-shadow-sm hover:bg-transparent hover:text-indigo-600 hover:border-indigo-600 font-semibold w-[50%] ' ><a href='/about/leadership'><p className='w-full h-full p-4'>Learn More</p></a></button>
            </div>
            <div className='bg-white m-2 rounded-md p-2 h-fit min-h-[220px] flex flex-col flex-1 items-center'>
             <h1 className='text-2xl px-3 text-center block   font-bold leading-8 tracking-tight text-gray-900'>Careers</h1>
             <p className = 'text-center p-3 flex flex-1 prose prose-lg prose-indigo mx-auto text-gray-500'>Interested in joining the Healthcare Risk Advisors team?</p>
             <button className='bg-indigo-600 text-white border-[1px] m-2 rounded-md drop-shadow-sm hover:bg-transparent hover:text-indigo-600 hover:border-indigo-600 font-semibold w-[50%] ' ><a href='/about/careers'><p className='w-full h-full p-4'>Learn More</p></a></button>
            </div>
            <div className='bg-white m-2 rounded-md p-2 h-fit min-h-[220px] flex flex-col flex-1 items-center'>
             <h1 className='text-2xl px-3 text-center block   font-bold leading-8 tracking-tight text-gray-900'>News and Events</h1>
             <p className = 'text-center p-3 flex flex-1 prose prose-lg prose-indigo mx-auto text-gray-500'>Keep up with the latest news and press releases from HRA..</p>
             <button className='bg-indigo-600 text-white border-[1px] m-2 rounded-md drop-shadow-sm hover:bg-transparent hover:text-indigo-600 hover:border-indigo-600 font-semibold w-[50%] ' ><a href='/about/news-events'><p className='w-full h-full p-4'>Learn More</p></a></button>
            </div>
          
           
          

        </div>

        </div>
        </div>
       
       
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default AboutPage