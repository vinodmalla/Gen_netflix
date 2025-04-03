import React from 'react'
import MoveCard from './MoveCard'

export default function MovieList({title,movies}) {
     
  return (
    <div className='p-6'>
        <h2 className='font-bold text-2xl py-4 text-white'>{title}</h2>
        <div className='flex overflow-x-scroll hide-scrollbar '>
            <div className='flex space-x-4 '>
                {movies?.map(movie=>(<MoveCard key={movie?.id} poster_path={movie?.poster_path} movieData={movie} />))  }
            </div>

          
        </div> 
      
    </div>
  )
}
