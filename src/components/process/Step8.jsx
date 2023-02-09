/* This example requires Tailwind CSS v3.0+ */
import dash from '../../assets/dashboard-img-1.png'
import ContactUs from '../ContactUs'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { BsPinMap } from 'react-icons/bs'
/* This example requires Tailwind CSS v3.0+ */
export default function Example() {
    return (
      <div className="bg-white">
        <div className="h-screen w-screen ">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:px-16 h-full">
            <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white">
              Contact our Team
            </h2>
            <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight text-slate-300">
              Start Leveraging our Services Today
            </h2>
            <div className="flex justify-center">
      
      <div className="relative w-full mx-auto max-w-2xl ">

        
        <div className=" ">
          <div className="mx-auto max-w-lg">
            
            <p className="mt-3 text-lg leading-6 text-white">
            Want to learn more about our solutions or have a question? Feel free to fill out the form and we will be in touch to help answer any of your questions.
            </p>
       
           
          </div>
        </div>
      <button>Sign Up</button>
      </div>
    </div>
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    )
  }