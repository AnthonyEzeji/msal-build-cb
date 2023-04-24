import BlogImg from '../../assets/blog images/HowDataCanReduceTheChanceForMedicalMalpracticeLawsuits.jpeg';
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
export default function HowDataCanReducetheChanceforMedicalMalpracticeLawsuits() {
    return (
      <div className='pt-[103px]'>
      <div className="relative overflow-hidden bg-white py-16">
   <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
  
   </div>
   <div className="relative px-6 lg:px-8">
     <div className="mx-auto w-1/2 text-lg flex flex-col items-center">
     <h3 className="mt-2 text-3xl font-bold  text-center leading-8 tracking-tight text-gray-900 sm:text-4xl">How Data Can Reduce the Chance for Medical Malpractice Lawsuits</h3>
     
       <img className = 'mt-10 rounded-xl' src={BlogImg}/>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       When it comes to understanding risk profiles for medical malpractice insurance, organizations have long been limited to little more than the data which comes only after an adverse event or lawsuit has been filed. However, new technologies are allowing healthcare organizations to be more proactive in their analyses and use data to project risk profiles even before events occur.  
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       New malpractice analytics solutions can analyze data on an ongoing basis, as healthcare delivery services are rendered for patients in facilities like hospitals and ambulatory surgical centers. Leading organizations are already leveraging data as a means to perform well in their value-based care programs – including the use of payer data to build profiles of patients. With this information in hand, analysts are able to leverage the data to provide ongoing evaluation of risk. 
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Beyond value-based care contract performance, this data can also be leveraged to project the performance of practitioners and providers performing procedures. This helps to understand what is going on inside hospitals – well ahead of any malpractice claim potentially showing up for that location.
       </p>
     </div>

     <div className="w-1/2 prose-lg prose-red mx-auto mt-6 text-gray-500">
     <h1  className="mt-8 text-2xl text-gray-800 font-bold">
     EHR Data and Potential Proxies: 
      </h1>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       <a class='text-red-600 underline' href='https://www.medicaladvantage.com/solutions/ehr-consulting/'>Electronic health records</a> systems (also known as EHRs), house a patient’s history, record of clinical procedures, and test results. Healthcare organizations are able to configure their EHRs to alert the staff when a test result shows up as abnormal. This gives providers a chance to reach out to the patient to touch base and ensure all is well – or to schedule further tests and procedures. The result of this is a reduction in both the potential for mistakes and the likelihood of a malpractice lawsuit.   
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       This is just one example of how interaction between the care provider and the patient can increase care quality, and thus reduce the chance of medical malpractice lawsuits. When looking at this data, there’s an opportunity to shift away from the traditional, reactive way of doing things toward a more proactive, data-driven approach.  
       </p>
     </div>

     <div className="w-1/2 prose-lg prose-red mx-auto mt-6 text-gray-500">
     <h1  className="mt-8 text-2xl text-gray-800 font-bold">
     The Three V’s:  Volume, Velocity and Variety.  
                </h1>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       The volume of healthcare data we currently have at our fingertips is unprecedented, and the velocity at which the data comes in is also something we have never seen before. With these changes come new sets of both challenges and opportunities in terms of how we keep up with the velocity, volume and variety of data.    
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       In terms of assessing medical malpractice risk, the good news is that there’s more data available than ever before, representing an opportunity to use more robust and in-depth sources to better analyze risk.  
       </p>
      
       <p className="mt-8 text-xl leading-8 text-gray-500">
       In the digital era, the use of <a class='text-red-600 underline' href='https://www.medicaladvantage.com/solutions/healthcare-analytics-solutions/'>data and analytics</a> to assess and improve performance is essential – and perhaps nowhere more so than in healthcare. For more information on how analytics services and data tools can help your organization minimize the risk of malpractice lawsuits, contact one of HRA’s representatives today.
       </p>
     </div>

    

     

   </div>
 </div>
     <Navbar/>  
  
<Footer/>
 </div>
    )
  }
  