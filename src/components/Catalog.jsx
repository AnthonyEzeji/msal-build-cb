import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react'
import { useState } from 'react';
import test from '../assets/test image.jpg'
import img2 from '../assets/7-things-to-do (1).jpg'
import img3 from '../assets/YoungPeopleBusinessMeeting_1200x627 (1).jpg'
import img1 from '../assets/types-of-business-meetings-scaled (1).jpg'
import img4 from '../assets/advantages-and-disadvantages-of-online-learning (1).jpg'
import img5 from '../assets/istockphoto-541114144-612x612 (1).jpg'
import img6 from '../assets/1669-blog-header-webinar-marketing (1).png'
import img7 from '../assets/150610cnmcinnovationday015 (1).jpg'
import { useEffect } from 'react';
const catalogOptions = [{
  id:1,
  img:img1,
  caption:'Full Time MD Malpractice Profile Reviews',
  url:'',
  type:'Services'},
  {
    id:2,
    img:test,
    caption:'Innovative Solutions, AE Reporting & Analytics',
    url:'',
    type:'Services'},
    {
      id:3,
      img:img2,
      caption:'Addressing Disruptive Behavior',
      url:'',
      type:'Services'},
      {
        id:4,
        img:img3,
        caption:'Team Training & Simulation',
        url:'',
        type:'Services'},
        {
          id:5,
          img:img5,
          caption:'Proactive & Quality Process Improvement',
          url:'',
          type:'Services'},
          {
            id:6,
            img:img4,
            caption:'Comprehensive Onine Education',
            url:'',
            type:'Education'},
            {
              id:7,
              img:img6,
              caption:'Webinars & CME\'s',
              url:'',
              type:'Education'
            },
              
              {
                id:8,
                img:img7,
                caption:'Live Sessions & Grand Rounds',
                url:'',
                type:'Education'
              }
]

function Catalog() {
const [size, setSize] = useState(4)
function setPerPage(){
  var width =window.screen.width

  
  if(width>1500){
    setSize(4)
  }else if(width>1000&&width<1500) {
    setSize(3)
  }else if(width>800&&width<1000) {
    setSize(1)
  }
}
useEffect(() => {
  
  setPerPage()
}, [])


  window.addEventListener('resize', setPerPage);
  const [hovering, setHovering] = useState({hovering:false,item:null})
  return (
    <div className='py-20 2xl:py-20 mt-20  w-screen min-h-screen flex flex-col items-center justify-center bg-slate-100 '>
      <h1 className='py-5  px-20 w-full text-center text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl'>Browse Our Catalog of <span className='text-red-600'>Data Forward</span> Risk Reduction Strategies</h1>
  <Splide
    className='  xl:px-40   py-20 mx-32 flex items-center justify-center  w-[95vw] '
    options={{perPage:size,gap:'2rem'}}>
    
      {catalogOptions.map((option, i)=>{   return <SplideSlide key={i} className="p-2 ">
        <div id={option.id} onMouseOver={(e)=>setHovering({hovering:true,id:i})} onMouseOut={(e)=>setHovering({hovering:false,id:i})} className={` ${hovering.hovering===true&&hovering.id===i ?"shadow-xl ":'shadow-md'} flex-1 h-fit rounded-md `}>
        <div className="flex-shrink-0">
      <img className={`h-[400px] w-full rounded-t-md   `} src={option.img} alt="" />
    </div>
    <div className="flex flex-1 flex-col justify-between bg-white py-6 2xl:px-5 px-2 rounded-b-md  ">
      <div className="flex-1 min-h-[80px]">
      <p className='text-red-600 font-bold'>{option.type}</p>
        <p className="text-lg text-black  leading-0 font-semibold ">
         {option.caption}
        </p>

      </div>
    
    </div>
        </div>
    
  </SplideSlide>})}
       
    </Splide>
    </div>
  
  )
}

export default Catalog