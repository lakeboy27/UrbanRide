import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className= 'bg-cover bg-bottom bg-[url(https://images.stockcake.com/public/8/d/7/8d752f61-3a2d-4b3e-aadc-8167a741b613_medium/city-traffic-lights-stockcake.jpg)] h-screen pt-4 flex justify-between flex-col w-full '> 
            <img className='w-24 ml-4' src="https://image.spreadshirtmedia.com/image-server/v1/designs/1025359752,width=178,height=178.png" alt="" />
            <div className='bg-white pb-6 py-4 px-4'>
                <h2 className='text-3xl font-bold'>Welcome To UrbanRide</h2>
                <Link to={'/login'} className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-2'>continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start