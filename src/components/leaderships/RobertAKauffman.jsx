import Img from '../../assets/leadership_images/rkauffman.jpg';
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
export default function RobertAKauffman() {
    return (
      <div className='pt-[103px]'>
      <div className="relative overflow-hidden bg-white py-16">
   <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
  
   </div>
   <div className="relative px-6 lg:px-8">
     <div className="mx-auto w-2/3 text-lg flex flex-col">
      <div className="flex flex-col items-center justify-center"><img src={Img} className="h-150 w-191"></img></div>
      
     <h3 className="mt-6 text-3xl font-bold  text-center leading-8 tracking-tight text-gray-900 sm:text-4xl">Robert A. Kauffman</h3>
     <h4 className="text-md  text-center leading-8 tracking-tight text-gray-600 sm:text-md">President</h4>
     
       <p className="mt-6 text-xl leading-8 text-gray-500">
       Robert A. Kauffman is president of Healthcare Risk Advisors (HRA), leading the expansion of the company’s self-insurance and risk transfer solutions for large medical practices, hospitals, and health systems. Rob previously served as senior vice president, secretary, and general counsel of FOJP Service Corporation (“FOJP”) and Hospitals Insurance Company (“HIC”).
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Rob has built a distinguished career in insurance and risk management. Prior to his roles at FOJP and HIC, he was senior vice president, secretary, general counsel, and chief compliance officer at Harleysville Insurance. He was also a partner at Reed Smith, an international law firm specializing in complex litigation, strategic transactions, and regulatory matters.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       “These ratings from A.M. Best reflect the strength and stability of our company”, said Rob Kauffman, President. “We look forward to providing this same, best imaginable level of service to new clients as we open our program to hospitals and physician groups throughout New York."
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       In addition to his private sector experience, Rob served with distinction as an Assistant U.S. Attorney in the Criminal Division of the United States Attorney’s Office for the Eastern District of Pennsylvania.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Mr. Kauffman earned his Bachelor of Arts and Juris Doctor degrees from the University of Pennsylvania.
       </p>

      
     </div>

     

   </div>
 </div>
     <Navbar/>  
  
<Footer/>
 </div>
    )
  }
  