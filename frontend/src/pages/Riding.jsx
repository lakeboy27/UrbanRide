import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>

        <Link to="/home" className='fixed right-2 top-2 h-10 w-10 bg-white  flex justify-center items-center rounded-full'>
          <i class="text-lg font-medium ri-home-8-line"></i>
        </Link>

        <div className='h-1/2'>
            <img className='w-full h-full object-cover' src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif" alt="" />
        </div>

        <div className='h-1/2 p-4'> 
        
      <div className='flex items-center justify-between'>
        <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png" alt="" />
        <div className='text-right'>
        <h2 className='text-lg font-medium'>naujm</h2>
        <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP 04 SL 7338</h4>
        <p className='text-sm text-gray-600' >roll royce phantom</p>
      </div>
      </div>
      
   
    <div className='flex gap-2 justify-between flex-col items-center'>
    <div className='w-full mt-5'>  
        
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
    </div> 
            <button  className='w-full mt-5 bg-green-600 text-white rounded-lg font-semibold p-2'>make a payment </button>
        </div>

    </div>
   
  )
}

export default Riding

