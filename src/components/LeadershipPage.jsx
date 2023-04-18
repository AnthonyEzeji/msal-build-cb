import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import rkauffman_img from '../assets/leadership_images/rkauffman.jpg'
import ndoelger_img from '../assets/leadership_images/ndoelger.jpg';
import dfeldman_img from '../assets/leadership_images/dfeldman.jpg';
import freddanback_img from '../assets/leadership_images/fred-danback.jpg';
import pkolbert_img from '../assets/leadership_images/pkolbert.jpg';
import richcaldwell_img from '../assets/leadership_images/richcaldwell.jpg';
import bdalton_img from '../assets/leadership_images/bdalton.jpg';
import vgrenon_img from '../assets/leadership_images/vgrenon.jpg';
import rosshess_img from '../assets/leadership_images/rosshess.jpg';
import melissajohnson_img from '../assets/leadership_images/melissajohnson.jpg';
import marclanzkowsky_img from '../assets/leadership_images/marclanzkowsky.jpg';
import michaelletang_img from '../assets/leadership_images/michaelletangv6.jpg';
import stevemac_img from '../assets/leadership_images/stevemacv2.jpg';
import duaneperricelli_img from '../assets/leadership_images/duaneperricelli.jpg';
import richstorey_img from '../assets/leadership_images/richstoreyv3.jpg';

const leaders_first_row = [
  {
    img: rkauffman_img,
    name: 'Robert A. Kauffman',
    role: 'President',
    details_url: '/about/leadership/robert-kauffman/'
  },

  {
    img: ndoelger_img,
    name: 'Noeleen Doelger',
    role: 'COO and CFO',
    details_url: '/about/leadership/noeleen-doelger/'
  },

  {
    img: dfeldman_img,
    name: 'David L. Feldman',
    role: 'SVP and CMO',
    details_url: '/about/leadership/david-lfeldman/'
  },

]

const leaders_rest = [
  {
    img: freddanback_img,
    name: 'Fred Danback',
    role: 'SVP and CIO',
    details_url: '/about/leadership/fred-danback/'
  },

  {
    img: pkolbert_img,
    name: 'Peter A. Kolbert',
    role: 'SVP, Claims and Litigation Management',
    details_url: '/about/leadership/peter-akolbert/'
  },


  {
    img: richcaldwell_img,
    name: 'Rich Caldwell',
    role: 'VP, Finance & Underwriting',
    details_url: '/about/leadership/rich-caldwell/'
  },

  {
    img: bdalton_img,
    name: 'Brian Dalton',
    role: 'VP, Business Development',
    details_url: '/about/leadership/brian-dalton/'
  },

  {
    img: vgrenon_img,
    name: 'Veronique Grenon',
    role: 'VP Data Analytics',
    details_url: '/about/leadership/veronique-grenon/'
  },

  {
    img: rosshess_img,
    name: 'Ross Hess',
    role: 'VP, Underwriting and Physician Service',
    details_url: '/about/leadership/ross-hess/'
  },

  {
    img: melissajohnson_img,
    name: 'Melissa Johnson',
    role: 'VP, Finance and Controller',
    details_url: '/about/leadership/melissa-johnson/'
  },

  {
    img: marclanzkowsky_img,
    name: 'Marc Lanzkowsky',
    role: 'VP, Claims Operations',
    details_url: '/about/leadership/marc-lanzkowsky/'
  },

  {
    img: michaelletang_img,
    name: 'Michael LeTang',
    role: 'VP, Chief Nursing Informatics Officer',
    details_url: '/about/leadership/michael-letang/'
  },

  {
    img: stevemac_img,
    name: 'Steve Macaluso',
    role: 'VP, Client Management',
    details_url: '/about/leadership/steve-macaluso/'
  },
  
  {
    img: duaneperricelli_img,
    name: 'Duane Perricelli',
    role: 'Vice President, Insurance Services',
    details_url: '/about/leadership/duane-perricelli/'
  },

  {
    img: richstorey_img,
    name: 'Rich Storey',
    role: 'VP, Claim and Administration',
    details_url: '/about/leadership/rich-storey/'
  },
]

function LeadershipPage() {
  
  return (

    <div className='pt-[90px]'>
        <Navbar/>
        <div class="w-full bg-white">
        <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div class="text-center pb-12">
            
                  <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-700">
                      Leadership           
                  </h1>
            </div>
            <div class="py-10 px-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          leaders_first_row.map((leader, index) => {
            return(
              <a href={leader.details_url}>
                  <div class="w-full overflow-hidden shadow-md duration-200 hover:scale-105 hover:shadow-xl rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                    
                    <img class="px-4 py-4 object-cover object-center h-full w-full" src={leader.img} alt="photo"/>
                      
                      <div class="mt-4 text-center">
                          <p class="text-lg text-gray-600 font-bold mb-2">{leader.name}</p>
                          <p class="text-base text-gray-400 font-normal">{leader.role}</p>
                      </div>
                      
                  </div>
                  </a>
                  
            )
        })}
        </div>


        <div class="px-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {
          leaders_rest.map((leader, index) => {
            return(
              <a href={leader.details_url}>
                  <div class="w-full h-full overflow-hidden shadow-md duration-200 hover:scale-105 hover:shadow-xl rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                    
                    <img class="px-4 py-4 object-cover object-center width:150px" src={leader.img} alt="photo"/>
                      
                      <div class="mt-4 text-center">
                          <p class="text-lg text-gray-600 font-bold mb-2">{leader.name}</p>
                          <p class="text-base text-gray-400 font-normal">{leader.role}</p>
                      </div>
                    
                  </div>
                  </a>
                  
            )
        })}
        </div>
        </section>
      </div>
    <Footer/>
  </div>
  )
}

export default LeadershipPage