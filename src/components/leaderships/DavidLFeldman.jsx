import Img from '../../assets/leadership_images/dfeldman.jpg';
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
      
     <h3 className="mt-6 text-3xl font-bold  text-center leading-8 tracking-tight text-gray-900 sm:text-4xl">David L. Feldman</h3>
     <h4 className="text-md  text-center leading-8 tracking-tight text-gray-600 sm:text-md">SVP and CMO</h4>
     
       <p className="mt-6 text-xl leading-8 text-gray-500">
       David L. Feldman, MD, MBA, CPE, FAAPL, FACS, is an experienced healthcare leader, serving for many years as chief medical officer (CMO) of the HIC/FOJP hospitals in New York City. In addition to serving as chief medical officer of The Doctors Company and TDC Group, he is senior vice president and chief medical officer at HRA, a TDC Group company. Under Dr. Feldman’s leadership, HRA provides resources and a collaborative environment designed to minimize claims and lower premiums for HRA clients by preventing patient harm, enhancing teamwork and communication, and improving documentation.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Prior to his position at HRA, Dr. Feldman was vice president for patient safety, vice president of perioperative services, and vice chairman of the department of surgery at Maimonides Medical Center in Brooklyn, New York. He implemented numerous patient safety initiatives including the use of the World Health Organization (WHO) Surgical Safety Checklist. As past president of the Maimonides medical staff, Dr. Feldman was instrumental in the creation and implementation of a hospital-wide Code of Mutual Respect, and physician peer review committee.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Dr. Feldman currently serves on the steering committee of the American College of Surgeons (ACS) for retraining and retooling of practicing surgeons. He served on the ACS committee on perioperative care and as vice chairman of the ACS collaborative task force for the development of high-performance teams in surgery. He also served as the ACS liaison to the Association of periOperative Registered Nurses recommended practices committee.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Dr. Feldman is a master TeamSTEPPSTM trainer and a certified trainer in Crucial Conversations® and Crucial Confrontations®. He received a Bachelor of Arts degree and Doctor of Medicine degree from Duke University, completed training in general surgery at the Roosevelt Hospital (now Mount Sinai West), and plastic surgery at Duke University Medical Center. He earned a Master of Business Administration degree from New York University.
       </p>

       

      
     </div>

     

   </div>
 </div>
     <Navbar/>  
  
<Footer/>
 </div>
    )
  }
  