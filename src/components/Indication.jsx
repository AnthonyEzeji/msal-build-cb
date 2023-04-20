import React from 'react'
import Navbar from './Navbar'
import { Combobox } from '@headlessui/react'
import { useState } from 'react'
import { CheckIcon, ChevronUpDownIcon, StarIcon } from '@heroicons/react/20/solid'
import IndicationImg from '../assets/Get in touch-pana.svg'
import { useEffect } from 'react'
import Footer from './Footer'
import FAQ from './FAQ'
import axios from 'axios'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function Indication() {
    const countyOptions = [{id:'manhattan'}]
    const specialtyOptions = [{id:'Allergy'},{id:'Anesthesiology'}]
    const [selectedCounty, setSelectedCounty] = useState(countyOptions[0])
    const [selectedSpecialty, setSelectedSpecialty] = useState(specialtyOptions[0])
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [state, setState] = useState(null)
    const [zip, setZip] = useState(null)
    const [HICInsured, setHICInsured] = useState(false)
    function handleCountyChange(e){
        console.log(e.target.value)
    }
    function handleSpecialtyChange(e){
        console.log(e.target.value)
    }
    function handleFirstNameChange(e){
        console.log(e.target.value)
    }
    function handleLastNameChange(e){
        console.log(e.target.value)
    }
    function handleStateChange(e){
        console.log(e.target.value)
    }
    function handleEmailChange(e){
        console.log(e.target.value)
    }
    function handlePhoneNumberChange(e){
        console.log(e.target.value)
    }
    function handleZipChange(e){
        console.log(e.target.value)
    }
    function handleHICInsuredChange(e){
        console.log(e.target.value)
    }
    async function handleSubmit(){
    var headers ={'Accept':"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",'Content-Type':'multipart/form-data; boundary=----WebKitFormBoundary7tihYgKpMdBnFS3n',"Host":'forms.hsforms', "Origin":'https://www.healthcareriskadvisors.com'}
      await axios.post('https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/9337935/3d40667b-b9e9-41af-bc4b-3fc7eb404332' ,{firstname:firstName, lastname:lastName, email, phone:phoneNumber, zip, state, county:'Bronx',specialty:"Gynecology", are_you_currently_insured_by_hic:HICInsured}, {headers}).then(res=>{
        console.log(res.data)
      })
    }

    
  return (
    <div class = 'page' className='pt-[103px] flex flex-col items-center '>
        <Navbar/>
        <div class='header' className='xl:mx-32 py-5 text-center w-full min-w-[250px] max-w-[400px] xl:max-w-[1000px]'>
            <h1 className = 'my-2 text-2xl text-red-500 font-bold md:text-3xl'>
            Request an Indication
            </h1>
            <p className='lg:text-2xl font-light drop-shadow-lg text-slate-600'>
            Thank you for your interest in professional liability solutions. Fill out the information below to request a formal indication.
            </p>
        </div>
        <div class = 'content' className='xl:px-32 w-full flex items-center xl:items-center   flex-col justify-center mb-40 relative '>
          <div class = 'vap-apc' className='xl:flex flex-col h-fit w-fit hidden p-1 rounded-md bg-gray-300 2xl:absolute right-20 top-8'>
            <a href="/solutions/ny-physicians/indication/voluntary-attending-physicians" className='p-3 bg-red-600 text-white hover:text-slate-600 hover:border-slate-600 hover:bg-transparent rounded-md border-[1px] text-center font-semibold text-lg mb-1'>Voluntary Attending Physicians</a>
            <a href="/solutions/ny-physicians/indication/advanced-practice-clinicians" className='p-3 bg-red-600 text-white hover:text-slate-600 hover:border-slate-600 hover:bg-transparent rounded-md border-[1px] text-center font-semibold text-lg'>Advanced Practice Clinicians</a>
          </div>
       
        <div class='form' className='  rounded-md  p-5 w-full min-w-[250px] md:max-w-[1000px] flex-col justify-center h-full '>
         
            <div class='form-sections' className='  flex w-full h-fit '>
            <div class="form-section  " className=' rounded-tl-sm w-full flex bg-gray-200 p-3 flex-col'>
                <div class="form-field" >
                    <h1 className='block text-sm font-medium mb-2 text-slate-700'>
                        First Name
                    </h1>
                <input type="text" name="firstname" id="" onChange = {(e)=>{handleFirstNameChange(e)}} className='w-full border-none text-sm'/>
                </div>

                <div class="form-field" className=''>
                <h1 className='block text-sm font-medium mt-4 mb-2 text-slate-700'>
                        Email
                    </h1>
                <input type="text" name="email" id="" onChange={(e)=>handleEmailChange(e)} className='w-full border-none text-sm'  />
                </div>
               
              <div class="form-field" className=''>
              <h1 className='block text-sm font-medium mt-4 mb-2 text-slate-700'>
                        Zip Code
                    </h1>
              <input type="text"  onChange = {(e)=>{handleZipChange(e)}} name="zip" id="" className='w-full border-none text-sm'/>
              </div>
       
                <Combobox as="div" value={selectedCounty} onChange={(e)=>handleCountyChange(e)} className='mt-4'>
                    <Combobox.Label className="block text-sm font-medium text-gray-700">County</Combobox.Label>
                    <div className="relative mt-1">
                      <Combobox.Input
                        className="w-full  border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
                        onChange={''}
                        displayValue={selectedCounty}
                      />
                      <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </Combobox.Button>

                      {(
                        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {countyOptions.map((county) => (
                            <Combobox.Option
                              key={county.id}
                              value={county.id}
                              className={({ active }) =>
                                classNames(
                                  'relative cursor-default select-none py-2 pl-3 pr-9',
                                  active ? 'bg-red-400 ' : 'text-gray-900'
                                )
                              }
                            >
                              {({ active, selected }) => (
                                <>
                                  <span className={classNames('block truncate flex items-center', selected && 'font-semibold')}><p>{<p className=' mr-6'></p>}</p><p>{county.id}</p></span>

                                  {selected && (
                                    <span
                                      className={classNames(
                                        'absolute inset-y-0 right-0 flex items-center pr-4',
                                        active ? 'text-white' : 'text-red-600'
                                      )}
                                    >
                                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                  )}
                                </>
                              )}
                            </Combobox.Option>
                          ))}
                        </Combobox.Options>
                      )}
                    </div>
                  </Combobox>
                
            </div>
            <div class="form-section " className='rounded-tr-sm w-full flex bg-gray-200  p-3 flex-col'>
                <div class="form-field" >
                    <h1 className='block text-sm font-medium mb-2 text-slate-700'>
                        Last Name
                    </h1>
                <input  onChange = {(e)=>{handleLastNameChange(e)}} type="text" name="firstname" id="" className='w-full border-none text-sm'/>
                </div>

                <div class="form-field" className=''>
                <h1 className='block text-sm font-medium mt-4 mb-2 text-slate-700'>
                        Phone Number
                    </h1>
                <input  onChange = {(e)=>{handlePhoneNumberChange(e)}} type="text" name="email" id="" className='w-full border-none text-sm'  />
                </div>
               
              <div class="form-field" className=''>
              <h1 className='block text-sm font-medium mt-4 mb-2 text-slate-700'>
                        State/Region
                    </h1>
              <input  onChange = {(e)=>{handleStateChange(e)}} type="text" name="zip" id="" className='w-full border-none text-sm'/>
              </div>
       
                <Combobox as="div" value={selectedSpecialty} onChange={(e)=>handleSpecialtyChange(e)} className='mt-4'>
                    <Combobox.Label className="block text-sm font-medium text-gray-700">Specialty</Combobox.Label>
                    <div className="relative mt-1">
                      <Combobox.Input
                        className="w-full  border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
                        onChange={''}
                        displayValue={selectedCounty}
                      />
                      <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </Combobox.Button>

                      {(
                        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {specialtyOptions.map((specialty) => (
                            <Combobox.Option
                              key={specialty.id}
                              value={specialty.id}
                              className={({ active }) =>
                                classNames(
                                  'relative cursor-default select-none py-2 pl-3 pr-9',
                                  active ? 'bg-red-400 ' : 'text-gray-900'
                                )
                              }
                            >
                              {({ active, selected }) => (
                                <>
                                  <span className={classNames('block truncate flex items-center', selected && 'font-semibold')}><p>{<p className=' mr-6'></p>}</p><p>{specialty.id}</p></span>

                                  {selected && (
                                    <span
                                      className={classNames(
                                        'absolute inset-y-0 right-0 flex items-center pr-4',
                                        active ? 'text-white' : 'text-red-600'
                                      )}
                                    >
                                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                  )}
                                </>
                              )}
                            </Combobox.Option>
                          ))}
                        </Combobox.Options>
                      )}
                    </div>
                  </Combobox>
            </div>
            
            </div>
           <div class="form-submit" className='rounded-b-sm p-3 flex flex-col h-[150px] justify-evenly bg-gray-200'>
            <p className='font-medium text-sm'>Are you currently insured by HIC?</p>
            <div class="radio-buttons" className='w-full  flex flex-col  justify-evenly' >
                <div class='radio-button'>
                <label className='font-medium text-sm' for="yes">Yes</label>
            <input  onChange = {(e)=>{handleHICInsuredChange(e)}} className='ml-2' type="radio" name='hic' id='yes' value='yes'/>
                </div>
                <div class='radio-button'>
                <label className='font-medium text-sm' for="no">No</label>
            <input onChange = {(e)=>{handleHICInsuredChange(e)}} className='ml-2' type="radio" id='no' name='hic' value='no'/>
                </div>
        

            </div>
           
            <button onClick={()=>handleSubmit()} className='bg-red-600 text-white p-2 mt-2 rounded-md hover:bg-transparent hover:text-red-600 border-[1px] hover:border-red-600'>Submit</button>
           </div>
           
           

        </div>
       
            
        
        </div>
   
        <Footer/>
        </div>
  )
}

export default Indication