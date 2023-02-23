import { useMsal } from '@azure/msal-react';
import React from 'react'
import { Link } from 'react-router-dom';
import { loginRequest } from '../authConfig';
import Navbar from '../components/Navbar'
import Footer from './Footer';
import img from '../assets/HeroImage.jpg'
import '../css/Login.css'
import svg from '../assets/Authentication-pana.svg'
import svg1 from '../assets/Fingerprint-bro.svg'
function LoginPage() {
   const {instance} = useMsal()
    const handleLogin = () => {
        /* instance.loginPopup(loginRequest).catch(e => {
             console.log(e);
         }); */
         instance.loginRedirect(loginRequest).catch(e => {
           console.log(e);
       });
     }
  return (
    <div className='w-screen min-h-screen'>
     <Navbar/>
       <div className='h-screen w-screen flex items-center justify-evenly '>
        <img className='max-w-[500px] hidden xl:flex ' src={svg} alt="" />
       <div style={{backgroundImage:`url('')`}} className='max-w-[300px] bg-slate-300 h-fit  w-fit flex flex-col items-center p-10  rounded-xl   drop-shadow-lg'>
    <Link to='/'><img src="https://www.healthcareriskadvisors.com/siteassets/images/13225_sbu-logos_hra_red-blk_300x73.png" alt="" ></img></Link>
    <Link className='flex items-center border-[1px]  w-fit my-5 p-2 bg-black/[.4]'  onClick = {handleLogin}>
            <img className='w-[25px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3gtlghOcUUy-ncEKQbb4H0LyjkHSK8mUwQEjsQc&s" alt="" />
            <h1 className='p-2 text-white'> Sign-in with Microsoft</h1>
           
        </Link>

    </div>
    <img className='max-w-[400px] hidden md:flex ' src={svg1} alt="" />
       </div>
    
       
        <Footer/>
    </div>
  )
}

export default LoginPage