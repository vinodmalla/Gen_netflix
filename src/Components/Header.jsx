import React, { useState, useEffect } from 'react';
import {onAuthStateChanged} from "firebase/auth";
import { auth } from '../Utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { adduser, removeuser } from '../Utils/userSlice';
import { Logo, Supported_languages, User_Logo } from '../Utils/constants';
import { togglegptview } from '../Utils/gptSlice';
import { changeLanguage } from '../Utils/configSlice';
import lang from '../Utils/langConstants';


function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector(state=>state.gpt?.showGptSearch)
  const langkey=useSelector(state=>state.config.lang)




  function outSign() {
    signOut(auth).catch((error) => console.error("Sign out error:", error));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(adduser({ uid, email, displayName }));
        navigate("/broswer");
      } else {
        dispatch(removeuser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  function handleGptsearch(){
    dispatch(togglegptview())

  }
  function handlechangelang(e){
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='fixed w-screen bg-gradient-to-b from-black z-10 flex flex-row sm:flex-row justify-between'>
      <img className="w-36 sm:w-48" src={Logo} alt="logo" />
       
      {user && (

        
        <div className='p-4 m-2 flex flex-row '>
          <select className='bg-blue-500 text-white hover:bg-blue-900 p-2 m-4 w-30 sm:w-full' onClick={handlechangelang}>
           {
            Supported_languages.map((lang)=>(<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))
           }
            
          </select>
          <button className='bg-blue-500 p-1 m-4 rounded-sm text-gray-300 font-semibold hover:bg-blue-900 w-30 sm:w-full ' onClick={handleGptsearch} >{showGptSearch ? lang[langkey].HomePage:lang[langkey].ChatGpt}</button>
          <button onClick={outSign}>
            <img className='m-4 w-9 hover:bg-blue-900' src={User_Logo} alt='userlog' />
          </button>
        </div>
      )}
   
    </div>
  );
}

export default Header;
