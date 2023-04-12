import BlogImg from '../../assets/blog images/HowRemotePatientMonitoringWillAffect.jpg';
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
export default function OpenNotesAPracticeComplianceRequirement() {
    return (
      <div className='pt-[103px]'>
      <div className="relative overflow-hidden bg-white py-16">
   <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">  
   </div>
   <div className="relative px-6 lg:px-8">
     <div className="mx-auto w-1/2 text-lg flex flex-col items-center">
     <h3 className="mt-2 text-3xl font-bold  text-center leading-8 tracking-tight text-gray-900 sm:text-4xl">How Remote Patient Monitoring Will Affect Medical Liability</h3>
     
       <img className = 'mt-10 rounded-xl' src={BlogImg}/>
       <p className="mt-8 text-lg leading-8 text-gray-500 italic">by Richard E. Anderson, MD, FACP, Chairman and Chief Executive Officer, The Doctors Company, and Leader of the TDC Group of Companies, including Healthcare Risk Advisors (HRA)</p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Remote patient monitoring (RPM) is one of the most talked-about areas of innovation in healthcare today, and for good reason: many consider RPM an exciting extension of the way telehealth has already allowed practices to offer more comprehensive care, improve patient outcomes, boost profitability, and reduce liability.  
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       RPM refers to a general set of policy and technology solutions aimed at chronic care management (CCM) and the care of certain risk populations. 
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       A broad range of exciting new RPM devices like scales, step counters and blood pressure cuffs are just some of the new options allowing practices to collect data on vital signs, weight, blood pressure, blood sugar, blood oxygen levels, heart rate, electrocardiograms and more, often from the comfort of their home. This data is then transmitted in a variety of ways to the care provider. 
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       In addition to the devices themselves, increased vendor support for monitoring and patient care, and enhanced technological integration with EHR systems and office workflow are making remote patient monitoring solutions more and more viable.   
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Studies show that RPM technologies can go a long way toward improving clinical and financial outcomes. According to <a className='text-red-600 underline' href='https://wellbox.care/'>Wellbox</a>, a provider of RPM technologies and CCM solutions, RPM technologies can decrease emergency room visits and hospitalizations by up to 70 percent, improve patient outcomes by up to 44 percent, and potentially save the U.S. $6 billion in annual healthcare costs.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       RPM technologies represent new and cutting-edge possibilities for hospitals, medical practice groups and physicians of all kinds to offer better care and patient outcomes and reduce liability in the process. 
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       “I think there are some really exciting innovations occurring in remote patient monitoring right now, and I can’t wait to see what practices are able to do with them,” Bailey Sutherland, an In-Practice Technology Services Consultant with HRA-affiliate Medical Advantage, said. 
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       “It’s really an extension of patient care, to see inside your patient’s home, and see what they’re doing to maintain their health,” Sutherland continued. “Getting reported deliveries on things like blood pressure, step count, and other metrics you’d want to monitor– there’s billable components to it too, which is great. I think it’s a great thing for practices to be able to tap into.”  
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       If your organization is interested in exploring RPM solutions, HRA’s affiliate business unit, Medical Advantage, can offer advisory and consultancy services around how to integrate CCM and RPM technology and policy solutions into your current patient experience. For further assistance, <a className='text-red-600 underline' href='https://www.medicaladvantage.com/contact/'>contact one of Medical Advantage’s experts</a> today. 
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500 italic">
       This post was adapted from an article which originally appeared on <a className='text-red-600 underline' href='https://www.medicaladvantage.com/blog/why-rpm-will-become-more-important/'>medicaladvantage.com</a>. 
       </p>
     </div>
   </div>
 </div>
     <Navbar/>  
  
<Footer/>
 </div>
    )
  }
  