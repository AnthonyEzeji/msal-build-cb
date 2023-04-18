import BlogImg from '../../assets/blog images/FearOfCovidCreatesItsOwnRisk.jpg';
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
export default function FearOfCovid19() {
    return (
      <div className='pt-[103px]'>
      <div className="relative overflow-hidden bg-white py-16">
   <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
  
   </div>
   <div className="relative px-6 lg:px-8">
     <div className="mx-auto w-1/2 text-lg flex flex-col items-center">
     <h3 className="mt-2 text-3xl font-bold  text-center leading-8 tracking-tight text-gray-900 sm:text-4xl">Fear of Covid-19 Creates Its Own Risks for Cardiologists</h3>
     
       <img className = 'mt-10 rounded-xl' src={BlogImg}/>
       <p className="mt-8 text-lg leading-8 text-gray-500 italic">by David L. Feldman, MD, MBA, FACS, Chief Medical Officer, the TDC Group of Companies and Healthcare Risk Advisors (HRA)</p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       This past winter, The Doctors Company (the parent company of Healthcare Risk Advisors) published a <a className='underline text-red-600' href='https://www.thedoctors.com/articles/cardiology-closed-claims-study/'>report on its Cardiology Closed Claims Study</a>, a review of diagnostic cardiology claims that closed between 2014 and 2019. The study was based on claims and lawsuits filed against almost 500 cardiologists insure by The Doctors Company. There were 210 cardiology claims.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       I have found a myriad of interesting and relevant observations that have sprung from evaluating this important study.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       My esteemed colleague, John P. Erwin, III, MD, FACC, a cardiologist at NorthShore Medical Group, observed that “In polling cardiologists across the country, I’ve learned that one area in which almost all have seen or heard cases about are those who were to undergo transcatheter aortic valve replacement (TAVR) who did not undergo the procedure, and died.”
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Dr. Erwin’s comments illuminate a common theme for cardiologists during COVID-19: the risks of delayed care. While avoiding infection risks, patients may experience increased risks from existing or new cardiovascular conditions — and cardiologists may thereafter find themselves at increased risk for medical malpractice lawsuits.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Technologies for maintaining continuity of care can contribute to the problem: While telehealth in the form of remote monitoring has been well adopted by cardiologists, telemedicine visits can present serious challenges to diagnosis. Dr. Erwin says, “Cardiologists are usually astute diagnosticians, and part of that relies upon being able to lay eyes and hands and stethoscopes on the patient to determine risk/acuity level.”
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       While telemedicine visits have helped keep vulnerable patients home when practical, when cardiologists alert patients that they truly need to come to the clinic setting for evaluation, some will refuse to do so out of infection fears—sometimes with dire consequences. A recent <a className='text-red-600 underline' href='https://jamanetwork.com/journals/jamacardiology/fullarticle/2768742'>JAMA Cardiology</a> article noted that while some cardiologists have been supporting colleagues in critical care, many acute care settings “remain eerily quiet. Recent data from 9 high-volume centers across the US suggest a nearly 40% drop in catheterization laboratory activation for ST-elevation myocardial infarction care during this crisis. Apparent fear of COVID-19 is having the direct outcome of decreasing the use of life-saving evidence-based treatments.”
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       This decrease in patients accessing life-saving treatments may later yield an increase in claims of medical malpractice: Patients may suffer a catastrophic event or simply seek treatment when their disease is at a later, more advanced stage, with treatment options more limited and outcome prospects less favorable.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       COVID-19 delivers a freight of risks that cardiologists cannot control—adding motivation to mitigate the risks they can control, or at least influence. Through reading this careful analysis of recent cardiology malpractice claims, cardiologists can elevate their awareness of cognitive and system factors contributing to adverse events. Attending to these factors can help cardiologists protect patients and mitigate their risk of claims.
       </p>

     </div>

     <div className="w-1/2 prose-lg prose-red mx-auto mt-6 text-gray-500">
     <h1  className="mt-8 text-2xl text-gray-800 font-bold">
     About HRA (Healthcare Risk Advisors)
      </h1>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Healthcare Risk Advisors (HRA) partners with large medical practices and healthcare organizations to identify and solve their unique self-insurance, risk transfer, and risk management needs. We do this through a platform of innovation, deep business intelligence, knowledge, and experience.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Claim and Litigation Services and Risk Management Services work together with hospital chairs and risk managers to identify trends and opportunities. We have over 30 years of experience working with healthcare institutions to reduce liability risk. HRA is currently serving 18 hospitals, and we have the expertise to reduce liability exposure and improve patient safety that healthcare organizations will not find elsewhere.
       </p>

     </div>


     <div className="w-1/2 prose-lg prose-red mx-auto mt-6 text-gray-500">
     <h1  className="mt-8 text-2xl text-gray-800 font-bold">
     About Dr. David Feldman, Chief Medical Officer, HRA
      </h1>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       <a className='italic'>David L. Feldman, MD, MBA, CPE, FAAPL, FACS</a>, is Chief Medical Officer for The Doctors Company, the nation’s largest physician-owned medical malpractice insurer, and for the TDC Group of companies (TDC Group), as well as for Healthcare Risk Advisors (HRA).
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       He leads TDC Group’s education efforts on patient safety and risk management and is the primary spokesperson for trends and issues on patient safety and risk management. He is also Senior Vice President and Chief Medical Officer at Healthcare Risk Advisors (HRA), which is part of TDC Group. HRA provides resources and a collaborative environment designed to minimize claims and lower premiums for HRA clients by preventing patient harm, enhancing teamwork and communication, and improving documentation.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Prior to HRA, Dr Feldman was Vice President for Patient Safety, Vice President of Perioperative Services, and Vice Chairman of the Department of Surgery at Maimonides Medical Center in Brooklyn, NY, where he implemented numerous patient safety initiatives, including the use of the World Health Organization (WHO) surgical checklist. He currently serves on the steering committee of the American College of Surgeons (ACS) for retraining and retooling of practicing surgeons.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Dr Feldman received a BA and MD from Duke University, completed training in general surgery at The Roosevelt Hospital (now Mount Sinai West), and plastic surgery at Duke University Medical Center. He earned an MBA from New York University. 
       </p>

     </div>

     
       



    

   

    
     

   </div>
 </div>
     <Navbar/>  
  
<Footer/>
 </div>
    )
  }
  