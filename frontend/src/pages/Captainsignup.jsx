import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Captainsignup = () => {
   const [email, setEmail] = useState('') ; 
    const [password, setPassword] = useState('') ; 
    const [firstName, setFirstName] = useState('') ;
    const [lastName, setLastName] = useState('') ;
  
    const [userData, setUserData] = useState({}) ;
  
    
    const submitHandler = (e) => {
      e.preventDefault() ;
      
      setUserData({
        fullName : {
          firstName : firstName,
          lastName : lastName
         } ,
        email: email,
        password: password,
      })
  
      // console.log(userData) ;
      setEmail('') ;
      setPassword('') ;
      setFirstName('') ;
      setLastName('') ;
  
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
    <img className='w-16 mb-10 bg-black'  src="https://image.spreadshirtmedia.com/image-server/v1/designs/1025359752,width=178,height=178.png" alt="" />
    <form onSubmit={(e) => submitHandler(e)}>

        <h3 className='text-lg font-medium mb-2'>What's our captain's name</h3>  
        <div className='flex gap-3 mb-6 '>
        <input 
        required 
        className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2  text-lg placeholder:text-base'
        type="text" 
        placeholder='first name'
        value={firstName} 
        onChange={(e) => setFirstName(e.target.value)}
        />
        <input 
        required 
        className='bg-[#eeeeee] rounded px-4 py-2 border  w-1/2 text-lg placeholder:text-base'
        type="text" 
        placeholder='last name'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        />
        </div>

        <h3 className='text-lg font-medium mb-2'>What's our captain's email</h3>    
        <input 
        required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        type="email" 
        placeholder='example@example.com' />

        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

        <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        placeholder='password' />

        <button  className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>login</button>

    </form>
        <p className='text-center'>Already have a account? <Link to="/captainlogin" className="text-blue-600 ">Login Here</Link> </p>
    </div>
    <div>
        <p className='text-xs leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
        Policy</span> and <span className='underline'> Terms of Service apply. </span> </p>
    </div>
</div>
  )
}

export default Captainsignup