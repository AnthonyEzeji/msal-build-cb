import React from 'react'

function PreviewButtons() {
  return (
    <div className='w-screen flex justify-center h-[75vh]'>
         <div className=' w-fit  flex flex-col  '>
        <h1 className='text-4xl font-bold text-center lg:text-left py-20'>Get the Insights to stay ahead of change</h1>
        <div className='flex flex-col lg:flex-row items-center lg:items-start'>
            <img className='max-w-[450px] rounded-md' src="https://as1.ftcdn.net/v2/jpg/03/38/49/28/1000_F_338492830_gOno5hqTomxyaP4RZd9ugMzlt1cZ8Qte.jpg" alt="" />
            <div className=' md:px-10 xl:px-20 flex flex-col items-start  w-full h-full'>
                <div className='flex flex-1 items-start mb-2 '>
                    <div>
                        <h1 className='text-2xl font-bold  min-w-[500px]'>
                        Hospital Med Mal Overview
                        </h1>
                        <p className='text-gray-500 w-[400px]'>The strategy that leads to a new perforance frontier</p>
                    </div>

                    <button className='px-10 max-h-[50px] ml-5 text-white bg-red-600 rounded-md p-3'>Preview</button>
                </div>
                <div className='flex flex-1 items-start mb-2'>
                    <div>
                        <h1 className='text-2xl font-bold  min-w-[500px]'>
                        Frequency / Severity Trends
                        </h1>
                        <p className='text-gray-500 w-[400px]'>Focusing the power of data, tech and people to accelerate reinvention—and a new vision for growth</p>
                    </div>

                    <button className='px-10 max-h-[50px] ml-5 text-white bg-red-600 rounded-md p-3'>Preview</button>
                </div>
                <div className='flex flex-1 items-start mb-2'>
                    <div>
                        <h1 className='text-2xl font-bold min-w-[500px]'>
                        National benchmarking
                        </h1>
                        <p className='text-gray-500 w-[400px]'>Gradually, then suddenly: The metaverse is changing the way we experience the internet</p>
                    </div>

                    <button className='px-10 max-h-[50px] ml-5 text-white bg-red-600 rounded-md p-3'>Preview</button>
                </div>
              
            </div>
        </div>
    </div>
    </div>
   
  )
}

export default PreviewButtons