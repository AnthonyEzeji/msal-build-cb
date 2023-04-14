import Img from '../../assets/leadership_images/fred-danback.jpg';
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
      
     <h3 className="mt-6 text-3xl font-bold  text-center leading-8 tracking-tight text-gray-900 sm:text-4xl">Fred Danback</h3>
     <h4 className="text-md  text-center leading-8 tracking-tight text-gray-600 sm:text-md">SVP and CIO</h4>
     
       <p className="mt-6 text-xl leading-8 text-gray-500">
       Fred Danback is senior vice president, chief information officer, and chief information security officer, responsible for HRA’s information technology strategy and operations. Mr. Danback leads the machine learning and artificial intelligence strategy and execution for HRA with a focus on creating industry leading insights to reduce medical malpractice liability and improving patient care.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Mr. Danback has over 30 years of experience in the insurance industry. Before joining HRA, Mr. Danback was senior vice president and chief information officer of Tokio Marine Management, the United States operation for Tokio Marine Nichido Fire, a global property and casualty carrier. Earlier, he was managing principal and chief information officer for Integro Insurance Brokers, and served as the head of global technology architecture with XL Capital and NAC Reinsurance.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Dr. Feldman currently serves on the steering committee of the American College of Surgeons (ACS) for retraining and retooling of practicing surgeons. He served on the ACS committee on perioperative care and as vice chairman of the ACS collaborative task force for the development of high-performance teams in surgery. He also served as the ACS liaison to the Association of periOperative Registered Nurses recommended practices committee.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Mr. Danback received a Bachelor of Business Administration degree magna cum laude in international management from Pace University. Mr. Danback is a certified information systems security professional having received his CISSP designation.
       </p>

       

      
     </div>

     

   </div>
 </div>
     <Navbar/>  
  
<Footer/>
 </div>
    )
  }
  