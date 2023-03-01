import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/default';
import ForHospitals from './ForHospitals';
import ForPhysicians from './ForPhysicians'
function MySplide() {
  return (
    <div className='mx-32'>
       <Splide className=''  aria-label="My Favorite Images">
    <SplideSlide className='' >
    <ForHospitals/>
    </SplideSlide>
    <SplideSlide>
    <ForPhysicians/>
    </SplideSlide>
  </Splide>
    </div>
   
  )
}

export default MySplide