import Img from '../../assets/leadership_images/melissajohnson.jpg';
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
      
     <h3 className="mt-6 text-3xl font-bold  text-center leading-8 tracking-tight text-gray-900 sm:text-4xl">Melissa Johnson</h3>
     <h4 className="text-md  text-center leading-8 tracking-tight text-gray-600 sm:text-md">VP, Finance and Controller</h4>
     
       <p className="mt-6 text-xl leading-8 text-gray-500">
       Melissa Johnson currently serves as HRA's Vice President of Finance and Controller. She has held many previous positions within the HIC and FOJP finance departments since joining the program in 2005. She brings to the company over 20 years of experience in finance and accounting.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Her experience includes statutory financial reporting, audit coordination, and internal controls with a primary focus on medical malpractice insurance.
       </p>

       <p className="mt-8 text-xl leading-8 text-gray-500">
       Ms. Johnson holds a Bachelor of Science degree in commerce with concentrations in finance, accounting, and economics from the University of Virginia. She is the Treasurer of Pets Alive, a nonprofit animal rescue based in New York. She also serves as Treasurer of the NYC Parks Mounted Auxiliary Unit.
       </p>

      
     </div>

     

   </div>
 </div>
     <Navbar/>  
  
<Footer/>
 </div>
    )
  }
  