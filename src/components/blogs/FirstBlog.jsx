import FirstBlogImg from '../../assets/blog images/FirstBlog.jpg';
import Navbar from '../Navbar'
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
export default function FirstBlog() {
    return (
      <div className="relative bg-white pt-[103px]">
        <Navbar/>

        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src={FirstBlogImg}
              alt=""
            />
          </div>
        </div>
        <div className="relative px-6 pt-12 pb-16 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
              
              <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">How Data Can Reduce the Chance for Medical Malpractice Lawsuits</h3>
              <p className="mt-8 text-lg text-gray-500">
              When it comes to understanding risk profiles for medical malpractice insurance, organizations have long been limited to little more than the data which comes only after an adverse event or lawsuit has been filed. However, new technologies are allowing healthcare organizations to be more proactive in their analyses and use data to project risk profiles even before events occur.  
              </p>
              <div className="prose prose-red mt-5 text-gray-500">
              <p className="mt-8 text-lg text-gray-500">
              New malpractice analytics solutions can analyze data on an ongoing basis, as healthcare delivery services are rendered for patients in facilities like hospitals and ambulatory surgical centers. Leading organizations are already leveraging data as a means to perform well in their value-based care programs – including the use of payer data to build profiles of patients. With this information in hand, analysts are able to leverage the data to provide ongoing evaluation of risk. 
              </p>
              <p className="mt-8 text-lg text-gray-500">
              Beyond value-based care contract performance, this data can also be leveraged to project the performance of practitioners and providers performing procedures. This helps to understand what is going on inside hospitals – well ahead of any malpractice claim potentially showing up for that location.
              </p>
                <h1  className="mt-8 text-2xl text-gray-800">
                EHR Data and Potential Proxies:  
                </h1>
              
                <p  className="mt-8 text-lg text-gray-500" >
                Electronic health records systems (also known as EHRs), house a patient’s history, record of clinical procedures, and test results. Healthcare organizations are able to configure their EHRs to alert the staff when a test result shows up as abnormal. This gives providers a chance to reach out to the patient to touch base and ensure all is well – or to schedule further tests and procedures. The result of this is a reduction in both the potential for mistakes and the likelihood of a malpractice lawsuit.   
                </p>
                <p  className="mt-8 text-lg text-gray-500">
                  This is just one example of how interaction between the care provider and the patient can increase care quality, and thus reduce the chance of medical malpractice lawsuits. When looking at this data, there’s an opportunity to shift away from the traditional, reactive way of doing things toward a more proactive, data-driven approach.  
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  