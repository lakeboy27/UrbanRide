import React , { useContext , useEffect, useState} from 'react'
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom'
import { use } from 'react';
import axios from 'axios';


const CaptainProtectWrapper = ({
    children
}) => {


    const token = localStorage.getItem('token') ;

    const navigate = useNavigate() ;
    const { captain ,  setCaptain } = useContext(CaptainDataContext) ;
    const  [isloading , setIsloading] = useState(true) ;


    // console.log(token) ;

    useEffect(() => {
        if(!token) {
            navigate('/captainlogin') ;
        }
    } , [token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile` , {
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    }).then((response) => {
        if(response.status == 200) {
            setCaptain(response.data.captain) ;
            setIsloading(false) ;
        }
    }).catch((error) => {
        console.log(error) ;
        localStorage.removeItem('token')
        navigate('/captainlogin') ;
    })


    if( isloading) {
        return <h1>Loading...</h1>
    }

  return (
   <>
   {children} 
   </>
  )
}

export default CaptainProtectWrapper