import React from 'react'


export default function VideoTitle({title, overview }) {
    
  return (
    <div className='w-screen aspect-video absolute text-white pt-[20%] px-12 bg-gradient-to-r from-black sm:'>
        <h1 className='font-bold text-3xl sm:text-6xl'>{title}</h1>
        <p className='hidden sm:inline-block py-6  text-lg w-1/2'>{overview}</p>
        <div>
            <button className=' border border-solid rounded-md p-4 bg-red-500 text-white font-semibold hover:bg-red-900'>Play</button>
            <button className='m-6 p-4 border border-solid rounded-md  bg-white-500 text-white font-semibold hover:text-black hover:bg-white'>Info</button>
        </div>
      
    </div>
  )
}
