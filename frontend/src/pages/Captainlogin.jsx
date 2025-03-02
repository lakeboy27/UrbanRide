import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Captainlogin = () => {
  
    const [email, setEmail] = useState('') ;
    const [password, setPassword] = useState('') ;
    const [captainData , setcaptainData ] = useState({}) ;
  
  
    const submitHandler = (e) => {
      e.preventDefault() ;
      setcaptainData ({
        email: email,
        password: password
      }) ; 
      setEmail('') ;
      setPassword('') ;
    }
  
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-16 mb-10 bg-black'  src="https://image.spreadshirtmedia.com/image-server/v1/designs/1025359752,width=178,height=178.png" alt="" />
        <form onSubmit={(e) => submitHandler(e)}>

            <h3 className='text-lg font-medium mb-2'>What's your email</h3>    
            <input 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email" 
            placeholder='example@example.com' />

            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

            <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
             className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            placeholder='password' />

            <button  className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>login</button>

        </form>
            <p className='text-center'> join a fleet ? <Link to="/captainsignup" className="text-blue-600 ">Register as a captain</Link> </p>
        </div>
        <div>
            <Link to='/login'
            className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            >Sign in as user </Link>
        </div>
    </div>
  )
}

export default Captainlogin