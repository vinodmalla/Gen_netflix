import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

export default function GptMovieResults() {
    const {movienames,movieResults}=useSelector((store)=>store.gpt)
    if(!movienames) return null;

  return (
    <div className='p-4 m-4 bg-opacity-85 bg-black'>
        {movienames.map((moviename,index)=><MovieList key={moviename} title={moviename} movies={movieResults[index]} />)}
        
      
    </div>
  )
}
