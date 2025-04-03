import React from 'react'
import { Back_Ground } from '../Utils/constants'
import GptSearchBar from './GptSearchBar'
import GptMovieResults from './GptMovieResults'

export default function Gptsearch() {
  return (
    <div className=' '>
        <div className='fixed -z-10' >
            <img className='h-screen object-cover sm:w-screen'  src={Back_Ground} alt="logo" />
        </div>
        <GptSearchBar />
        <GptMovieResults />

   </div>
  
    
  )
}
