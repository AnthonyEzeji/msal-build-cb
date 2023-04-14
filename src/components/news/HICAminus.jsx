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
export default function HICAminus() {
    return (
      <div className='pt-[103px]'>
      <div className="relative overflow-hidden bg-white py-16">
   <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
  
   </div>
   <div className="relative px-6 lg:px-8">
     <div className="mx-auto w-2/3 text-lg flex flex-col ">
     <h3 className="text-3xl font-bold  text-center leading-8 tracking-tight text-gray-900 sm:text-4xl">Hospitals Insurance Company “A-” Excellent Financial Rating Assigned by A.M. Best</h3>
     
       <p className="mt-8 text-xl leading-8 text-gray-500">
       <a className='font-bold'>New York, New York—A.M. Best</a>  has assigned Hospitals Insurance Company, Inc (HIC) a Financial Strength Rating of A- (Excellent) and a Long-Term Issuer Credit Rating of "A-". The outlook assigned to the Credit Ratings (ratings) is stable.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Before the pandemic, nearly all states had seen these extraordinarily large awards, but whether the pace of these awards will be affected by the pandemic is unknown. Some U.S. states have adopted limited liability protections for physicians during COVID-19, but those protections may be tested in the courts. Alternately, because physicians may be seen as heroes, pandemic-related malpractice cases may be less likely to result in large plaintiffs’ awards. Nevertheless, outsized awards to plaintiffs are part of an ongoing long-term trend.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       “These ratings from A.M. Best reflect the strength and stability of our company”, said Rob Kauffman, President. “We look forward to providing this same, best imaginable level of service to new clients as we open our program to hospitals and physician groups throughout New York."
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       According to the A.M. Best announcement, “The ratings reflect HIC’s balance sheet strength, which AM Best assesses as strongest, as well as its adequate operating performance, limited business profile and appropriate enterprise risk management.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       The entire A.M. Best news release is available <a className='text-red-600 underline' href='https://www.businesswire.com/news/home/20210423005534/en/AM-Best-Assigns-Credit-Ratings-to-Hospitals-Insurance-Company-Inc.'>here</a>.
       </p>

      
     </div>

     

   </div>
 </div>
     <Navbar/>  
  
<Footer/>
 </div>
    )
  }
  