import React from 'react'
import Navbar from './Navbar'
import { Combobox } from '@headlessui/react'
import { useState } from 'react'
import { CheckIcon, ChevronUpDownIcon, StarIcon } from '@heroicons/react/20/solid'
import IndicationImg from '../assets/Get in touch-pana.svg'
import { useEffect } from 'react'
import Footer from './Footer'
import FAQ from './FAQ'


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
    function handleZipChange(e){
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
    useEffect(() => {
     console.log(firstName,lastName,email,phoneNumber,zip,state,selectedCounty,selectedSpecialty,HICInsured)
    }, [firstName,lastName,email,phoneNumber,zip,state,selectedCounty,selectedSpecialty,HICInsured])
    
  return (
    <div class = 'page' className='pt-[103px] flex flex-col items-center '>
        <Navbar/>
        <div class='header' className='xl:mx-32 py-5 text-center w-full min-w-[250px] max-w-[400px] xl:max-w-[800px]'>
            <h1 className = 'my-2 text-2xl text-slate-500 font-bold md:text-3xl'>
            Request an Indication
            </h1>
            <p className='lg:text-xl font-light text-slate-600'>
            Thank you for your interest in professional liability solutions. Fill out the information below to request a formal indication.
            </p>
        </div>
        <div class = 'content' className='xl:px-32 w-full flex items-center xl:items-center lg:flex-row flex-col-reverse justify-center mb-40 '>
       
        <div class='form' className='  rounded-md  p-5 w-full min-w-[250px] md:max-w-[400px] flex-col justify-center h-full '>
            <div class='form-sections' className='  flex w-fit h-fit'>
            <div class="form-section  " className=' rounded-tl-sm flex bg-gray-200 p-3 flex-col'>
                <div class="form-field" >
                    <h1 className='block text-sm font-light mb-2 text-slate-700'>
                        First Name
                    </h1>
                <input type="text" name="firstname" id="" onChange = {(e)=>{handleFirstNameChange(e)}} className='w-full border-none text-sm'/>
                </div>

                <div class="form-field" className=''>
                <h1 className='block text-sm font-light mt-4 mb-2 text-slate-700'>
                        Email
                    </h1>
                <input type="text" name="email" id="" className='w-full border-none text-sm'  />
                </div>
               
              <div class="form-field" className=''>
              <h1 className='block text-sm font-light mt-4 mb-2 text-slate-700'>
                        Zip Code
                    </h1>
              <input type="text" name="zip" id="" className='w-full border-none text-sm'/>
              </div>
       
                <Combobox as="div" value={selectedCounty} onChange={(e)=>handleCountyChange(e)} className='mt-4'>
                    <Combobox.Label className="block text-sm font-light text-gray-700">County</Combobox.Label>
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
                                  active ? 'bg-slate-400 ' : 'text-gray-900'
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
            <div class="form-section " className='rounded-tr-sm flex bg-gray-200  p-3 flex-col'>
                <div class="form-field" >
                    <h1 className='block text-sm font-light mb-2 text-slate-700'>
                        Last Name
                    </h1>
                <input type="text" name="firstname" id="" className='w-full border-none text-sm'/>
                </div>

                <div class="form-field" className=''>
                <h1 className='block text-sm font-light mt-4 mb-2 text-slate-700'>
                        Phone Number
                    </h1>
                <input type="text" name="email" id="" className='w-full border-none text-sm'  />
                </div>
               
              <div class="form-field" className=''>
              <h1 className='block text-sm font-light mt-4 mb-2 text-slate-700'>
                        State/Region
                    </h1>
              <input type="text" name="zip" id="" className='w-full border-none text-sm'/>
              </div>
       
                <Combobox as="div" value={selectedSpecialty} onChange={(e)=>handleSpecialtyChange(e)} className='mt-4'>
                    <Combobox.Label className="block text-sm font-light text-gray-700">Specialty</Combobox.Label>
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
                                  active ? 'bg-slate-400 ' : 'text-gray-900'
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
            <p className='font-light text-sm'>Are you currently insured by HIC?</p>
            <div class="radio-buttons" className='w-full  flex flex-col  justify-evenly' >
                <div class='radio-button'>
                <label className='font-light text-sm' for="yes">Yes</label>
            <input className='ml-2' type="radio" name='hic' id='yes' value='yes'/>
                </div>
                <div class='radio-button'>
                <label className='font-light text-sm' for="no">No</label>
            <input className='ml-2' type="radio" id='no' name='hic' value='no'/>
                </div>
        

            </div>
           
            <button className='bg-slate-600 text-white p-2 mt-2 rounded-md hover:bg-transparent hover:text-red-600 border-[1px] hover:border-red-600'>Submit</button>
           </div>
           
           

        </div>
        <img src={IndicationImg} alt="" className='p-5  max-w-[400px]' />
            
        
        </div>
   
        <Footer/>
        </div>
  )
}

export default Indication