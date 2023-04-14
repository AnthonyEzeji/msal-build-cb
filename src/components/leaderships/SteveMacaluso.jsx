import Img from '../../assets/leadership_images/stevemacv2.jpg';
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
      
     <h3 className="mt-6 text-3xl font-bold  text-center leading-8 tracking-tight text-gray-900 sm:text-4xl">Steve Macaluso</h3>
     <h4 className="text-md  text-center leading-8 tracking-tight text-gray-600 sm:text-md">VP, Client Management</h4>
     
       <p className="mt-6 text-xl leading-8 text-gray-500">
       Steven Macaluso is Vice President, Client Management, at HRA. His role includes handling a wide array of contract, risk management, and coverage-related matters. In particular, Mr. Macaluso provides detailed insurance reviews of construction projects to achieve proper transfer of construction risk for HRA program hospitals and other clients.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Prior to his current position at HRA, Mr. Macaluso was Vice President for Agency Services and Associate General Counsel of FOJP Services Corporation, which followed an in-house counsel position at Montefiore Medical Center and private law firm practice that included representation of hospitals and other healthcare entities.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Mr. Macaluso earned his Bachelor of Arts and Juris Doctor degrees from Harvard University.
       </p>


     </div>

     

   </div>
 </div>
     <Navbar/>  
  
<Footer/>
 </div>
    )
  }
  