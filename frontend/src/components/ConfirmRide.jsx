import React from 'react'

const ConfirmRide = (props) => {

  return (
    <div>
        <h5 onClick={()=>{
        props.setvehicleFound(false) ;
      }} className='p-1 text-center w-[93%] absolute top-0 '><i className="text-2xl text-gray-300 ri-arrow-down-wide-line"></i></h5>

        <h3 className=' text-2xl font-semibold mb-3 '>Confirm your ride</h3>

        <div className='flex gap-2 justify-between flex-col items-center'>

            <img className='h-32' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png" alt="" />

        </div>

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

        <button onClick={()=>{
            props.setvehicleFound(true) ; 
        }} className='w-full mt-5 bg-green-600 text-white rounded-lg font-semibold p-2'>Confirm</button>

    </div>
  )
}

export default ConfirmRide