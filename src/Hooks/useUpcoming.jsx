import React from 'react'
import { addupcomingmovies } from '../Utils/MovieSlice';
import { API_OPTIONS } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
export default function useUpcoming() {
    const dispatch=useDispatch()
    const getUpcomingMovies = async () => {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        API_OPTIONS
      );
      const json = await data.json();
     
    
      dispatch(addupcomingmovies(json?.results))
  
    }
    useEffect(()=>{
        getUpcomingMovies();
    },[])
  return (
    <div>
      
    </div>
  )
}
