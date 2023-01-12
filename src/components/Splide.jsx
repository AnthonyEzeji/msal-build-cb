import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import ForHospitals from './ForHospitals';
import ForPhysicians from './ForPhysicians'
function MySplide() {
  return (
    <Splide aria-label="My Favorite Images">
    <SplideSlide>
    <ForHospitals/>
    </SplideSlide>
    <SplideSlide>
    <ForPhysicians/>
    </SplideSlide>
  </Splide>
  )
}

export default MySplide