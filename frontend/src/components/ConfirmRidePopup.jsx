import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ConfirmRidePopup = (props) => {

    const [otp, setotp] = useState('')

    const submitHandler = (e) => { 
        e.preventDefault() ; 
    }

  return (
    <div >
    <h5 onClick={()=>{
        props.setRidePopupPanel(false) ;
  }} className='p-1 text-center w-[93%] absolute top-0 '><i className="text-2xl text-gray-300 ri-arrow-down-wide-line"></i></h5>

    <h3 className=' text-2xl font-semibold mb-3 capitalize'>Confirm this ride to start</h3>

    <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
        <div className='flex items-center gap-4'>
            <img className='h-14 w-14 rounded-full object-cover' src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg" alt="" />
            <h2 className='text-lg font-medium'>Harshi Pateliya </h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2 KM </h5>
    </div>

    <div className='flex gap-2 justify-between flex-col items-center'>

    <div className='w-full mt-5'>  
        <div className='flex items-center gap-5 p-3 border-b-2'>
        <i className="ri-map-pin-user-fill"></i>
            <div>
                <h3 className='text-lg font-medium'>562/11</h3>
                <p className='text-sm -mt-1 text-gray-600'>chugen hun la di, bhopal</p>
            </div>
        </div>
        <div className='flex items-center gap-5 p-3 border-b-2'>
        <i className="text-lg  ri-map-pin-2-fill"></i>
            <div>
                <h3 className='text-lg font-medium'>562/11</h3>
                <p className='text-sm -mt-1 text-gray-600'>chugen hun la di, bhopal</p>
            </div>
        </div>
        <div className='flex items-center gap-5 p-3'>
        <i className="ri-money-rupee-circle-line"></i>
            <div>
                <h3 className='text-lg font-medium'>193.2</h3>
                <p className='text-sm -mt-1 text-gray-600'>cash cash </p>
            </div>
        </div>

    </div>

    
    <div className='mt-6 w-full'>
        <form onSubmit={(e) => {
            submitHandler(e)
        }}>
            <input value={otp} onChange={(e) => setotp(e.target.value)} type="text"  className='bg-[#eee] px-6 py-4 text-lg font-mono rounded-lg w-full mt-3'  placeholder='Enter OTP' />


        <Link to='/captainriding' onClick={()=>{
        props.setConfirmRidePopupPanel(true) ; 
    }} className='w-full mt-5 flex justify-center bg-green-600 text-white rounded-lg font-semibold p-3'>Confirm</Link >
    <button onClick={()=>{
        props.setConfirmRidePopupPanel(false) ;
        props.setRidePopupPanel(false) ; 
    }} className='w-full mt-2 bg-red-500 text-white rounded-lg font-semibold p-3'>Cancel Ride</button>



        </form>
    </div>

    </div>
</div>
  )
}

export default ConfirmRidePopup