/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
export default function PPP() {
    return (
      <div className="relative bg-white py-16">
        <div className="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block" aria-hidden="true" />
        <div className="mx-auto max-w-7xl bg-indigo-600 lg:bg-transparent lg:px-8">
          <div className="lg:grid lg:grid-cols-12">
            <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
              <div className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true" />
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                  <img
                    className="rounded-3xl object-cover object-center shadow-2xl"
                    src="https://www.healthcareriskadvisors.com/siteassets/images/hra-red-triangle-with-descriptions.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
  
            <div className="relative bg-gray-600 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
              <div className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block" aria-hidden="true">
                <svg
                  className="absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-indigo-500" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                </svg>
                <svg
                  className="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-indigo-500" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                </svg>
              </div>
              <div className="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                <h2 className="text-3xl font-bold tracking-tight text-white" id="join-heading">
                The HRA 3P Promise
                </h2>
                <p className="text-lg text-white">
                Healthcare Risk Advisors is constantly striving to reduce medical malpractice lawsuits through our 3P system. </p>
                <p className="text-md text-white">Prevent</p>
                <ul className="list-disc">
                    <li className="text-sm text-white">Risk Management Tools and Education</li>
                    <li className="text-sm text-white">Innovative Safety Initiatives</li>
                </ul>
                <p className="text-lg text-white">Preclude</p>
                <ul className="list-disc">
                <li className="text-sm text-white">Provider and Staff Education
                </li>
                <li className="text-sm text-white">Family Engagement and Communication
                </li>
                <li className="text-sm text-white">Coaching and Simulation
                </li>

                </ul>
                <p className="text-lg text-white">Prevail</p>
                <ul className="list-disc">
                <li className="text-sm text-white">EHR: Patient Documentation Improvements
                </li>
                <li className="text-sm text-white">Provide Best Possible Defense in Event of Lawsuit
                </li>
                <li className="text-sm text-white">Leverage 30+ Years of Litigation Experience Defending Providers
                </li>
                </ul>
                


              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  