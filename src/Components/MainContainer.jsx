import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';


export default function MainContainer() {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies)return;
    const index = Math.floor(Math.random() * movies.length);

    const mainMovies=movies[index]
    const {  original_title,overview,id }=mainMovies;
  return (
    <div className='pt-[20%] bg-black sm:pt-0'>
        <VideoTitle  title={original_title} overview={overview}/>
        <VideoBackground keyword_id={id} />
      
    </div>
  )
}
