import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../Utils/constants';
import { listTrailers } from '../Utils/MovieSlice';


export default function ListMovieVideo({keyword_id}) {
   
    
    const dispatch=useDispatch()
    const getPlayingMovies = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${keyword_id}/videos`,
        API_OPTIONS
      );
      const json = await data.json();
      const filterdata=json.results.filter((video)=>video.type==="Trailer");
      const trailer=filterdata.length? filterdata[0] : json.results[1];
      dispatch(listTrailers(trailer))
    
  
    }
    useEffect(() => {
        if (keyword_id) {
            getPlayingMovies();
        }
    }, [keyword_id]);
  return (
   <>
   </>
  )
}
