import BlogImg from '../../assets/blog images/BeforeCovid19OutlierMedical.jpg';
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
export default function BeforeCovid19Outlier() {
    return (
      <div className='pt-[103px]'>
      <div className="relative overflow-hidden bg-white py-16">
   <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
  
   </div>
   <div className="relative px-6 lg:px-8">
     <div className="mx-auto w-1/2 text-lg flex flex-col items-center">
     <h3 className="mt-2 text-3xl font-bold  text-center leading-8 tracking-tight text-gray-900 sm:text-4xl">Before COVID-19, Outlier Medical Malpractice Verdicts Were Rising—What’s Next?</h3>
     
       <img className = 'mt-10 rounded-xl' src={BlogImg}/>
       <p className="mt-8 text-lg leading-8 text-gray-500 italic">by Richard E. Anderson, MD, FACP, Chairman and Chief Executive Officer, The Doctors Company, and Leader of the TDC Group of Companies, including Healthcare Risk Advisors (HRA)</p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Severity—the average cost of a medical malpractice claim—continues its relentless increase. Though severity has been rising since at least the 1970s, in recent years we have seen a sharp increase in outlier verdicts, which exceed common policy limits and often set records for their venues: From 2014 to 2018, the number of verdicts in excess of $25 million more than tripled.1 Similarly, from 2010 to 2019, the average of the top 100 jury awards for medical malpractice cases rose by almost half.2 This disturbing trend threatens the viability of smaller medical malpractice insurers, who may not have the resources to cover such large verdicts, and portends medical malpractice rate increases while adding to burgeoning healthcare costs.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Before the pandemic, nearly all states had seen these extraordinarily large awards, but whether the pace of these awards will be affected by the pandemic is unknown. Some U.S. states have adopted limited liability protections for physicians during COVID-19, but those protections may be tested in the courts. Alternately, because physicians may be seen as heroes, pandemic-related malpractice cases may be less likely to result in large plaintiffs’ awards. Nevertheless, outsized awards to plaintiffs are part of an ongoing long-term trend.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Clinicians may well ask why severity is increasing at the same time the medical community has made important strides in patient safety and the overall frequency of claims has dropped. At The Doctors Company, we’ve seen a drop from a high of 17 claims per 100 physicians in 2000 to fewer than seven claims per 100 physicians today.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       The consolidation of healthcare is one driver of high verdicts. Large corporate defendants, almost always with very high policy limits, make attractive deep pockets in the eyes of sympathetic juries.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Monetary desensitization is another important factor. Our national debt exceeds $22 trillion, our annual budget is over $4 trillion, companies with no profits have valuations in the billions, and top athletes commonly sign contracts worth hundreds of millions of dollars. Though paid indemnities in average malpractice claims average many hundreds of thousands of dollars, and typically cover 100 percent of economic losses, these numbers may appear less impressive in an era where nine- and 13-digit numbers are commonly used. A.M. Best, which rates insurance companies, has expressed concerns about the impact of monetary desensitization, also known as social inflation, on severity.3
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Batch claims, lawsuits in which plaintiffs bring multiple claims against one defendant based on the same behavior, are another contributor. Examples include the claims brought against compounding pharmacies alleging that breaches in sterile technique affected many individual patients.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Social media is a potent facilitator of batch claims. A patient with an unexpected adverse outcome from a particular operation may post, “Dr. X botched my surgery.” Others who believe they have had a similar experience respond, and an attorney gathers them all into a batch claim. Claims of this kind were distinctly unusual in the past, but are now an annual occurrence.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       States lacking caps on noneconomic damages are particularly vulnerable to these factors. Without caps, awards for pain and suffering are unlimited and are almost always present in outlier cases.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       The increase in severity adds to the costs of healthcare, which already account for 18 percent of our gross national product.4 At The Doctors Company, we saw a 55 percent increase in severity—the cost of the average claim—from 2000 to 2018. This drives increases in insurance rates: The average payment for a closed medical malpractice case has been growing well beyond the pace of inflation since 2014—and this spike in claims losses necessarily drives the rate increases that insurers are implementing in 2020.5 (Such increases are sometimes falsely attributed to COVID-19 which is too recent to have driven claims costs.) Ultimately, added costs are passed down to patients in their bills for healthcare.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       The rise in severity negatively affects us all, but unless jurors’ attitudes change, batch claims decrease, and caps on noneconomic damages are protected, outlier verdicts will continue to become more commonplace.
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
     References
                </h1>

      

       <p className="mt-8 text-xl leading-8 text-gray-500">
       <ul> 
        <li>1. <a className='text-red-600 underline' href='https://www.thedoctors.com/articles/before-covid-19-outlier-medical-malpractice-verdicts-were-risingwhats-next/#_ednref1'>https://www.thedoctors.com/articles/before-covid-19-outlier-medical-malpractice-verdicts-were-risingwhats-next/#_ednref1</a>Burns B. MedPL market updates. Oral presentation at: PLUS Symposium Series, Healthcare and Medical PL; March 12, 2019; Chicago, IL.</li>
        <li>2. <a className='text-red-600 underline' href='https://www.thedoctors.com/articles/before-covid-19-outlier-medical-malpractice-verdicts-were-risingwhats-next/#_ednref2'>https://www.thedoctors.com/articles/before-covid-19-outlier-medical-malpractice-verdicts-were-risingwhats-next/#_ednref2</a> Strategic Study Series Insurance Research. 2020: Medical professional liability insurance—years of plenty, years of famine. Hartford, CT: Conning;2019:22.</li>
        <li>3. <a className='text-red-600 underline' href='https://www.thedoctors.com/articles/before-covid-19-outlier-medical-malpractice-verdicts-were-risingwhats-next/#_ednref3'>https://www.thedoctors.com/articles/before-covid-19-outlier-medical-malpractice-verdicts-were-risingwhats-next/#_ednref3</a> A.M. Best Company. U S medical professional liability market remains in flux. Best’s Market Segment Report. Published April 29, 2020. Accessed December 8, 2020. <a className='text-red-600 underline' href='http://news.ambest.com/newscontent.aspx?refnum=224903'>http://news.ambest.com/newscontent.aspx?refnum=224903</a></li>
        <li>4. <a className='text-red-600 underline' href='https://www.thedoctors.com/articles/before-covid-19-outlier-medical-malpractice-verdicts-were-risingwhats-next/#_ednref4'>https://www.thedoctors.com/articles/before-covid-19-outlier-medical-malpractice-verdicts-were-risingwhats-next/#_ednref4</a> Centers for Medicare and Medicaid Services. National health expenditure data. Published December 11, 2018. Accessed November 23, 2020. <a className='text-red-600 underline' href='https://www.cms.gov/Research-Statistics-Data-and-Systems/Statistics-Trends-and-Reports/NationalHealthExpendData/NationalHealthAccountsHistorical.html'>https://www.cms.gov/Research-Statistics-Data-and-Systems/Statistics-Trends-and-Reports/NationalHealthExpendData/NationalHealthAccountsHistorical.html</a>.</li>
        <li>5. <a className='text-red-600 underline' href='https://www.thedoctors.com/articles/before-covid-19-outlier-medical-malpractice-verdicts-were-risingwhats-next/#_ednref5 '>https://www.thedoctors.com/articles/before-covid-19-outlier-medical-malpractice-verdicts-were-risingwhats-next/#_ednref5</a> Karls C. Paid indemnity severity, countrywide by closed year. In oral presentation: What is that light at the end of the tunnel? At: MPL Association CEO/COO Workshop; March 11-14, 2020; Scottsdale, AZ.</li>
       </ul>
       </p>

       

      
     </div>

    

   

    
     

   </div>
 </div>
     <Navbar/>  
  
<Footer/>
 </div>
    )
  }
  