import Img from '../../assets/leadership_images/duaneperricelli.jpg';
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
      
     <h3 className="mt-6 text-3xl font-bold  text-center leading-8 tracking-tight text-gray-900 sm:text-4xl">Duane Perricelli</h3>
     <h4 className="text-md  text-center leading-8 tracking-tight text-gray-600 sm:text-md">Vice President, Insurance Services</h4>
     
       <p className="mt-6 text-xl leading-8 text-gray-500">
       Duane Perricelli is HRA’s Vice President for Insurance Services. He is an insurance executive responsible for the risk identification and placement of domestic and international programs. In this role, he optimizes coverage, costs, and claim settlements, meeting risk transfer strategies for hospitals, long-term care, and social service clients.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Mr. Perricelli directs the department’s risk management information system that manages client exposure and the certificate database. This ensures compliance with policies, terms, and conditions.  He directly manages the healthcare systems for two of our largest portfolios encompassing risk management and advisory services working with the hospital’s risk and finance teams.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Before joining Health Risk Advisors, much of Mr. Perricelli’s career was spent at top-tiered brokers such as Marsh & McLennan and Alliant with large account management and sales operations leadership roles, respectively.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       He holds a Bachelor of Science from Fairleigh Dickenson University.
       </p>


     </div>

     

   </div>
 </div>
     <Navbar/>  
  
<Footer/>
 </div>
    )
  }
  