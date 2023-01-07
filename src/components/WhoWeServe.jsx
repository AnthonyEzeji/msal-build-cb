import React from 'react'
import ForHospitalsCard from './ForHospitalsCard'
import ForPhysiciansCard from './ForPhysiciansCard'

function WhoWeServe() {
  return (
    <div className='w-full flex flex-col md:flex-row h-fit justify-evenly items-center py-20 bg-gray-300 mt-[660px] lg:mt-[190px] md:mt-[600px]'>
        <ForHospitalsCard/>
        <ForPhysiciansCard/>
    </div>
  )
}

export default WhoWeServe