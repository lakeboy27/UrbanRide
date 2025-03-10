import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false) ;

    const finishRidePanelRef = useRef(null) ; 

    
  useGSAP(function () {
   
    if( finishRidePanel) { 
      gsap.to(finishRidePanelRef.current, {
       transform : 'translateY(0)'
      })
    }else{
      gsap.to( finishRidePanelRef.current, {
        transform : 'translateY(100%)'
      })
    }
   
    
  } ,[finishRidePanel] )

  return (
    <div className='h-screen'>
        
    <div className='fixed p-6 top-0 flex items-center justify-between w-full'>
        <img className="w-16 bg-black" src="https://image.spreadshirtmedia.com/image-server/v1/designs/1025359752,width=178,height=178.png" alt="" />
        <Link to="/captainhome" className=' h-10 w-10 bg-white  flex justify-center items-center rounded-full'>
        <i class="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>

    </div>
    
    <div className='h-4/5'>
        <img className='w-full h-full object-cover' src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif" alt="" />
    </div>

    <div onClick={() => {
        setFinishRidePanel(true)
    }}
     className='h-1/5 p-6 flex justify-between items-center bg-yellow-400 relative'> 
        <h5 onClick={()=>{
            
            }} className='p-1 text-center w-[93%] absolute top-0 '><i className="text-2xl text-gray-300 ri-arrow-up-wide-line"></i></h5>
    
        <h4 className='text-xl font-semibold'>4 KM away</h4>
        <button className='justify-center bg-green-600 text-white rounded-lg font-semibold px-10 p-3'>Complete Ride</button>
    </div>

    
    <div ref={finishRidePanelRef} className='fixed z-10 bottom-0 px-3 py-10 pt-10 translate-y-full bg-white w-full'>
            < FinishRide setFinishRidePanel={setFinishRidePanel} /> 
        </div> 


</div>
  )
}

export default CaptainRiding