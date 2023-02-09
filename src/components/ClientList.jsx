import BHSLogo from'../assets/client logos/Bronx Care.jpg'
import MSHLogo from '../assets/client logos/Mount Sinai Logo.jpg'
import MFLogo from'../assets/client logos/Montefiore.jpg'
import NyackLogo from '../assets/client logos/Nyack.jpg'
import WPLogo from'../assets/client logos/White Plains.jpg'
import BlytheLogo from '../assets/client logos/Blythedale.jpg'
import STLukeLogo from '../assets/client logos/St Lukes.jpg'

export default function ClientList() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl pb-12 px-4 sm:px-6 lg:pb-16 lg:px-8">
          <p className="text-center text-lg font-semibold text-gray-600 flex justify-center">
            Trusted by over <p className='font-bold mx-2'>100</p> New York hospitals and physicians.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src={BHSLogo}
                alt="Workcation"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img className="max-h-12" src={MSHLogo} alt="Mount Sinai" />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img className="max-h-12" src={MFLogo} alt="Montefiore" />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img className="max-h-12" src={NyackLogo} alt="Maimonades" />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src={WPLogo}
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
              <img
                className="max-h-12"
                src={BlytheLogo}
                alt="Statamic"
              />
            </div>
            
          </div>
        </div>
      </div>
    )
  }
  