
import React from 'react'
import { API_OPTIONS } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import {addtopratedmovies} from "../Utils/MovieSlice"
import { useEffect } from 'react';

export default function useNowPlayingMovies() {
    const dispatch=useDispatch()
    const getTopRated = async () => {
      const data = await fetch(
       'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addtopratedmovies(json?.results))
    }
    useEffect(()=>{
        getTopRated();
    },[])
  return (
    <div>
      
    </div>
  )
}
