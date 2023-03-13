import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/default';
import ForHospitals from './ForHospitals';
import ForPhysicians from './ForPhysicians'
function MySplide() {
  return (
    <div className='xl:px-32 mt-20 bg-slate-100  '>
      <div className=''>
      <Splide className=''  aria-label="My Favorite Images">
    <SplideSlide className='' >
    <ForHospitals/>
    </SplideSlide>
    <SplideSlide>
    <ForPhysicians/>
    </SplideSlide>
  </Splide>
      </div>
      
    </div>
   
  )
}

export default MySplide