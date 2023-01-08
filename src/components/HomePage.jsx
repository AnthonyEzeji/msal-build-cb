
import React from 'react'
import ClientList from "../components/ClientList";
import ContactUs from "../components/ContactUs";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PPP from "../components/PPP";
import BlogList from './BlogList';
import Tabs from  '../components/Tabs'
const HomePage = () => {
  return (
    <div>
     <Navbar></Navbar>
     <ClientList></ClientList>
     <PPP></PPP>
     <Tabs/>
     <BlogList></BlogList>
     <ContactUs></ContactUs>
     <FAQ></FAQ>
     <Footer></Footer>
    </div>
  )
}

export default HomePage