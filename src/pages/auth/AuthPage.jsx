import React, { useEffect, useState } from 'react'
import { loginRequest } from '../../authConfig';
import {useIsAuthenticated, useMsal} from '@azure/msal-react'
import { BsBoxArrowInRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import video from '../../assets/sample_01 (1080p).mp4'
import HRALogo from "../../assets/TDCSI Logo black and red.png"
function AuthPage() {
    const {instance} = useMsal()
    const handleLogin = () => {
        /* instance.loginPopup(loginRequest).catch(e => {
             console.log(e);
         }); */
         instance.loginRedirect(loginRequest).then(response=>{
          
          return instance
         }).catch(e => {
           console.log(e);
       });
     }
     const [isAuthenticated, setIsAuthenticated] = useState(false)
     let isAuthHook = useIsAuthenticated()
     let navigate = useNavigate()
     useEffect(() => {
       if(isAuthHook){
       navigate('/chatbot')
       }
     }, [isAuthHook])
     
  return (
    <div className='flex items-center justify-center h-screen '>
        <video className='w-full h-full object-cover absolute top-0 left-0 ' muted autoPlay loop src={video}></video>
        <div className='w-fit h-fit p-10 rounded-md drop-shadow-lg bg-zinc-200/[.5]'>
        <div className='flex flex-col items-center'>
        
        <img className=' my-10 w-[250px] ' src={HRALogo} alt="" />
        <button className='bg-slate-200 border-[1px] hover:bg-transparent border-gray-300 text-slate-700  w-fit  flex row-reverse items-center space-x-2' onClick={()=>handleLogin()}><p className='ml-1'>Login with Microsoft B2C</p>
        <img className='border-l-[1px] ml-1 border-gray-300' style={{width:'30px',padding:5}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAflBMVEXz8/PzUyWBvAYFpvD/ugj39fnz+Pnz+/z59vz89/Py9vzz9fn49fN9ugD/uACsz4LzTBfzbU6UxUZEsPD+wEWCwvH7zoLzUB7zk4LzopS31ZHzSQ2Rwz7+vz361JEAovDzu7PK3bLzaEfzhG2hy2eRyfJgufH8yGGy1fP43bImpI7iAAAA7UlEQVRoge3ZSQ6CQBRFURQRtVBBUFDABvv9b1ApB9b0/5hA4r3zl7OA53n0f41V2WmgyqGPhaJtiwe7paLTFx8XZSyubML3dFLNFS1dOx6IyxNrr+ZDcdjY2NjY2NjY2NjY2NjY2NjY2NjY2NjYfbbLXFz8o89i2yTimnNrB5dqJa7auUdRqMlOg4kih6YOiqaa7NTMFBmHvqaKbi1u7nUmrt5/8Wh98MUd0tae1QtFG9eW077/sbPFSBw2NjY2NjY2NjY2NjY2NjY2NjY2NjY2dp/tDj+Lx1rRNXpPzX6j6OkeRars1Kjy6P96AYSl6EyTZ6KEAAAAAElFTkSuQmCC" alt="" />
        </button>
        </div>
        </div>
        

    </div>
  )
}

export default AuthPage