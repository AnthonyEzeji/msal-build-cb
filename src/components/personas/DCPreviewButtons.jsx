import React from 'react'

function PreviewButtons() {
  return (
    <div className='w-screen flex justify-center h-[75vh]'>
         <div className=' w-fit  flex flex-col  '>
        <h1 className='text-4xl font-bold text-center lg:text-left py-20'>Department Chair</h1>
        <div className='flex flex-col lg:flex-row items-center lg:items-start'>
            <img className='max-w-[450px] rounded-md' src="https://i.pinimg.com/564x/36/27/0e/36270e572f53f252651ab26edc4d0ab7--business-meeting-photography-business.jpg" alt="" />
            <div className=' md:px-10 xl:px-20 flex flex-col items-start  w-full h-full'>
                <div className='flex flex-1 items-start mb-2 '>
                    <div>
                        <h1 className='text-2xl font-bold  min-w-[500px]'>
                        Frequent Flyers:
                        </h1>
                        <p className='text-gray-500 w-[400px]'>The strategy that leads to a new perforance frontier</p>
                    </div>

                    <button className='px-10 max-h-[50px] ml-5 text-white bg-red-600 rounded-md p-3'>Preview</button>
                </div>
                <div className='flex flex-1 items-start mb-2'>
                    <div>
                        <h1 className='text-2xl font-bold  min-w-[500px]'>
                        ICD-level malpractice insights:
                        </h1>
                        <p className='text-gray-500 w-[400px]'>Focusing the power of data, tech and people to accelerate reinvention—and a new vision for growth</p>
                    </div>

                    <button className='px-10 max-h-[50px] ml-5 text-white bg-red-600 rounded-md p-3'>Preview</button>
                </div>
                <div className='flex flex-1 items-start mb-2'>
                    <div>
                        <h1 className='text-2xl font-bold min-w-[500px]'>
                        Med Mal Contributing Factors:
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