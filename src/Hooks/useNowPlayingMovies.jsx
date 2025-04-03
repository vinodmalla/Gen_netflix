
import React from 'react'
import { API_OPTIONS } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import {addPlayingmovies} from "../Utils/MovieSlice"
import { useEffect } from 'react';

export default function useNowPlayingMovies() {
    const dispatch=useDispatch()
    const getNowPlayingMovies = async () => {
      const data = await fetch(
       'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addPlayingmovies(json?.results))
    }
    useEffect(()=>{
      getNowPlayingMovies();
    },[])
  return (
    <div>
      
    </div>
  )
}
