import React from 'react'
import ContactUs from './ContactUs'
import Footer from './Footer'
import Navbar from './Navbar'
import img from '../assets/news_and_events.png'




export default function NewsAndEvents() {

  return (
    <>
    <Navbar/>  
    <div class="py-16 bg-white">  
  <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:5/12 lg:w-5/12">
          <img src={img} alt="image" loading="lazy" width="" height=""/>
        </div>
        <div class="md:7/12 lg:w-6/12">
          <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">News and Events</h2>
          <h3 class="mt-10 text-xl text-gray-900 font-bold md:text-3xl">Anouncements</h3>
          <p class="mt-6 text-gray-600">April 27, 2021</p>
          <p class=" text-gray-600"><a className='text-red-600 underline' href='/about/news-events/hic-a-minus-rating-assigned-by-am-best'>Hospitals Insurance Company“A-”Excellent Financial Rating Assigned by A.M. Best</a></p>

          <p class="mt-6 text-gray-600">January 15, 2021</p>
          <p class=" text-gray-600"><a className='text-red-600 underline' href='/about/news-events/hra-parent-company-tdc-group-names-robert'>HRA Parent Company TDC Group Names Robert E. White Jr. Chief Operating Officer</a></p>

          <p class="mt-6 text-gray-600">January 5, 2021</p>
          <p class=" text-gray-600"><a className='text-red-600 underline' href='https://www.medicaleconomics.com/view/new-medical-malpractice-risks-physicians-must-watch-for'>CMO Dr. David Feldman video – New Medical Malpractice Risks for Physicians, Medical Economics</a></p>

          <p class="mt-6 text-gray-600">December 28, 2020</p>
          <p class=" text-gray-600"><a className='text-red-600 underline' href='https://www.hmpgloballearningnetwork.com/site/ihe/content/reducing-cardiology-malpractice-claims-lawsuits-health-practices'>CMO Dr. David Feldman Interview – Reducing Cardiology Malpractice Claims, Integrated Healthcare Executive</a></p>
        
          <p class="mt-6 text-gray-600">July 31, 2019</p>
          <p class=" text-gray-600"><a className='text-red-600 underline' href='https://www.thedoctors.com/about-the-doctors-company/newsroom/press-releases/2019/the-doctors-company-completes-new-york-acquisition/'>The Doctors Company Completes New York Acquisition</a></p>
        </div>
      </div>
  </div>
</div>



    <Footer/>
    </>
     
  )
}
