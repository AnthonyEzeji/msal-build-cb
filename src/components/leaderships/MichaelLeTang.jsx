import Img from '../../assets/leadership_images/michaelletangv6.jpg';
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
      
     <h3 className="mt-6 text-3xl font-bold  text-center leading-8 tracking-tight text-gray-900 sm:text-4xl">Michael LeTang</h3>
     <h4 className="text-md  text-center leading-8 tracking-tight text-gray-600 sm:text-md">VP, Chief Nursing Informatics Officer</h4>
     
       <p className="mt-6 text-xl leading-8 text-gray-500">
       Michael LeTang is a highly accomplished and experienced healthcare professional with over 20 years of experience in nursing and possesses a wealth of knowledge and expertise in the field.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Prior to joining HRA, Mr. LeTang was Associate Director of Nursing Informatics at Memorial Sloan Kettering Cancer Center in New York City. He led and implemented numerous patient safety and care quality initiatives by leveraging innovative technical solutions and clinical system integrations. He has a Master's Degree and board certifications in nursing informatics and critical care nursing, and he is an adjunct professor at NYU in the graduate nursing informatics program. He was a finalist for the Nurse.com GEM Award for excellence in clinical nursing in 2016.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Specializing in critical care, post-anesthesia, and surgical nursing, Mr. LeTang has spent over seven years as a nursing informatics leader. Receiving multiple research grants and awards, he’s published work on leveraging technology to improve postoperative communication in patients undergoing head and neck surgery.
       </p>


       <p className="mt-8 text-xl leading-8 text-gray-500">
       Mr. LeTang utilizes a data- and user-centered approach to improve care quality and minimize risk by integrating disparate clinical systems and implementing innovative solutions that support clinician workflow and operational requirements.
       </p>

     </div>

     

   </div>
 </div>
     <Navbar/>  
  
<Footer/>
 </div>
    )
  }
  