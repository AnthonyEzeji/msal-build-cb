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
        <div class="px-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href='/about/leadership/robert-kauffman/'>
            <div class="w-full overflow-hidden shadow-md duration-200 hover:scale-105 hover:shadow-xl rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
              
              <img class="px-4 py-4 object-cover object-center h-full w-full" src={rkauffman_img} alt="photo"/>
                
                <div class="mt-4 text-center">
                    <p class="text-lg text-gray-600 font-bold mb-2">Robert A. Kauffman</p>
                    <p class="text-base text-gray-400 font-normal">President</p>
                </div>
                
            </div>
            </a>

            <a href='/about/leadership/noeleen-doelger/'>
            <div class="w-full overflow-hidden shadow-md duration-200 hover:scale-105 hover:shadow-xl rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
              
              <img class="px-4 py-4 object-cover object-center h-full w-full" src={ndoelger_img} alt="photo"/>
                
                <div class="mt-4 text-center">
                    <p class="text-lg text-gray-600 font-bold mb-2">Noeleen Doelger</p>
                    <p class="text-base text-gray-400 font-normal">COO and CFO</p>
                </div>
                
            </div>
            </a>

            <a href='/about/leadership/david-lfeldman/'>
            <div class="w-full overflow-hidden shadow-md duration-200 hover:scale-105 hover:shadow-xl rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
              
              <img class=" px-4 py-4 object-cover object-center h-full w-full" src={dfeldman_img} alt="photo"/>
                
                <div class="mt-4 text-center">
                    <p class="text-lg text-gray-600 font-bold mb-2">David L. Feldman</p>
                    <p class="text-base text-gray-400 font-normal">SVP and CMO</p>
                </div>
                
            </div>
            </a>

        </div>
        

        <div class="mt-10 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6">
        <a href='/about/leadership/fred-danback/'>
            <div class="w-full h-full overflow-hidden shadow-md duration-200 hover:scale-105 hover:shadow-xl rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
              
              <img class="px-4 py-4 object-cover object-center h-full w-full" src={freddanback_img} alt="photo"/>
                
                <div class="mt-4 text-center">
                    <p class="text-lg text-gray-600 font-bold mb-2">Fred Danback</p>
                    <p class="text-base text-gray-400 font-normal">SVP and CIO</p>
                </div>
                
            </div>
            </a>

            <a href='/about/leadership/peter-akolbert/'>
            <div class="w-full h-full overflow-hidden shadow-md duration-200 hover:scale-105 hover:shadow-xl rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
              
              <img class="px-4 py-4 object-cover object-center h-full w-full" src={pkolbert_img} alt="photo"/>
                
                <div class="mt-2 text-center">
                    <p class="text-lg text-gray-600 font-bold">Peter A. Kolbert</p>
                    <p class="text-base text-gray-400 font-normal">SVP, Claims and Litigation Management</p>
                </div>
                
            </div>
            </a>

            <a href='/about/leadership/rich-caldwell/'>
            <div class="w-full h-full overflow-hidden shadow-md duration-200 hover:scale-105 hover:shadow-xl rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
              
              <img class="px-4 py-4 object-cover object-center h-full w-full" src={richcaldwell_img} alt="photo"/>
                
                <div class="mt-2 text-center">
                    <p class="text-lg text-gray-600 font-bold ">Rich Caldwell</p>
                    <p class="text-base text-gray-400 font-normal">VP, Finance & Underwriting</p>
                </div>
                
            </div>
            </a>


            <a href='/about/leadership/brian-dalton/'>
            <div class="w-full h-full overflow-hidden shadow-md duration-200 hover:scale-105 hover:shadow-xl rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
              
              <img class="px-4 py-4 object-cover object-center h-full w-full" src={bdalton_img} alt="photo"/>
                
                <div class="mt-2 text-center">
                    <p class="text-lg text-gray-600 font-bold ">Brian Dalton</p>
                    <p class="text-base text-gray-400 font-normal">VP, Business Development</p>
                </div>
                
            </div>
            </a>

            <a href='/about/leadership/veronique-grenon/'>
            <div class="w-full h-full overflow-hidden shadow-md duration-200 hover:scale-105 hover:shadow-xl rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
              
              <img class="px-4 py-4 object-cover object-center h-full w-full" src={vgrenon_img} alt="photo"/>
                
                <div class="mt-4 text-center">
                    <p class="text-lg text-gray-600 font-bold mb-2">Veronique Grenon</p>
                    <p class="text-base text-gray-400 font-normal">VP Data Analytics</p>
                </div>
                
            </div>
            </a>

            <a href='/about/leadership/ross-hess/'>
            <div class="w-full h-full overflow-hidden shadow-md duration-200 hover:scale-105 hover:shadow-xl rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
              
              <img class="px-4 py-4 object-cover object-center h-full w-full" src={rosshess_img} alt="photo"/>
                
                <div class="mt-2 text-center">
                    <p class="text-lg text-gray-600 font-bold">Ross Hess</p>
                    <p class="text-base text-gray-400 font-normal">VP, Underwriting and Physician Service</p>
                </div>
                
            </div>
            </a>


            <a href='/about/leadership/melissa-johnson/'>
            <div class="w-full h-full overflow-hidden shadow-md duration-200 hover:scale-105 hover:shadow-xl rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
              
              <img class="px-4 py-4 object-cover object-center h-full w-full" src={melissajohnson_img} alt="photo"/>
                
                <div class="mt-2 text-center">
                    <p class="text-lg text-gray-600 font-bold ">Melissa Johnson</p>
                    <p class="text-base text-gray-400 font-normal">VP, Finance and Controller</p>
                </div>
                
            </div>
            </a>

            <a href='/about/leadership/marc-lanzkowsky/'>
            <div class="w-full h-full overflow-hidden shadow-md duration-200 hover:scale-105 hover:shadow-xl rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
              
              <img class="px-4 py-4 object-cover object-center h-full w-full" src={marclanzkowsky_img} alt="photo"/>
                
                <div class="mt-4 text-center">
                    <p class="text-lg text-gray-600 font-bold mb-2">Marc Lanzkowsky</p>
                    <p class="text-base text-gray-400 font-normal">VP, Claims Operations</p>
                </div>
                
            </div>
            </a>

            <a href='/about/leadership/michael-letang/'>
            <div class="w-full h-full overflow-hidden shadow-md duration-200 hover:scale-105 hover:shadow-xl rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
              
              <img class="px-4 py-4 object-cover object-center h-full w-full" src={michaelletang_img} alt="photo"/>
                
                <div class="mt-2 text-center">
                    <p class="text-lg text-gray-600 font-bold ">Michael LeTang</p>
                    <p class="text-base text-gray-400 font-normal">VP, Chief Nursing Informatics Officer</p>
                </div>
                
            </div>
            </a>

            <a href='/about/leadership/steve-macaluso/'>
            <div class="w-full h-full overflow-hidden shadow-md duration-200 hover:scale-105 hover:shadow-xl rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
              
              <img class="px-4 py-4 object-cover object-center h-full w-full" src={stevemac_img} alt="photo"/>
                
                <div class="mt-4 text-center">
                    <p class="text-lg text-gray-600 font-bold mb-2">Steve Macaluso</p>
                    <p class="text-base text-gray-400 font-normal">VP, Client Management</p>
                </div>
                
            </div>
            </a>

            <a href='/about/leadership/duane-perricelli/'>
            <div class="w-full h-full overflow-hidden shadow-md duration-200 hover:scale-105 hover:shadow-xl rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
              
              <img class="px-4 py-4 object-cover object-center h-full w-full" src={duaneperricelli_img} alt="photo"/>
                
                <div class="mt-2 text-center">
                    <p class="text-lg text-gray-600 font-bold ">Duane Perricelli</p>
                    <p class="text-base text-gray-400 font-normal">Vice President, Insurance Services</p>
                </div>
                
            </div>
            </a>

            <a href='/about/leadership/rich-storey/'>
            <div class="w-full h-full overflow-hidden shadow-md duration-200 hover:scale-105 hover:shadow-xl rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
              
              <img class="px-4 py-4 object-cover object-center h-full w-full" src={richstorey_img} alt="photo"/>
                
                <div class="mt-2 text-center">
                    <p class="text-lg text-gray-600 font-bold ">Rich Storey</p>
                    <p class="text-base text-gray-400 font-normal">VP, Claim and Administration</p>
                </div>
                
            </div>
            </a>

           

        </div>
    </section>
</div>
    <Footer/>
    </div>
  )
}

export default LeadershipPage