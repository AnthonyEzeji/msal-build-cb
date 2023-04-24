import BlogImg from '../../assets/blog images/DukeUniversityThreeGoodThings.png';
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
export default function DukeUniversityThreeGoodThings() {
    return (
      <div className='pt-[103px]'>
      <div className="relative overflow-hidden bg-white py-16">
   <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
  
   </div>
   <div className="relative px-6 lg:px-8">
     <div className="mx-auto w-1/2 text-lg flex flex-col items-center">
     <h3 className="mt-2 text-3xl font-bold  text-center leading-8 tracking-tight text-gray-900 sm:text-4xl">Duke University “Three Good Things” Program on Addressing Physician & Staff Burnout Presented by HRA</h3>
     
       <img className = 'mt-10 rounded-xl' src={BlogImg}/>
       <p className="mt-8 text-lg leading-8 text-gray-500 italic">by David L. Feldman, MD, MBA, CPE, FAAPL, FACS, Chief Medical Officer for The Doctors Company</p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       In April, I had the pleasure of hosting an HRA webinar with my colleague, Dr. Bryan Sexton, Director of the Duke Center for Healthcare Safety and Quality at the Duke University Medical Center (DUMC) Department of Psychiatry and Behavioral Science. In our webinar, Dr. Sexton presented an eye-opening, and optimistically encouraging, discourse on physician and staff “burnout,” and the latest results of his ongoing research and development of tools to combat it.
       </p>
     </div>

     <div className="w-1/2 prose-lg prose-red mx-auto mt-6 text-gray-500">
     <h1  className="mt-8 text-2xl text-gray-800 font-bold">
     Burnout: A Closer Look
      </h1>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Even in the decade or so before the COVID pandemic of the past year, physicians were growing increasingly familiar with the notion of “burnout” – driven by increasing regulatory requirements, bureaucratic responsibilities, government mandates regarding the use of IT, and of course, increasing financial and career pressure in a changing industry.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       As a practical matter, for Patient Safety outcomes, healthcare worker burnout predicts lower engagement scores with patients, higher infection rates and medication errors, and higher standardized mortality ratios, our webinar audience learned.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       In their work at Duke, Dr. Sexton’s team developed a new definition of burnout: “Burnout, at its core, is an impaired ability to experience positive emotions – like hope, or gratitude, or interest, or just being amazed at the things around you,” he explained on the webinar.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       He spoke about how this impairment is rooted in the habitual, self-reinforcing, and actually a biological tendency to quickly identify and focus on the negative, at the expense of noticing the positive. While this was once a useful defense mechanism when we were running to escape a carnivorous predator in the epochs before civilization, Dr. Sexton explained that many of us still apply this keen focus on the negative and perceived threats to our modern careers and home life. In this way, our view of the world around us becomes distorted.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       “The negative screams at you, but the positive only whispers,” he noted, quoting Barbara Fredrickson, the esteemed researcher and Kenan Distinguished Professor of Psychology at the University of North Carolina – Chapel Hill.
       </p>
     </div>

     <div className="w-1/2 prose-lg prose-red mx-auto mt-6 text-gray-500">
     <h1  className="mt-8 text-2xl text-gray-800 font-bold">
     The Power of the Positive in Combating Burnout
                </h1>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       After laying out the root causes of burnout, and some fascinating data (including the correlation between Twitter negativity and CDC mortality rates by U.S. county), Dr. Sexton transitioned to discuss the critical importance of noting the positive events, experiences, and emotions in our daily lives.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Ten key positive emotions have been defined in the work: Joy, Gratitude, Serenity, Interest, Hope, Pride, Amusement, Inspiration, Awe, and Love. Feeling those emotions is where purpose and meaning come from. Experiencing some of these emotions on a daily basis drives an increase in happiness, a reduction in depression, and allows us to “recharge our batteries,” a necessary replenishment of the emotional and intellectual energy we need to function at a better level in our daily work and home life.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       “We call this ‘Pausing and Reflecting,’” Dr. Sexton explained; “and that’s the ‘secret sauce’ for the effectiveness of our ‘Three Good Things’ tool – you’re pausing and reflecting each day on what went well.”
       </p>
     </div>

     <div className="w-1/2 prose-lg prose-red mx-auto mt-6 text-gray-500">
     <h1  className="mt-8 text-2xl text-gray-800 font-bold">
     A New Tool: The Duke “Three Good Things” Smartphone App
      </h1>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       The “Three Good Things” tool is as simple as it sounds, he told our audience. With methodologies developed and clinically experimented upon by his Duke team for more than seven years (building upon research going back to the early 1970s), the popular, easy-to-use tool is accessed through a smartphone app. And as the name implies, all participants have to do is take a few moments in the evening to “pause and reflect,” briefly note or describe three good things that happened that day, and then choose from a drop-down menu of which of the 10 key positive emotions the experience created. 
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       More amazing still, participants only have to do this for 15 days – and then they’re done. The positive results continue.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       “Three Good Things” has yielded staggering data results, not only in how much burnout is reduced, but in how long the effect of the remedy lasts – over a year, to 18 months, and counting (as early participants are measured and new ones enroll) in reduced burnout and depression.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       “We settled on 15 days, in part because while our data showed that ‘Three Good Things’ was slightly more effective than SSRIs (selective serotonin uptake inhibitors) with a one-week program, the results surpassed SSRIs even more dramatically with the 2-week/ 15-day program,” Dr. Sexton explained. “And, our results continue on after the short program – this isn’t like SSRIs, where if you stop taking them the effects melt away.”
       </p>
     </div>

     <div className="w-1/2 prose-lg prose-red mx-auto mt-6 text-gray-500">
     <h1  className="mt-8 text-2xl text-gray-800 font-bold">
     Try “Three Good Things” – and become a Wellbeing Ambassador
      </h1>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       If you think this all sounds too easy, see for yourself. View the <a href='https://www.youtube.com/watch?v=OYMQYhey08w' className='text-red-600 underline'>three-minute video overview </a>of the program and/or just go ahead and enroll on the <a href='https://duke.qualtrics.com/jfe/form/SV_egOg8BpLK9TvfOl' className='text-red-600 underline'>app on your smartphone</a>. Of course, you can peruse comprehensive data, reporting, and other programs and presentations by going to the <a href='https://hsq.dukehealth.org/' className='text-red-600 underline'>Duke Center for Healthcare Safety and Quality home page</a>.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       From there, Dr. Sexton urges physicians and healthcare staff to become “Wellbeing Ambassadors,” sharing both the messages and Duke’s program with colleagues and friends.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       “Our ‘Three Good Things’ program is an easy, ‘bite-sized’ solution to help doctors and healthcare professionals to deal with the double-dose of burnout imposed by the COVID pandemic,” Dr. Sexton summarized. “If there ever was a time for easy, ‘bite-sized’ solutions for physician burnout, that time is now.”
       </p>


     </div>

     <div className="w-1/2 prose-lg prose-red mx-auto mt-6 text-gray-500">
     <h1  className="mt-8 text-2xl text-gray-800 font-bold">
     About David L. Feldman, MD, MBA, CPE, FAAPL, FACS, is Chief Medical Officer for The Doctors Company, the nation’s largest physician-owned medical malpractice insurer, and for the TDC Group of companies (TDC Group), as well as for Healthcare Risk Advisors (HRA).
      </h1>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Dr. Feldman leads TDC Group’s education efforts on patient safety and risk management and is the primary spokesperson for trends and issues on patient safety and risk management. He is also Senior Vice President and Chief Medical Officer at Healthcare Risk Advisors (HRA), which is part of TDC Group. HRA provides resources and a collaborative environment designed to minimize claims and lower premiums for HRA clients by preventing patient harm, enhancing teamwork and communication, and improving documentation.  
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Prior to HRA, Dr. Feldman was Vice President for Patient Safety, Vice President of Perioperative Services, and Vice Chairman of the Department of Surgery at Maimonides Medical Center in Brooklyn, NY, where he implemented numerous patient safety initiatives, including the use of the World Health Organization (WHO) surgical checklist. He currently serves on the steering committee of the American College of Surgeons (ACS) for retraining and retooling of practicing surgeons.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Dr. Feldman received a BA and MD from Duke University, completed training in general surgery at The Roosevelt Hospital (now Mount Sinai West), and plastic surgery at Duke University Medical Center. He earned an MBA from New York University. 
       </p>
     </div>


     <div className="w-1/2 prose-lg prose-red mx-auto mt-6 text-gray-500">
     <h1  className="mt-8 text-2xl text-gray-800 font-bold">
     About Bryan Sexton, PhD, MA, 
      </h1>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Duke University Associate Professor in Psychiatry and Behavioral Science, currently serves as Director of the Duke Center for Healthcare Safety and Quality at the Duke University Medical Center (DUMC) Department of Psychiatry and Behavioral Science. He earned his Ph.D. in Social and Organizational Psychology from the University of Texas, Austin, followed by a post-doctoral fellowship at the University of Texas Medical School in Houston.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Dr. Sexton has captured the wisdom of frontline caregivers through rigorous assessments of safety culture, teamwork, and workforce resilience. His research instruments have been used around the world in over 3000 hospitals, in 30 countries. His current R01 grant from NIH is a randomized clinical trial of resilience training. He has studied teamwork, safety and resilience in high-risk environments such as the commercial aviation cockpit, the operating room, and the intensive care unit (ICU), under funding from NIH, NASA, AHRQ, Robert Wood Johnson Foundation, Swiss National Science Foundation, and the Gottlieb Daimler and Karl Benz Foundation. 
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       With specializations in organizational assessment, teamwork, survey development, and quantitative methods, Dr. Sexton spends his time teaching, mentoring, conducting research, and finding practical ways of getting busy caregivers to do the right thing, by making it the easy thing to do. He has found that results across industries, work settings, shifts, professions, and countries highlight a great deal about reliability in high-risk environments – specifically, “you are better off changing the situation, than trying to change human nature.” 
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
       Claim and Litigation Services and Risk Management Services work together with hospital chairs and risk managers to identify trends and opportunities. We have over 30 years of experience working with healthcare institutions to reduce liability risk. HRA is currently serving 18 hospitals, and we have the expertise to reduce liability exposure and improve patient safety that healthcare organizations will not find elsewhere. HRA underwrites and issues a broad spectrum of professional coverages through its HIC (Hospitals Insurance Company) entity.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       HRA is a member of The TDC Group of companies, whose entity The Doctors Company is the nation’s largest physician-owned provider of insurance, risk management, and healthcare practice improvement solutions.
       </p>
     </div>

     

   </div>
 </div>
     <Navbar/>  
  
<Footer/>
 </div>
    )
  }
  