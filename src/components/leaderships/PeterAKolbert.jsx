import Img from '../../assets/leadership_images/pkolbert.jpg';
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
      
     <h3 className="mt-6 text-3xl font-bold  text-center leading-8 tracking-tight text-gray-900 sm:text-4xl">Peter A. Kolbert</h3>
     <h4 className="text-md  text-center leading-8 tracking-tight text-gray-600 sm:text-md">SVP, Claims and Litigation Management</h4>
     
       <p className="mt-6 text-xl leading-8 text-gray-500">
       Peter A. Kolbert, JD, is HRA’s senior vice president for claim and litigation services, which manages and oversees the defense aspects of all professional and general liability claims covered by the company. Mr. Kolbert is also the enterprise COVID-19 coordinator responsible for overseeing and coordinating the COVID-19 claims across all the TDC Group strategic business units. He works with HRA’s risk management department helping clients mitigate and prevent losses. Mr. Kolbert also works directly with clients on legal and educational projects to improve risk prevention.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Mr. Kolbert joined the company in 2010 after gaining more than 20 years experience defending medical malpractice cases in state and federal courts involving a wide array of medical specialties. As a partner with Wilson Elser, he managed a large volume of medical malpractice litigation from pretrial to trial, while overseeing a team of attorneys in one of the firm’s medical malpractice groups. In concert with his practice, Mr. Kolbert has lectured and published articles on medical malpractice–related topics ranging from informed consent to immunities applicable to COVID-19–related litigation, and from best charting practices to principles of legal risk management.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Prior to going into private practice, Mr. Kolbert was an assistant corporation counsel representing New York City and its many agencies including the New York Health and Hospitals Corporation, the NYPD, the NYFD, and the New York Board of Education in trying cases to verdict throughout New York City.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Mr. Kolbert has a Bachelor of Arts degree from the University of Massachusetts and a Juris Doctor degree from Brooklyn Law School. He is a visiting assistant professor for the Department of Medicine at Albert Einstein College of Medicine, Montefiore Medical Center. He also holds a New York State independent insurance adjuster license.
       </p>

       

      
     </div>

     

   </div>
 </div>
     <Navbar/>  
  
<Footer/>
 </div>
    )
  }
  