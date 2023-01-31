
import React from 'react'
import ClientList from "../components/ClientList";
import ContactUs from "../components/ContactUs";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PPP from "../components/PPP";
import BlogList from './BlogList';
import Tabs from  '../components/Tabs'
import { useIsAuthenticated } from '@azure/msal-react';
import ForHospitals from './ForHospitals';
import Hero from './Hero';
import Splide from '../components/Splide'
import CTASection from './CTASection'
import VideoHero from './VideoHero';
const HomePage = () => {
  let isAuthenticated = useIsAuthenticated()
  
  return (
    <div className=' '>
    <Navbar/>
    <VideoHero video='https://vimeo.com/783454719'/>
 
     <CTASection/>
     <ClientList></ClientList>
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