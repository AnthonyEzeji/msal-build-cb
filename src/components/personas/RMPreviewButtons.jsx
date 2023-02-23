import React from 'react'
import { Link } from 'react-router-dom'

function PreviewButtons() {
  return (
    <div className='w-screen flex justify-center flex-col items-center justify-center  min-h-screen mb-10 md:mb-0'>
         <div className='w-[90vw] 2xl:w-[70vw]  flex flex-col  '>
        <h1 className=' text-2xl md:text-3xl 2xl:text-4xl  font-bold text-center lg:text-left py-10 w-full'>Get the Insights to stay ahead of change</h1>
        <div className='flex flex-col lg:flex-row items-center lg:items-start h-full w-full'>
            <img className='w-full md:w-[450px] 2xl:w-[450px] xl:max-w-[450px] md:rounded-md' src="https://as1.ftcdn.net/v2/jpg/03/38/49/28/1000_F_338492830_gOno5hqTomxyaP4RZd9ugMzlt1cZ8Qte.jpg" alt="" />
            <div className='  flex flex-col items-start  w-full h-full  '>
                <div className='flex flex-1 justify-center items-start mb-2 w-full md:w-fit flex-col md:flex-row md:px-5 py-3    '>
                    <div>
                        <h1 className='text-2xl font-bold w-fit md:max-w-[400px] '>
                        Hospital Med Mal Overview
                        </h1>
                        <p className='text-gray-500 md:w-[400px] '>The strategy that leads to a new perforance frontier</p>
                    </div>

                    <Link to ='/risk-manager/med-mal' className='px-10 max-h-[50px] md:ml-5 text-white w-full md:w-fit bg-red-600 rounded-md p-3'>Preview</Link>
                </div>
                <div className='flex flex-1 justify-center items-start mb-2 w-full md:w-fit flex-col md:flex-row md:px-5 py-3   '>
                    <div>
                        <h1 className='text-2xl font-bold w-fit md:max-w-[400px]'>
                        Frequency / Severity Trends
                        </h1>
                        <p className='text-gray-500 md:w-[400px] '>Focusing the power of data, tech and people to accelerate reinvention—and a new vision for growth</p>
                    </div>

                    <Link to='/risk-manager/freq-sev-trends' className='px-10 max-h-[50px] md:ml-5 text-white w-full md:w-fit bg-red-600 rounded-md p-3'>Preview</Link>
                </div>
                <div className='flex flex-1 justify-center items-start mb-2 w-full md:w-fit flex-col md:flex-row md:px-5 py-3  '>
                    <div >
                        <h1 className='text-2xl font-bold w-fit md:max-w-[400px]   '>
                        National benchmarking
                        </h1>
                        <p className='text-gray-500 md:w-[400px]  '>Gradually, then suddenly: The metaverse is changing the way we experience the internet</p>
                    </div>

                    <Link to='/risk-manager/national-benchmark'  className='px-10 max-h-[50px] md:ml-5 text-white w-full md:w-fit bg-red-600 rounded-md p-3'>Preview</Link>
                </div>
              
            </div>
        </div>
    </div>
    </div>
   
  )
}

export default PreviewButtons