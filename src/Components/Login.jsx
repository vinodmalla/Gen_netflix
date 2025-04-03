import React from 'react'
import Header from './Header'
import { useState,useRef } from 'react'
import { checkValidation } from '../Utils/Validation';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { Back_Ground } from '../Utils/constants';



function Login() {
    const [isSign,setisSign]=useState(true);
    const [error,setError]=useState(null)
    const email=useRef(null)
    const password=useRef(null)
    const number=useRef(null)
    const name=useRef(null)
   
    function togglesignup(){
        setisSign(!isSign)
    }
    
    function handleSubmit(){
      const emailvalue=email.current.value;
      const passwordvalue=password.current.value;
      const message=checkValidation(emailvalue,passwordvalue)
      setError(message)
      if(message) return;
      if(isSign){
    
        createUserWithEmailAndPassword(auth, emailvalue, passwordvalue).then((userCredential) => {
   
         const user = userCredential.user;
         updateProfile(auth.user, {
          displayName: name.current.value,
        }).then(() => {
          
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
          setError(error)
        });
        
    
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode+"-"+errorMessage)
        });

      }else{
        
        signInWithEmailAndPassword(auth, emailvalue, passwordvalue).then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        
    
    // ...
      }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorCode+"-"+errorMessage)
  });

      }

    }


  return (
    <div>
        <Header />
        <div className='fixed' >
             <img className='h-screen object-cover sm:w-screen'  src={Back_Ground} alt="logo" />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='h-full object-cover sm:w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0  text-white rounded-lg  bg-opacity-80'>
            <h1 className='p-2 my-2 text-2xl font-bold'>{!isSign ? "Sign In":"Sign Up"}</h1>
            {isSign &&  <input ref={name} className='p-2 my-2 w-full rounded-lg bg-gray-700' type="text" placeholder='enter a full name' />}

            <input ref={email} className='p-2 my-2 w-full rounded-lg bg-gray-700' type="text" placeholder='enter a email address' />
            {isSign &&  <input ref={number} className='p-2 my-2 w-full rounded-lg bg-gray-700' type="number" placeholder='enter a mobile number' />}
            <input ref={password} className='p-2  my-2  w-full rounded-lg  bg-gray-700' type='password' placeholder='password' />
            <p className='text-red-600 font-bold p-2 my-2 w-full hover:bg-red-900'>{error}</p>
            <button className='p-2  my-2  bg-red-700 w-full rounded-lg hover:bg-red-900' onClick={handleSubmit} >{!isSign ? "Sign In":"Sign Up"}</button>
            <p className='hover:underline cursor-pointer' onClick={togglesignup}>{!isSign? "New to Netflix? Sign Up" : "Already Register ? Sign In"}</p>
        </form>

      
    </div>
  )
}

export default Login
