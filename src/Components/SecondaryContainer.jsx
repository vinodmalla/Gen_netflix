import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import lang from '../Utils/langConstants'


export default function SecondaryContainer( ) {
  const movies=useSelector((store)=>store?.movies)
  const langkey=useSelector(state=>state.config.lang)
  

  return (
    movies && ( 
      <div className=' bg-black'>
         <div className='m-0 mt-[0%] sm:-mt-52 pl-12 relative z-20'>
          <MovieList title={lang[langkey].NowPlaying} movies={movies?. nowPlayingMovies} />
          <MovieList title={lang[langkey].Trending} movies={movies?.nowPlayingTrending} />
          <MovieList title={lang[langkey].upComing} movies={movies?. upComingMovies} />
          <MovieList title={lang[langkey].TopRated} movies={movies?.toRatedMovies} />

        </div>
       
      </div>

    )
    
     

   
  )
}
