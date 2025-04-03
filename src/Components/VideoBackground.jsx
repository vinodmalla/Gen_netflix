import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../Utils/constants';
import { addPlayingtrailers } from '../Utils/MovieSlice';
import ReactPlayer from "react-player";


export default function VideoBackground({keyword_id}) {
    const nowPlayingTrailers=useSelector((store)=>store.movies?.nowPlayingTrailers)
    
    const dispatch=useDispatch()
    const getPlayingMovies = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${keyword_id}/videos`,
        API_OPTIONS
      );
      const json = await data.json();
      const filterdata=json.results.filter((video)=>video.type==="Trailer");
      const trailer=filterdata.length? filterdata[0] : json.results[1];
      dispatch(addPlayingtrailers(trailer))
    
  
    }
    useEffect(() => {
        if (keyword_id) {
            getPlayingMovies();
        }
    }, [keyword_id]);
  return (
    <div className='pt-6 bg-black sm:pt-0' controls autoPlay >
      <ReactPlayer  className="w-screen aspect-video" url={`https://www.youtube.com/watch?v=${nowPlayingTrailers?.key}`} playing muted width="100%" height="100%" />
       
      
    </div>
  )
}
