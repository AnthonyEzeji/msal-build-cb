import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import axios from 'axios'
function VoluntaryAttendingPatients() {

const [howDidYouHear, setHowDidYouHear] = useState(null)
const [affiliation, setAffiliation] = useState(null)
const [specialty, setSpecialty] = useState(null)
const [county, setCounty] = useState(null)
const [firstName, setFirstName] = useState(null)
const [lastName, setLastName] = useState(null)
const [phoneNumber, setPhoneNumber] = useState(null)
const [email, setEmail] = useState(null)
const [practiceName, setPracticeName] = useState(null)
const [FTPT, setFTPT] = useState(null)
const [policyType, setPolicyType] = useState(null)
const [discounts, setDiscounts] = useState(null)
const [VAPIndication, setVAPIndication] = useState(null)
    function handleHowDidYouHearChange(e){
        if(e?.target?.value?.length>0){
            setHowDidYouHear(e.target.value)
        }
        
    }function handleAffiliationChange(e){
        if(e?.target?.value?.length>0){
            setAffiliation(e.target.value)
        }
        
    }
    function handleSpecialtyChange(e){
        if(e?.target?.value?.length>0){
            setSpecialty(e.target.value)
        }
        
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
            if(discounts){
                await axios.get(`https://quoteservice.fojp.com/rates/GetDataRates?firstName=${firstName}&lastName=${lastName}&phoneNumber=${phoneNumber}&email=${email}&practiceName=${practiceName}&hearAboutUs=${howDidYouHear}&affiliates=${affiliation}&territory=${county?.territory}&specialty=${specialty}&hours=${FTPT}&pol_type=${policyType[1]?.toLocaleUpperCase()}&discounts=${discounts}&county=${county.name}&submit=Submit&callback=jQuery`)
                .then(res=>{
                    response = res.data
                })
            }else {
                await axios.get(`https://quoteservice.fojp.com/rates/GetDataRates?firstName=${firstName}&lastName=${lastName}&phoneNumber=${phoneNumber}&email=${email}&practiceName=${practiceName}&hearAboutUs=${howDidYouHear}&affiliates=${affiliation}&territory=${county?.territory}&specialty=${specialty}&hours=${FTPT}&pol_type=${policyType[1]?.toLocaleUpperCase()}&county=${county.name}&submit=Submit&callback=jQuery`)
            .then(res=>{
                response  = res.data
            })
            }
            setVAPIndication(JSON.parse(response.substring(7,response.length-2)))
        } catch (error) {
            
        }
    }
    useEffect(() => {
      console.log(VAPIndication)
    }, [VAPIndication])
    
 
  return (
    <div class='page' className='pt-[103px] w-screen  flex flex-col items-center'>
        <Navbar/>
        {!VAPIndication?<div class="container" className='min-h-screen mb-48 mx-8 md:mx-16 p-5 bg-gray-100 rounded-lg'>
            <div class='header' >
                <h1 className='text-lg md:text-2xl xl:text-3xl font-bold'>Voluntary Attending Physicians</h1>
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
                        Select your primary hospital affiliation:
                        </h1>
                        <select onChange={(e)=>handleAffiliationChange(e)} class="form-select" className="md:w-[48%] border-gray-200" name="affiliates" id="affiliates" required="" aria-label="select" data-uw-rm-form="fx">
                                            <option value="">-------</option>
                                            <option value="Bronx-Lebanon Hospital Center">
                                                Bronx-Lebanon
                                                Hospital Center
                                            </option>
                                            <option value="Maimonides Medical Center">
                                                Maimonides Medical
                                                Center
                                            </option>
                                            <option value="Montefiore Medical Center">
                                                Montefiore Medical
                                                Center
                                            </option>
                                            <option value="Montefiore Mount Vernon Hospital">
                                                Montefiore Mount
                                                Vernon Hospital
                                            </option>
                                            <option value="Montefiore New Rochelle Hospital">
                                                Montefiore New
                                                Rochelle Hospital
                                            </option>
                                            <option value="Mount Sinai Beth Israel">Mount Sinai Beth Israel</option>
                                            <option value="Mount Sinai Beth Israel Brooklyn">
                                                Mount Sinai Beth
                                                Israel Brooklyn
                                            </option>
                                            <option value="Mount Sinai Hospital">Mount Sinai Hospital</option>
                                            <option value="Mount Sinai Queens">Mount Sinai Queens</option>
                                            <option value="Mount Sinai Roosevelt">Mount Sinai Roosevelt</option>
                                            <option value="Mount Sinai St. Luke’s">Mount Sinai St. Luke’s</option>
                                            <option value="New York Eye &amp; Ear Infirmary of Mount Sinai">
                                                New
                                                York Eye &amp; Ear Infirmary of Mount Sinai
                                            </option>
                                            <option value="White Plains Hospital">White Plains Hospital</option>
                                        </select>

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
                        Select your Specialty:
                        </h1>
                        <select onChange={(e)=>handleSpecialtyChange(e)} class="form-select" className="md:w-[48%] border-gray-200" name="specialty" id="specialty" required="" data-uw-rm-form="nfx">
                                            <option value="">--------</option>
                                            
                                            <option value="Allergy (including pediatric allergy)">Allergy (including pediatric allergy)</option>
                                            
                                            <option value="Anesthesiology (excluding pain medicine)">Anesthesiology (excluding pain medicine)</option>
                                            
                                            <option value="Anesthesiology (including pain medicine)">Anesthesiology (including pain medicine)</option>
                                            
                                            <option value="Cardiology, excluding cardiac catheterization">Cardiology, excluding cardiac catheterization</option>
                                            
                                            <option value="Cardiothoracic Surgery">Cardiothoracic Surgery</option>
                                            
                                            <option value="Colon and Rectal Surgery and or Proctology">Colon and Rectal Surgery and or Proctology</option>
                                            
                                            <option value="Computerized Tomography">Computerized Tomography</option>
                                            
                                            <option value="Dermatology (excluding dermabrasion and laser)">Dermatology (excluding dermabrasion and laser)</option>
                                            
                                            <option value="Dermatology (including demabrasion)">Dermatology (including demabrasion)</option>
                                            
                                            <option value="Dermatology (including laser  and excluding dermabrasion)">Dermatology (including laser  and excluding dermabrasion)</option>
                                            
                                            <option value="Diagnostic Radiology Only">Diagnostic Radiology Only</option>
                                            
                                            <option value="Diagnostic Radiology and Radiation Oncology">Diagnostic Radiology and Radiation Oncology</option>
                                            
                                            <option value="Emergency Medicine">Emergency Medicine</option>
                                            
                                            <option value="Endocrinology">Endocrinology</option>
                                            
                                            <option value="Family-General Practice (excluding surgery)">Family-General Practice (excluding surgery)</option>
                                            
                                            <option value="Family-General Practice (including minor surgery)">Family-General Practice (including minor surgery)</option>
                                            
                                            <option value="Family-General Practice (limited major surgery)">Family-General Practice (limited major surgery)</option>
                                            
                                            <option value="Gastroenterology">Gastroenterology</option>
                                            
                                            <option value="General Surgery (excluding bariatric surgery)">General Surgery (excluding bariatric surgery)</option>
                                            
                                            <option value="General Surgery (including bariatric surgery)">General Surgery (including bariatric surgery)</option>
                                            
                                            <option value="Geriatrics">Geriatrics</option>
                                            
                                            <option value="Gynecology Only">Gynecology Only</option>
                                            
                                            <option value="Gynecology Only (including minor surgery)">Gynecology Only (including minor surgery)</option>
                                            
                                            <option value="Hematology">Hematology</option>
                                            
                                            <option value="Infectious Disease">Infectious Disease</option>
                                            
                                            <option value="Internal Medicine (excluding cardiac catheterization)">Internal Medicine (excluding cardiac catheterization)</option>
                                            
                                            <option value="Internal Medicine (including cardiac catheterization)">Internal Medicine (including cardiac catheterization)</option>
                                            
                                            <option value="Neonatology">Neonatology</option>
                                            
                                            <option value="Neurology-Psych (excl dir perf or sup of angiography-myelography)">Neurology-Psych (excl dir perf or sup of angiography-myelography)</option>
                                            
                                            <option value="Neurology-Psych (incl dir perf or sup of angiography-myelography)">Neurology-Psych (incl dir perf or sup of angiography-myelography)</option>
                                            
                                            <option value="Neurosurgery">Neurosurgery</option>
                                            
                                            <option value="Obstetrics and Gynecology">Obstetrics and Gynecology</option>
                                            
                                            <option value="Occupational Medicine (excluding surgery)">Occupational Medicine (excluding surgery)</option>
                                            
                                            <option value="Occupational Medicine (including minor surgery)">Occupational Medicine (including minor surgery)</option>
                                            
                                            <option value="Oncology-Hematology">Oncology-Hematology</option>
                                            
                                            <option value="Ophthalmology (excluding surgery)">Ophthalmology (excluding surgery)</option>
                                            
                                            <option value="Ophthalmology (including major surgery)">Ophthalmology (including major surgery)</option>
                                            
                                            <option value="Ophthalmology (including minor surgery)">Ophthalmology (including minor surgery)</option>
                                            
                                            <option value="Oral Surgery">Oral Surgery</option>
                                            
                                            <option value="Orthopedic Surgery (excluding spinal surgery)">Orthopedic Surgery (excluding spinal surgery)</option>
                                            
                                            <option value="Orthopedic Surgery (including spinal surgery)">Orthopedic Surgery (including spinal surgery)</option>
                                            
                                            <option value="Otolaryngology (excluding cosmetic plastic surgery)">Otolaryngology (excluding cosmetic plastic surgery)</option>
                                            
                                            <option value="Otolaryngology (including cosmetic plastic surgery)">Otolaryngology (including cosmetic plastic surgery)</option>
                                            
                                            <option value="Otolaryngology (including minor surgery)">Otolaryngology (including minor surgery)</option>
                                            
                                            <option value="Pathology">Pathology</option>
                                            
                                            <option value="Pediatrics">Pediatrics</option>
                                            
                                            <option value="Physical Medicine and Rehabilitation (excluding pain medicine)">Physical Medicine and Rehabilitation (excluding pain medicine)</option>
                                            
                                            <option value="Physical Medicine and Rehabilitation (including pain medicine)">Physical Medicine and Rehabilitation (including pain medicine)</option>
                                            
                                            <option value="Plastic and Reconstructive Surgery">Plastic and Reconstructive Surgery</option>
                                            
                                            <option value="Psychiatry (excluding angiography and myelography)">Psychiatry (excluding angiography and myelography)</option>
                                            
                                            <option value="Pulmonary Disease">Pulmonary Disease</option>
                                            
                                            <option value="Radiation Oncology Only">Radiation Oncology Only</option>
                                            
                                            <option value="Rheumatology">Rheumatology</option>
                                            
                                            <option value="Urology (including major surgery)">Urology (including major surgery)</option>
                                            
                                            <option value="Urology (including minor surgery)">Urology (including minor surgery)</option>
                                            
                                            <option value="Vascular Surgery">Vascular Surgery</option>
                                            
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
                    <h4 className= ' text-2xl my-2 '>Discounts (required)</h4>
                    <div class='form-fields-section' className='flex flex-col md:flex-row justify-between md:my-2'>
                    <div class = 'field' className='w-full'>
                    
                        
                        <div class='radio-group' className='flex flex-col'>
                       <div class='radio-btn' className='flex items-center' >
                       <input onClick={(e)=>setDiscounts(e.target.value)} type="radio" name="discounts" id="five" value = 'waiver_of_consent' className=' border-gray-200' />
                       <label className='ml-2 text-lg flex items-center' htmlFor="five">5% Waiver of Consent Discount: Offered to physicians who grant HIC the right to settle any claims made against you without your prior written consent. </label>
                       
                       </div>
                       <div class='radio-btn' className='flex items-center ' >
                       <input onClick={(e)=>setDiscounts(e.target.value)} type="radio" name="discounts" id="two" value = 'one_time_payment' className=' border-gray-200' />
                       <label className='ml-2 text-lg flex items-center'  htmlFor="two">2% Pre-pay Discount: available to physicians that pay their annual premium in full prior to their due date.</label>
                       
                       
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
                <h1 className='text-lg md:text-2xl xl:text-3xl font-bold'>Voluntary Attending Physicians</h1>
                <h3 className='text-md md:text-xl xl:text-2xl'>Generate a Quick Indication</h3>
                <p className='mt-1 mb-4 pb-1 border-b-[1px] border-red-600 text-lg'>Thank you for your interest in professional liability solutions.  Fill out the information below to generate a quick indication.</p>

            </div>
            <div class='body' className=' my-10 '>
             
             <div class='practice-info'>
<h4 className = 'text-2xl my-2 '>
    Practice Information
</h4>
<p>County: {VAPIndication.CountyOfPractice}</p>
<p>Specialty: {VAPIndication.Specialty}</p>
<p>Hours: {VAPIndication.Fulltime === false? 'Part-time':'Full-time'}</p>
             </div>
             <div class='policy-info'>
<h4 className='text-2xl my-2'>Policy Information</h4>
<p>Type: {VAPIndication.Occurence === false?"Claims Made": "Occurence"}</p>
<p>Discounts {VAPIndication.Discounts}</p>
             </div>
             <div class='rates'>
                <h4 className='text-2xl my-2'>Rates</h4>
                <ul>
                    {Object.values(VAPIndication?.Rate)?.map((rate,rateIdx)=>{
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

export default VoluntaryAttendingPatients