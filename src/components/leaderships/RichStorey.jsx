import Img from '../../assets/leadership_images/richstoreyv3.jpg';
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
      
     <h3 className="mt-6 text-3xl font-bold  text-center leading-8 tracking-tight text-gray-900 sm:text-4xl">Rich Storey</h3>
     <h4 className="text-md  text-center leading-8 tracking-tight text-gray-600 sm:text-md">VP, Claim and Administration</h4>
     
       <p className="mt-6 text-xl leading-8 text-gray-500">
       Rich Storey currently serves as HRA’s Vice President of Claim and Administration. His current responsibilities include claim operations, as well as oversight of the legal billing, regulatory reporting, and claim investigation teams.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Prior to joining the company in 2005, Mr. Storey spent his career in the property-casualty insurance industry working for The Hanover Insurance Group and The Hartford, a Fortune 500 investment and insurance company. In his role at The Hartford, Rich was responsible for providing leadership oversight of claim operations located in Rockaway, NJ; Mount Lake Terrace, WA; and Lake Mary, FL.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       His career experience spans claim management, legal case resolution, data governance/analytics, regulatory compliance, performance management, and internal claim and financial auditing.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Mr. Storey holds a Bachelor of Science degree in Business Management and a Master of Business Administration degree in Business Studies from The William Paterson University of New Jersey, Cotsakos College of Business.
       </p>

       

      
     </div>

     

   </div>
 </div>
     <Navbar/>  
  
<Footer/>
 </div>
    )
  }
  