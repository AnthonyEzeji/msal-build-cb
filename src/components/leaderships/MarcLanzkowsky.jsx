import Img from '../../assets/leadership_images/marclanzkowsky.jpg';
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
      
     <h3 className="mt-6 text-3xl font-bold  text-center leading-8 tracking-tight text-gray-900 sm:text-4xl">Marc Lanzkowsky</h3>
     <h4 className="text-md  text-center leading-8 tracking-tight text-gray-600 sm:text-md">VP, Claims Operations</h4>
     
       <p className="mt-6 text-xl leading-8 text-gray-500">
       Marc Lanzkowsky, JD, is HRA’s vice president of claims operations. He oversees claims administration, litigation management, investigations, and claims coding teams. Mr. Lanzkowsky helps drive the long-term strategic vision in support of the professional and liability claims professionals, and also helps to innovate claims data, and technology to lead our organization to claims operational excellence.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       After more than 25 years in the insurance industry, Mr. Lanzkowsky joined the company in 2021. His career began serving as a litigator in defending Long Island doctors and hospitals.  His pivot to insurance started with medical malpractice claims at Zurich North America where he held the positions of medical malpractice claims examiner, northeast regional claims manager for healthcare, and the director of operational innovation for the specialty claims group.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Mr. Lanzkowsky served as senior vice president of home office claims for Arch Insurance where, from its inception, he helped build the claims operations including the development of innovative claims technology, litigation management protocols, and claims administration.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Following his time at Arch Insurance, Mr. Lanzkowsky started his own claims consultancy. Next, he was managing director in the global insurance services group at FTI Consulting, Inc., a forensic and litigation consulting practice. He focused on assisting his clients to innovate and improve their claims organizations.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       His most recent role was executive director of operations and administration for a small brokerage where he modernized their infrastructure, overseeing customer service, compliance, business continuity, information technology, and administration.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Mr. Lanzkowsky holds a Bachelor of Arts degree from New York University and a Juris Doctor degree from Pace University School of Law.
       </p>
      
     </div>

     

   </div>
 </div>
     <Navbar/>  
  
<Footer/>
 </div>
    )
  }
  