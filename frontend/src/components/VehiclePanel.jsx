import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 onClick={()=>{
        props.setVehiclePanel(false) ;
      }} className='p-1 text-center w-[93%] absolute top-0 '><i className="text-2xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
     
      <h3 className=' text-2xl font-semibold mb-3 '>Choose A Vehicle</h3>
      
      <div onClick={()=> {
        props.setconfimRidePanel(true) ;
      }} className='flex items-center mb-2  p-3 justify-between w-full active:border-black border-2 rounded-xl'>
          <img className='h-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png" alt="" />
          <div className='ml-2 w-1/2' >
              <h4 className='font-medium text-base' > URBANGO <span><i class="ri-user-3-fill"></i>4</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Afforable, compact rides</p>
            </div>
            <h2 className='text-xl font-semibold'>$ 2.93 </h2>
      </div>
      
      <div onClick={()=> {
        props.setconfimRidePanel(true) ;
      }} className='flex items-center mb-2  p-3 justify-between w-full active:border-black border-2 rounded-xl'>
          <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className='ml-2 w-1/2' >
              <h4 className='font-medium text-base' > URBANBIKE <span><i class="ri-user-3-fill"></i>1</span></h4>
              <h5 className='font-medium text-sm'>3 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Afforable, motor rides</p>
            </div>
            <h2 className='text-xl font-semibold'>$ 1.93 </h2>
      </div>


      <div onClick={()=> {
        props.setconfimRidePanel(true) ;
      }} className='flex items-center mb-2  p-3 justify-between w-full active:border-black border-2 rounded-xl'>
          <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className='ml-2 w-1/2' >
              <h4 className='font-medium text-base' > URBANAUTO <span><i class="ri-user-3-fill"></i>3</span></h4>
              <h5 className='font-medium text-sm'>5 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Afforable, auto rides</p>
            </div>
            <h2 className='text-xl font-semibold'>$ 2.35 </h2>
      </div>
      
      </div>
  )
}

export default VehiclePanel