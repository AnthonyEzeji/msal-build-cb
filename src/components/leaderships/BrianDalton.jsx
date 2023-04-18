import Img from '../../assets/leadership_images/bdalton.jpg';
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
      
     <h3 className="mt-6 text-3xl font-bold  text-center leading-8 tracking-tight text-gray-900 sm:text-4xl">Brian Dalton</h3>
     <h4 className="text-md  text-center leading-8 tracking-tight text-gray-600 sm:text-md">VP, Business Development</h4>
     
       <p className="mt-6 text-xl leading-8 text-gray-500">
       Brian Dalton is Vice President of Business Development for the TDC Group of companies (TDC Group) in New York State. Mr. Dalton leads business development efforts in New York and manages the broker distribution network for both the Northeast region and Healthcare Risk Advisors (HRA). He also engages with national brokers to develop opportunities for HRA self-insurance products and serves as the New York liaison between the various business units of TDC Group and common sales channels in New York, and across the country where opportunities may exist for New York.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Mr. Dalton began his career in the insurance industry with a New York admitted carrier. He began as an Assistant Director of Human Resources, before later being promoted to Director of Operations and culminating his time as Vice President for the Dental Business. In the latter role, Mr. Dalton oversaw all aspects of the business, during which time he doubled the business in policy count and premium, while improving the loss ratio by over 21 percent. He spent 13 years with this carrier prior to joining The Doctors Company in June 2017 as Assistant Vice President of Business Development.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Mr. Dalton earned his Bachelor of Arts degree in urban planning and education from Queens College. He went on to earn his Master of Science degree in school counseling from St. John’s University. In addition, Mr. Dalton earned a professional certificate in human resources development from Cornell University’s School of Industrial and Labor Relations.
       </p>

       

       

      
     </div>

     

   </div>
 </div>
     <Navbar/>  
  
<Footer/>
 </div>
    )
  }
  