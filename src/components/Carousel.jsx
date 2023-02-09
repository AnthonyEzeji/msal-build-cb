
	import React from 'react'
    import '../css/Carousel.css' 
    import BHSLogo from'../assets/client logos/Bronx Care.jpg'
    import MSHLogo from '../assets/client logos/Mount Sinai Logo.jpg'
    import MFLogo from'../assets/client logos/Montefiore.jpg'
    import NyackLogo from '../assets/client logos/Nyack.jpg'
    import WPLogo from'../assets/client logos/White Plains.jpg'
    import BlytheLogo from '../assets/client logos/Blythedale.jpg'
    import STLukeLogo from '../assets/client logos/St Lukes.jpg'
    import JBLogo from '../assets/client logos/Jewish Board.jpg'
    import MMlogo from '../assets/client logos/maimonides.jpg'
    function Carousel() {
      return (
        <div  class="marquee">
          
        <ul class="marquee-content">
         
        <li  className='px-4 py-0 '><img src={BHSLogo} alt="" /></li>
        <li className='px-4 py-0 '><img src={MSHLogo} alt="" /></li>
        <li className='px-4 py-0 '><img src={MFLogo} alt="" /></li>
        <li className='px-4 py-0 '><img src={NyackLogo} alt="" /></li>
        <li className='px-4 py-0 '><img src={WPLogo} alt="" /></li>
        <li className='px-4 py-0 '><img src={BlytheLogo} alt="" /></li>
        <li className='px-4 py-0 '><img src={STLukeLogo} alt="" /></li>
        <li className='px-4 py-0 bg-white'><img src={JBLogo} alt="" /></li>
        <li className='px-4 py-0 '><img src={MMlogo} alt="" /></li>
        <li  className='px-4 py-0 '><img src={BHSLogo} alt="" /></li>
        <li className='px-4 py-0 '><img src={MSHLogo} alt="" /></li>
        <li className='px-4 py-0 '><img src={MFLogo} alt="" /></li>
        <li className='px-4 py-0 '><img src={NyackLogo} alt="" /></li>
        <li className='px-4 py-0 '><img src={WPLogo} alt="" /></li>
        <li className='px-4 py-0 '><img src={BlytheLogo} alt="" /></li>
        <li className='px-4 py-0 '><img src={STLukeLogo} alt="" /></li>
        <li className='px-4 py-0 bg-white'><img src={JBLogo} alt="" /></li>
        <li className='px-4 py-0 '><img src={MMlogo} alt="" /></li>
      

        
        
        
    
        </ul>
   
      </div>
      )
    }
    
    export default Carousel
    
    