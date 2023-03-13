import { AuthenticatedTemplate, useIsAuthenticated, useMsal } from '@azure/msal-react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import PreviewButtons from './DCPreviewButtons'
import Footer from '../Footer'


    

function DepartmentChair() {
    var isAuthenticated = useIsAuthenticated()
    const [authenticated, setAuthenticated] = useState(false)
const {instance} = useMsal()
    useEffect(() => {
        if(isAuthenticated){
          setAuthenticated(true)
        }
    
    }, [])
useEffect(() => {
  if(authenticated===true&&instance!=null){
    instance?.setActiveAccount(instance.getAllAccounts()[0])
  }
}, [authenticated])

  return (
 
   
    <div>
    <Navbar/>
    <div class='department-chair-page' className = 'w-screen h-fit min-h-screen  '>
     
        <PreviewButtons/>
    </div>
    <Footer/>
    </div>

  )
  }
export default DepartmentChair