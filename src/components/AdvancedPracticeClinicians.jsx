import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import axios from 'axios'
function AdvancePracticeClinicians() {

const [howDidYouHear, setHowDidYouHear] = useState(null)
const [title, setTitle] = useState(null)
const [specialty, setSpecialty] = useState(null)
const [county, setCounty] = useState(null)
const [firstName, setFirstName] = useState(null)
const [lastName, setLastName] = useState(null)
const [phoneNumber, setPhoneNumber] = useState(null)
const [email, setEmail] = useState(null)
const [practiceName, setPracticeName] = useState(null)
const [FTPT, setFTPT] = useState(null)
const [policyType, setPolicyType] = useState(null)

const [APCIndication, setAPCIndication] = useState(null)
    function handleHowDidYouHearChange(e){
        if(e?.target?.value?.length>0){
            setHowDidYouHear(e.target.value)
        }
        
    }function handleTitleChange(e){
        var index = e.nativeEvent?.target.selectedIndex
        var text = e.nativeEvent?.target[index].text
        if(e){
          
            setTitle({name:text, titleCode:e.target.value})
        }
        
    }
    function handleSpecialtyChange(e){
        var index = e.nativeEvent?.target.selectedIndex
        var text = e.nativeEvent?.target[index].text
    
        setSpecialty(text)
      
        
    }
    function handleCountyChange(e){
        
        var index = e.nativeEvent?.target.selectedIndex
        var text = e.nativeEvent?.target[index].text
        var territory = e?.target.value
        setCounty({name:text,territory})
       
    }
    function handleFirstNameChange(e){
        setFirstName(e.target.value)
    }
    function handleLastNameChange(e){
        setLastName(e.target.value)
    }
    function handlePhoneNumberChange(e){
        setPhoneNumber(e.target.value)
    }
    function handleEmailChange(e){
        setEmail(e.target.value)
    }
    function handlePracticeNameChange(e){
        setPracticeName(e.target.value)
    }
    async function handleSubmit(){
        var response = null
        try {
       
                await axios.get(`https://quoteservice.fojp.com/physicianextenderrates/GetPhysicianExtenderDataRates?hearAboutUs=${howDidYouHear}&title=${title?.name}&titleCode=${title?.titleCode}&specialty=${specialty}&territory=${county?.territory}&county=${county?.name}&firstName=${firstName}&lastName=${lastName}&phoneNumber=${phoneNumber}&email=${email}&practiceName=${practiceName}&hours=${FTPT}&callback=jQuery`)
            .then(res=>{
                response  = res.data
            })
            
            setAPCIndication(JSON.parse(response.substring(7,response.length-2)))
        } catch (error) {
            
        }
    }
    useEffect(() => {
      console.log(APCIndication)
    }, [APCIndication])
    
 
  return (
    <div class='page' className='pt-[103px] w-screen  flex flex-col items-center'>
        <Navbar/>
        {!APCIndication?<div class="container" className='min-h-screen mb-48 mx-8 md:mx-16 p-5 bg-gray-100 rounded-lg'>
            <div class='header' >
                <h1 className='text-lg md:text-2xl xl:text-3xl font-bold'>Advance Practice Clinicians</h1>
                <h3 className='text-md md:text-xl xl:text-2xl'>Generate a Quick Indication</h3>
                <p className='mt-1 mb-4 pb-1 border-b-[1px] border-red-600 text-lg'>Thank you for your interest in professional liability solutions.  Fill out the information below to generate a quick indication.</p>
                <p className='my-1 text-lg font-light drop-shadow-md'>By completing the information below we can show you just some of the savings available when you join our VAP Program.</p>
                <p className='my-1 text-lg font-light drop-shadow-md'>Note: A completed application with all required documentation must be submitted before a formal quotation can be provided.</p>
            </div>
            <div class='form' className=' my-10 '>
                <div class='form-fields' className='w-full '>
                    <h4 className= ' text-2xl my-2 '>About Your Practice</h4>
                    <div class='form-fields-section' className='flex flex-col md:flex-row justify-between md:my-2 w-full'>
                    <div class = 'field' className='md:w-[48%] w-full'>
                        <h1>
                            First Name
                        </h1>
                        <input onChange = {(e=>handleFirstNameChange(e))} type="text" name="" id="" className='w-full border-gray-200' />

                    </div>
                    <div class = 'field' className='md:w-[48%]'>
                        <h1>
                           Last Name
                        </h1>
                        <input onChange={(e)=>handleLastNameChange(e)} type="text" name="" id="" className='w-full border-gray-200'  />

                    </div>
                    </div>
                    <div class='form-fields-section' className='flex flex-col md:flex-row justify-between md:my-2'>
                    <div class = 'field' className='md:w-[48%]'>
                        <h1>
                            Phone
                        </h1>
                        <input onChange={(e)=>handlePhoneNumberChange(e)} type="text" name="" id="" className='w-full border-gray-200' />

                    </div>
                    <div class = 'field' className='md:w-[48%]'>
                        <h1>
                           Email
                        </h1>
                        <input onChange={(e)=>handleEmailChange(e)} type="text" name="" id="" className='w-full border-gray-200'  />

                    </div>
                    </div>
                    <div class='form-fields-section' className='flex flex-col md:flex-row justify-between md:my-2'>
                    <div class = 'field' className='w-full'>
                        <h1>
                            Practice Name
                        </h1>
                        <input onChange={(e)=>handlePracticeNameChange(e)} type="text" name="" id="" className='w-full border-gray-200' />

                    </div>
                    
                    </div>
                    <div class='form-fields-section' className='flex flex-col md:flex-row justify-between md:my-2'>
                    <div class = 'field' className='w-full'>
                        <h1>
                            How did you hear about Hospital Insurance Company?
                        </h1>
                        <select  onChange = {(e) => handleHowDidYouHearChange(e)} class="form-select" className="md:w-[48%] border-gray-200" name="hearAboutUs" id="hearAboutUs" required="" data-uw-rm-form="nfx">
                                            <option value="">-------</option>
                                            <option value="Colleague">Colleague</option>
                                            <option value="Mailing">Mailing</option>
                                            <option value="Internet">Internet</option>
                                            <option value="Other">Other</option>
                                        </select>

                    </div>
                    
                    </div>
                    <div class='form-fields-section' className='flex flex-col md:flex-row justify-between md:my-2'>
                    <div class = 'field' className='w-full'>
                        <h1>
                        Select Advanced Practice Clinician Title
                        </h1>

                                        <select id="title" onChange={(e)=>handleTitleChange(e)} class="form-select" name="title" required="" className="md:w-[48%] border-gray-200"  data-uw-rm-form="nfx">
<option value="">-------</option>
<option value="CM">Certified Midwife (CM)</option><option value="CNM">Certified Nurse Midwife (CNM)</option><option value="CNP">Certified Nurse Practitioner (CNP)</option><option value="CRNA">Certified Register Nurse Anesthetist (CRNA)</option><option value="RPA">Registered Physician Assistant (RPA)</option><option value="SA">Specialist Assistant (SA) </option></select>          

                    </div>
                    
                    </div>
                    <div class='form-fields-section' className='flex flex-col md:flex-row justify-between md:my-2'>
                    <div class = 'field' className='w-full'>
                        <h1>
                        Select the county where you see the majority of your patients:
                        </h1>
                        <select onChange={(e)=>handleCountyChange(e)} class="form-select" className="md:w-[48%] border-gray-200" name="territory" id="territory" required="" data-uw-rm-form="nfx">
                                            <option value="">--------</option>
                                            
                                            <option value="TERR7">Bronx</option>
                                            
                                            <option value="TERR4">Columbia</option>
                                            
                                            <option value="TERR4">Dutchess</option>
                                            
                                            <option value="TERR4">Greene</option>
                                            
                                            <option value="TERR2">Kings</option>
                                            
                                            <option value="TERR3">Nassau</option>
                                            
                                            <option value="TERR1">New York (Manhattan)</option>
                                            
                                            <option value="TERR1">Orange</option>
                                            
                                            <option value="TERR4">Putnam</option>
                                            
                                            <option value="TERR2">Queens</option>
                                            
                                            <option value="TERR7">Richmond</option>
                                            
                                            <option value="TERR1">Rockland</option>
                                            
                                            <option value="TERR3">Suffolk</option>
                                            
                                            <option value="TERR1">Sullivan</option>
                                            
                                            <option value="TERR4">Ulster</option>
                                            
                                            <option value="TERR1">Westchester</option>
                                            
                                        </select>

                    </div>
                    
                    </div>
                    <div class='form-fields-section' className='flex flex-col md:flex-row justify-between md:my-2'>
                    <div class = 'field' className='w-full'>
                        <h1>
                        Select the Specialty of the HIC Physician you are associated with:
                        </h1>
                        <select onChange={(e)=>handleSpecialtyChange(e)} class="form-select" className="md:w-[48%] border-gray-200" name="specialty" id="specialty" required="" data-uw-rm-form="nfx">
                        
<option value="">--------</option>



<option value="CLASS5">Allergy (including pediatric allergy)</option><option value="CLASS3">Anesthesiology</option><option value="CLASS1">Cardiothoracic Surgery</option><option value="CLASS1">Colon and Rectal Surgery and or Proctology</option><option value="CLASS2">Computerized Tomography</option><option value="CLASS5">Dermatology (excluding dermabrasion and laser)</option><option value="CLASS3">Dermatology (including demabrasion)</option><option value="CLASS5">Dermatology (including laser  and excluding dermabrasion)</option><option value="CLASS2">Diagnostic Radiology Only</option><option value="CLASS2">Diagnostic Radiology and Radiation Oncology</option><option value="CLASS2">Emergency Medicine</option><option value="CLASS4">Family-General Practice (excluding surgery)</option><option value="CLASS3">Family-General Practice (including minor surgery)</option><option value="CLASS1">Family-General Practice (limited major surgery)</option><option value="CLASS1">General Surgery (excluding bariatric surgery)</option><option value="CLASS1">General Surgery (including bariatric surgery)</option><option value="CLASS1">Gynecology Only</option><option value="CLASS3">Gynecology Only (including minor surgery)</option><option value="CLASS4">Hematology</option><option value="CLASS3">Internal Medicine (excluding cardiac catheterization)</option><option value="CLASS3">Internal Medicine (including cardiac catheterization)</option><option value="CLASS3">Neurology-Psych (excl dir perf or sup of angiography-myelography)</option><option value="CLASS1">Neurology-Psych (incl dir perf or sup of angiography-myelography)</option><option value="CLASS1">Neurosurgery</option><option value="CLASS1">Obstetrics and Gynecology</option><option value="CLASS4">Occupational Medicine (excluding surgery)</option><option value="CLASS3">Occupational Medicine (including minor surgery)</option><option value="CLASS5">Ophthalmology (excluding surgery)</option><option value="CLASS4">Ophthalmology (including major surgery)</option><option value="CLASS5">Ophthalmology (including minor surgery)</option><option value="CLASS1">Orthopedics Surgery</option><option value="CLASS1">Otolaryngology (excluding cosmetic plastic surgery)</option><option value="CLASS1">Otolaryngology (including cosmetic plastic surgery)</option><option value="CLASS3">Otolaryngology (including minor surgery)</option><option value="CLASS4">Pathology</option><option value="CLASS4">Pediatrics</option><option value="CLASS5">Physical Medicine and Rehabilitation (excluding pain medicine)</option><option value="CLASS5">Physical Medicine and Rehabilitation (including pain medicine)</option><option value="CLASS1">Plastic and Reconstructive Surgery</option><option value="CLASS5">Psychiatry (excluding angiography and myelography)</option><option value="CLASS3">Radiation Oncology Only</option>
<option value="CLASS3">Urology (including minor surgery)</option><option value="CLASS1">Vascular Surgery</option>



                                        </select>

                    </div>
                    
                    </div>
                    
                    <h4 className= ' text-2xl my-2 '>Full Time or Part Time (required)</h4>
                    <div class='form-fields-section' className='flex flex-col md:flex-row justify-between md:my-2'>
                    <div class = 'field' className='w-full'>
                    
                        
                        <div class='radio-group' className='flex flex-col'>
                       <div class='radio-btn' className='flex items-center' >
                       <input onClick={(e)=>setFTPT(e.target.value)} type="radio" name="ft-pt" id="ft" value = 'ft' className=' border-gray-200' />
                       <label className='ml-2 text-lg' htmlFor="ft">Full-time</label>
                       
                       </div>
                       <div class='radio-btn' className='flex items-center' >
                       <input onClick={(e)=>setFTPT(e.target.value)} type="radio" name="ft-pt" id="pt" value = 'pt' className=' border-gray-200' />
                       <label className='ml-2 text-lg'  htmlFor="pt">Part-time</label>
                       
                       </div>
                        
                        
                    
                        </div>
                      

                    </div>
                    
                    </div>
                    <h4 className= ' text-2xl my-2 '>Policy Type (required)</h4>
                    <div class='form-fields-section' className='flex flex-col md:flex-row justify-between md:my-2'>
                    <div class = 'field' className='w-full'>
                    
                        
                        <div class='radio-group' className='flex flex-col'>
                       <div class='radio-btn' className='flex items-center' >
                       <input onClick={(e)=>setPolicyType(e.target.value)} type="radio" name="policy-type" id="o" value = 'O' className=' border-gray-200' />
                       <label className='ml-2 text-lg flex items-center' htmlFor="o">Occurence <p className='text-sm ml-1'>(A policy that covers claims from events that took place during the policy period, regardless of when these claims were made.)</p> </label>
                       
                       </div>
                       <div class='radio-btn' className='flex items-center ' >
                       <input onClick={(e)=>setPolicyType(e.target.value)} type="radio" name="policy-type" id="cm" value = 'CM' className=' border-gray-200' />
                       <label className='ml-2 text-lg flex items-center'  htmlFor="cm">Claims Made <p className='text-sm ml-1'>(A policy that provides coverage for claims filed during the policy period, provided the treatment occurred during the period of or after the retroactive date specified in the policy.)</p></label>
                       
                       
                       </div>
                        
                        
                    
                        </div>
                      

                    </div>
                    
                    </div>
                  
                    
                </div>
                <button
                onClick={handleSubmit}
                  
                  className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-transparent hover:text-red-600 hover:border-red-600 border-[1px] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mt-5"
                >
                  Submit
                </button>
            </div>
        </div>:<div class="container" className='min-h-screen mb-48 mx-8 md:mx-16 p-5 bg-gray-100 rounded-lg'>
            <div class='header' >
                <h1 className='text-lg md:text-2xl xl:text-3xl font-bold'>Advance Practice Clinicians</h1>
                <h3 className='text-md md:text-xl xl:text-2xl'>Generate a Quick Indication</h3>
                <p className='mt-1 mb-4 pb-1 border-b-[1px] border-red-600 text-lg'>Thank you for your interest in professional liability solutions.  Fill out the information below to generate a quick indication.</p>

            </div>
            <div class='body' className=' my-10 '>
             
             <div class='practice-info'>
<h4 className = 'text-2xl my-2 '>
    Practice Information
</h4>
<p>County: {APCIndication.CountyOfPractice}</p>
<p>Specialty: {APCIndication.Specialty}</p>
<p>Hours: {APCIndication.Fulltime === false? 'Part-time':'Full-time'}</p>
             </div>
             <div class='policy-info'>
<h4 className='text-2xl my-2'>Policy Information</h4>
<p>Type: {APCIndication.Occurence === false?"Claims Made": "Occurence"}</p>
<p>Discounts {APCIndication.Discounts}</p>
             </div>
             <div class='rates'>
                <h4 className='text-2xl my-2'>Rates</h4>
                <ul>
                    {Object.values(APCIndication?.Rate)?.map((rate,rateIdx)=>{
                        return(<li className ='w-full'>Claims made year {rateIdx+1}:<span className='text-red-500'> {rate}</span> </li>)
                    })}
                </ul>

             </div>
            </div>
        </div>}

<Footer/>
    </div>
  )
}

export default AdvancePracticeClinicians