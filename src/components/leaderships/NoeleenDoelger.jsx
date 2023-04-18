import Img from '../../assets/leadership_images/ndoelger.jpg';
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
      
     <h3 className="mt-6 text-3xl font-bold  text-center leading-8 tracking-tight text-gray-900 sm:text-4xl">Noeleen Doelger</h3>
     <h4 className="text-md  text-center leading-8 tracking-tight text-gray-600 sm:text-md">COO and CFO</h4>
     
       <p className="mt-6 text-xl leading-8 text-gray-500">
       Noeleen Doelger has more than 30 years of financial services experience and is the chief operating and financial officer of HRA. Ms. Doelger previously served as senior vice president and chief financial officer of HIC and FOJP and directed the finance, audit, treasury, information technology, and human resources functions.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Prior to her roles at HIC and FOJP, Ms. Doelger was a managing director in the global insurance services group of the forensic and litigation consulting practice at FTI Consulting, Inc., a global business advisory firm, and, before that, at Veris Consulting, Inc. Before joining Veris, she was a partner in the management advisory services practice at KPMG, where she began her career.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Ms. Doelger’s career has been focused on serving the property-casualty insurance, life and health insurance and reinsurance industries. Her experience includes generally accepted accounting principles (GAAP) and statutory financial reporting, auditing, internal controls assessment, forensic accounting, fraud investigations, and litigation consulting.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       She graduated from St. Peter’s College with a Bachelor of Science degree in accounting. She is a Certified Public Accountant (CPA) and is Certified in Financial Forensics (CFF).
       </p>

       

      
     </div>

     

   </div>
 </div>
     <Navbar/>  
  
<Footer/>
 </div>
    )
  }
  