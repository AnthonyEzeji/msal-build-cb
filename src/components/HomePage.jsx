
import React, { useState } from 'react'
import ClientList from "../components/ClientList";
import ContactUs from "../components/ContactUs";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PPP from "../components/PPP";
import BlogList from './BlogList';
import Tabs from  '../components/Tabs'
import Catalog from  '../components/Catalog'
import { useIsAuthenticated } from '@azure/msal-react';
import ForHospitals from './ForHospitals';
import Hero from './Hero';
import Splide from '../components/Splide'
import CTASection from './CTASection'
import VideoHero from './VideoHero';
import HomeNavbar from './HomeNavbar'
import Carousel from './Carousel';
import { useEffect } from 'react';
import VideoHeroTabs from './VideoHeroTabs';
import PreviewButtons from './personas/RMPreviewButtons';
const HomePage = () => {
  let isAuthenticated = useIsAuthenticated()
  const [video, setVideo] = useState("https://player.vimeo.com/video/797037462?h=574d1d5649&autoplay=1&loop=1&background=1")
  useEffect(() => {
    
  
   // setTimeout(()=>setVideo('https://bernardmarr.com/img/Impact%20of%20COVID-19%20on%20Technology.jpg'),2000)
  }, [])
  
  return (
    <div className=' w-screen   '>
    <HomeNavbar/>
    {/*<div>
    <img className='h-screen' src="https://www.mastersindatascience.org/wp-content/uploads/sites/54/2022/05/What-Is-Data-Visualization-and-Why-Is-It-Important.png" alt="" ></img>
    <div className="mx-auto w-fit max-w-7xl mt-16 pb-20 text-center lg:ml-20 lg:my-48 lg:text-left z-10 top-0 absolute flex flex-col ite ">
  
    <div className="lg:w-1/2  2xl:mx-auto 2xl:mt-20 relative flex flex-col items-center justify-center p-4 bg-black/[.20] rounded-2xl">

      <h1 className="text-xl font-bold tracking-tight text-white sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl">
        <span className="block xl:inline">Creating Partnerships to </span>{' '}
        <br></br>
        <span className="block text-red-500 xl:inline">Advance, Protect and Reward Superior Healthcare</span>
      </h1>
      <p className="hidden md:flex mx-auto mt-3 max-w-md text-sm text-white font-light leading-1 sm:text-md md:mt-5 md:max-w-3xl">
        Healthcare Risk Advisors partners with healthcare organizations to identify and solve their unique challenges in services for self-insurance programs, risk transfer, risk management, and claims and litigation.
      </p>
      <div className="mt-6 sm:flex sm:justify-center lg:justify-start  w-full ">
        <div className="rounded-md shadow  w-full">
          <a
            href="/get-started"
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-transparent hover:text-red-600 border-[1px] border-red-600 md:py-4 md:px-10 md:text-lg  w-full"
          >
            Get started
          </a>
        </div>
       
      </div>
    </div>
  </div>
  </div>*/}
    
    <VideoHeroTabs video={video}/>

     <CTASection/>
  
     

     <Carousel/>
     <Catalog/>
    <Splide/>
     <PPP></PPP>
     <BlogList></BlogList>
     <ContactUs></ContactUs>
     <FAQ></FAQ>
<Footer/>
    </div>
  )
}

export default HomePage