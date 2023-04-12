import BlogImg from '../../assets/blog images/CommunicationIsTheKeyToPrevailInAMedicalLawsuit.jpg';
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
export default function HowRemotePatientMonitoring() {
    return (
      <div className='pt-[103px]'>
      <div className="relative overflow-hidden bg-white py-16">
   <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
  
   </div>
   <div className="relative px-6 lg:px-8">
     <div className="mx-auto w-1/2 text-lg flex flex-col items-center">
     <h3 className="mt-2 text-3xl font-bold  text-center leading-8 tracking-tight text-gray-900 sm:text-4xl">Communication is the Key to Prevail in a Medical Lawsuit</h3>
     
       <img className = 'mt-10 rounded-xl' src={BlogImg}/>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Recently, HRA Senior Vice President and Chief Claims Officer <a class='text-red-600 underline' href='https://www.healthcareriskadvisors.com/about/leadership/peter-a.-kolbert/'>Peter Kolbert</a> joined in a discussion about risk management in healthcare. The overall theme of the discussion was HRA’s unique approach: the three Ps of Prevent (adverse events), Preclude (litigation), and Prevail (in the event of a lawsuit). After spending 20 years litigating medical malpractice cases throughout the State of New York, it’s no surprise that Kolbert focused on the last of the Ps—prevail. 
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Imagine facing a medical malpractice lawsuit. It’s scary, stressful, and something to be avoided at all costs. But the reality is that most physicians will experience this at some point in their careers. In fact, a <a class='text-red-600 underline' href='https://www.nejm.org/doi/full/10.1056/NEJMsa1012370#t=article'>study</a> published in The New England Journal of Medicine found that by the age of 65, more than 75 percent of physicians in low-risk specialties and 99 percent of physicians in high-risk specialties have experienced a claim. And given that most medical malpractice cases take several years to resolve, it’s vital that you and your defense team—you the physician, the claim specialist, and the defense attorney—have a plan to prevail in the lawsuit. 
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       “I’m very passionate about getting the best outcome possible for every client, every single case,” says Kolbert. This is why he stresses the importance of communication between the insured and the defense team throughout the lifecycle of the case. “The insured is not only going to hear from HRA when the case opens and when the case closes; there’s going to be a partnership with us, with them throughout this,” Kolbert explains, “the insured needs to know that somebody is in their corner, that somebody is working for them on this case.” 
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       With that partnership and constant communication, a level of trust can be reached that allows the defense team to be even more effective. “We need to understand the strengths of the case and the potential weaknesses of the case,” he says. Kolbert explains the more information the defense team has, the better. As he puts it, “The great Wayne Gretzky said, ‘you need to go where the puck is going to be.’ You need to understand how a case is going to play out. You need to understand what your adversary is going to do.” Once the defense team takes on this global view, they can develop a unified strategy to prevail in the case. 
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Kolbert reminds us that this global view allows the defense team to zealously defend the insured. He explains, “Threats come from all sides. You know, it’s often not the plaintiffs you’ve got to worry about; it’s a co-defendant you’ve got to worry about. You need to figure the whole thing out, figure out everybody’s role and go forward.” 
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Ultimately, Kolbert says, HRA’s expectation is to resolve cases as quickly as possible, to rigorously defend the interests of the insured, to stay in constant communication with the insured, and to prevail on their behalf. <a href='https://www.healthcareriskadvisors.com/contact/' class='text-red-600 underline'>Contact</a> Healthcare Risk Advisors now if interested in learning more about insurance and risk management services offered.
       </p>
     </div>

   

     
    

     

   </div>
 </div>
     <Navbar/>  
  
<Footer/>
 </div>
    )
  }
  