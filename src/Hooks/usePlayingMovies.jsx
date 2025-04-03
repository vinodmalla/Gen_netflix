import React from 'react'
import { addPlayingtrending } from '../Utils/MovieSlice';
import { API_OPTIONS } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
export default function useNowPlayingMovies() {
    const dispatch=useDispatch()
    const getPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
     
    
      dispatch(addPlayingtrending(json?.results))

    }
    useEffect(()=>{
      getPlayingMovies();
    },[])
  return (
    <div>
      
    </div>
  )
}
