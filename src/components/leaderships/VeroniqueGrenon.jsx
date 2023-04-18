import Img from '../../assets/leadership_images/vgrenon.jpg';
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
      
     <h3 className="mt-6 text-3xl font-bold  text-center leading-8 tracking-tight text-gray-900 sm:text-4xl">Veronique Grenon</h3>
     <h4 className="text-md  text-center leading-8 tracking-tight text-gray-600 sm:text-md">VP Data Analytics</h4>
     
       <p className="mt-6 text-xl leading-8 text-gray-500">
       Veronique Grenon is HRA’s Vice President of Data Analytics. She oversees a team of data scientists and statisticians who work on transforming data into actionable insights, using analytics to solve complex problems, and using technology to innovate the risk management field.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Ms. Grenon joins Health Risk Advisors with over 20 years of experience in analytics and actuarial analysis.  Prior to joining the company, she was managing director of global InsurTech research at Guy Carpenter, and a vice president at Stanford Hospital and Clinics, leading the Stanford Risk Management Analytics Team.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Ms. Grenon is a Fellow of the Casualty Actuarial Society and holds a Bachelor of Science in Actuarial Mathematics from Concordia University, Montréal, Canada.
       </p>

    
       

      
     </div>

     

   </div>
 </div>
     <Navbar/>  
  
<Footer/>
 </div>
    )
  }
  