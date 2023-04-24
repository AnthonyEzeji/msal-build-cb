import BlogImg from '../../assets/blog images/UsingMedicalMalpracticeData.jpeg';
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
export default function UsingMedicalMalpracticeData() {
    return (
      <div className='pt-[103px]'>
      <div className="relative overflow-hidden bg-white py-16">
   <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
  
   </div>
   <div className="relative px-6 lg:px-8">
     <div className="mx-auto w-1/2 text-lg flex flex-col items-center">
     <h3 className="mt-2 text-3xl font-bold  text-center leading-8 tracking-tight text-gray-900 sm:text-4xl">Using Medical Malpractice Data to Improve Patient Safety</h3>
     
       <img className = 'mt-10 rounded-xl' src={BlogImg}/>
       <p className="mt-8 text-lg leading-8 text-gray-500 italic">*Adapted from an article that originally appeared in Connect, The Doctors Company newsletter </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       While patient safety as a concept has long been a priority in the medical field, as a discipline it is relatively young. As healthcare has become more complex, the need for a systematic approach to patient safety has become paramount. Using medical malpractice data can focus our search for ways to succeed at three key aims of patient safety and risk mitigation efforts physicians, practices, and health systems: (1) prevent adverse events, (2) prevent lawsuits if adverse events do occur, and (3) prevail in lawsuits when all else fails.
       </p>
     </div>

     <div className="w-1/2 prose-lg prose-red mx-auto mt-6 text-gray-500">
     <h1  className="mt-8 text-2xl text-gray-800 font-bold">
     1. Prevent adverse events.
      </h1>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       “We can’t fix what we can’t see,” says Dana Siegal, RN, CPHRM, CPPS, director of Patient Safety Services for CRICO Strategies. The Doctors Company employs CRICO’s Comparative Benchmark System when we code medical malpractice claims for our closed claims studies. She continues, “When we view that data across collective and comparative data sets, we validate the repeated patterns and trends across the care system, allowing us to focus resources and improvement initiatives on the most vulnerable risks.”
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       P. Divya Parikh, MPH, CAE, vice president of Research and Education for the MPL Association, agrees: “Medical malpractice data offer insight into high-risk specialties, medical conditions, and procedures that result in claims, allowing physicians and healthcare systems to direct their risk management programs for safer delivery of care.” 
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       This last point is key—that healthcare systems can and do direct resources to improving patient safety based on insights derived from medical malpractice data—because it is easier to convince large systems to change when they can see not only a patient safety benefit, but also a strong financial incentive.
       </p>
     </div>

     <div className="w-1/2 prose-lg prose-red mx-auto mt-6 text-gray-500">
     <h1  className="mt-8 text-2xl text-gray-800 font-bold">
     2. Preclude lawsuits with good communication
                </h1>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       “Communication issues are a great example of the power of studying malpractice data to shed light on the multiple factors contributing to errors and harm,” says Ms. Siegal. When we analyze closed medical malpractice claims across specialties and settings, communication gaps crop up again and again. Those gaps can stem from medical team members miscommunicating with each other or with families. While the former may result in an adverse event, the latter may result in a lawsuit. A patient’s desire to pursue litigation after an adverse event frequently derives from a misunderstanding about possible outcomes. As a mentor once told me, “When you talk about potential complications before surgery, that’s informed consent. When you talk about them after the procedure, that’s an excuse.” 
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       <a className='text-red-600 underline' href='https://www.nytimes.com/2015/06/02/upshot/to-be-sued-less-doctors-should-talk-to-patients-more.html'>A New York Times article</a> sifted decades’ worth of studies to conclude, “Doctors sued most often were complained about by patients twice as much as those who were not, and poor communication was the most common complaint.” Note that poor outcomes was not the most common complaint—it was poor communication.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       If your institution participates in a disclosure program, follow it carefully when responding to adverse events. A swift, compassionate, effective response to a patient’s needs in the aftermath of an adverse event or undesirable outcome is both ethically superior and practically advantageous for all parties, when compared to a lawsuit as the likely alternative. 
       </p>
     </div>

     <div className="w-1/2 prose-lg prose-red mx-auto mt-6 text-gray-500">
     <h1  className="mt-8 text-2xl text-gray-800 font-bold">
     3. Prevail when there are lawsuits via documentation.
      </h1>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       While undesired outcomes—even those that fall within the realm of a known complication for the treatment or procedure—may motivate patients to sue, it is often poor documentation that motivates a plaintiff’s attorney to take a case. The Doctors Company’s Vice President and Associate General Counsel Richard F. Cahill, JD, addresses this potential pitfall in <a href='https://www.thedoctors.com/articles/the-defensible-medical-record/' className='text-red-600 underline'>“The Defensible Medical Record”</a>: 
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Patient grievances may be filed based on an individual’s faulty recollection of events, or a failure to understand the course of treatment or the underlying reason that an adverse consequence occurred. When a medical record is well documented, many allegations are often readily resolved—frequently before a formal administrative process is even initiated.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       All of this is otherwise phrased as: <a className='font-bold'>Prevent, Communicate, Document</a>. 
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Experience has taught us that patients may bring suit either in the presence of actual medical error or in their perception of medical error. Either way, we have an opportunity to learn how to prevent the next claim. Ms. Parikh summarizes: “Every claim is in essence a patient complaint, and therefore an opportunity to learn where improvements can be made.” 
       </p>
     </div>

     <div className="w-1/2 prose-lg prose-red mx-auto mt-6 text-gray-500">
     <h1  className="mt-8 text-2xl text-gray-800 font-bold">
     About the Author 
      </h1>

      <p className="mt-8 text-lg leading-8 text-gray-500 italic">David L. Feldman, MD, MBA, CPE, FAAPL, FACS, is an experienced healthcare leader, serving for many years as chief medical officer (CMO) of the HIC/FOJP hospitals in New York City. In addition to serving as chief medical officer of The Doctors Company and TDC Group, he is senior vice president and chief medical officer at HRA, a TDC Group company. Under Dr. Feldman’s leadership, HRA provides resources and a collaborative environment designed to minimize claims and lower premiums for HRA clients by preventing patient harm, enhancing teamwork and communication, and improving documentation. </p>
     </div>

    
     

   </div>
 </div>
     <Navbar/>  
  
<Footer/>
 </div>
    )
  }
  