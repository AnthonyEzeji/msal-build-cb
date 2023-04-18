import Img from '../../assets/leadership_images/rosshess.jpg';
import Navbar from '../Navbar'
import Footer from '../Footer'
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export default function NoeleenDoelger() {
    return (
      <div className='pt-[103px]'>
      <div className="relative overflow-hidden bg-white py-16">
   <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
  
   </div>
   <div className="relative px-6 lg:px-8">
     <div className="mx-auto w-2/3 text-lg flex flex-col">
      <div className="flex flex-col items-center justify-center"><img src={Img} className="h-150 w-191"></img></div>
      
     <h3 className="mt-6 text-3xl font-bold  text-center leading-8 tracking-tight text-gray-900 sm:text-4xl">Ross Hess</h3>
     <h4 className="text-md  text-center leading-8 tracking-tight text-gray-600 sm:text-md">VP, Underwriting and Physician Service</h4>
     
       <p className="mt-6 text-xl leading-8 text-gray-500">
       Ross Hess HRA’s Vice President of Underwriting and Physician Services.  Prior to joining our company, Ross was President of Hess Consulting, LLC, where he provided consulting services to Med-Lantic Management Services, Inc. 
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Mr. Hess previously served as regional vice president of underwriting for ProAssurance, leading physician underwriting efforts across the Mid-Atlantic, New England, and New York.  His insurance career began at SCPIE, which is now part of The Doctors Company.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Mr. Hess is a licensed insurance producer and also holds the Chartered Property Casualty Underwriter (CPCU), and Registered Professional Liability Underwriter (RPLU) designations.  
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       He holds a Bachelor of Arts degree from Georgetown University, and a Master of Arts degree from Syracuse University.
       </p>


    
       

      
     </div>

     

   </div>
 </div>
     <Navbar/>  
  
<Footer/>
 </div>
    )
  }
  