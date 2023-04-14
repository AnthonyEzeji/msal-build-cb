import Img from '../../assets/leadership_images/richcaldwell.jpg';
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
      
     <h3 className="mt-6 text-3xl font-bold  text-center leading-8 tracking-tight text-gray-900 sm:text-4xl">Rich Caldwell</h3>
     <h4 className="text-md  text-center leading-8 tracking-tight text-gray-600 sm:text-md">VP, Finance & Underwriting</h4>
     
       <p className="mt-6 text-xl leading-8 text-gray-500">
       Rich Caldwell currently serves as HRA's Vice President of Finance and Underwriting. He brings to the company 15 years of experience in the property-casualty insurance industry with a primary focus on medical malpractice.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Prior to joining Health Risk Advisors in 2016, Mr. Caldwell was a senior director in the global insurance services group practice at FTI Consulting, Inc., a global business advisory firm.  However, his career began at Veris Consulting, Inc.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Throughout his career, Mr. Caldwell’s service has focused on property-casualty and life insurance industries. His experience includes healthcare systems underwriting and pricing, financial modeling, statutory financial reporting, forensic accounting, litigation consulting, and internal auditing.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Mr. Caldwell holds a Bachelor of Business Administration degree in accounting, and a Master of Accounting from the College of William and Mary, Mason School of Business. He is a Certified Public Accountant (CPA) serving on the audit committee of the Visiting Nurse Association Health Group, a non-profit home healthcare provider based in New Jersey.
       </p>

       

      
     </div>

     

   </div>
 </div>
     <Navbar/>  
  
<Footer/>
 </div>
    )
  }
  