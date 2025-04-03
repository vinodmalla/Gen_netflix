import React from 'react'
import ListMovieVideo from './ListMoviesVideo'
import VideoTitle from './VideoTitle'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from './Header'

export default function MovieDetails() {
const listTrailers=useSelector((store)=>store.movies?.listTrailers)
const listmoviesDetais=useSelector(store=>store.movies?.listmoviesDetais)
const {original_title,overview,id}=listmoviesDetais;
  return (
  
        <div className="h-full object-cover fixed  w-full bg-black  p-0 text-white"> 
        
        <Link to="/broswer"><button className=' m-4  w-12 h-12 rounded-full font-bold text-4xl text-opacity-55 hover:bg-slate-500'>←</button></Link>
        
        <VideoTitle  title={original_title} overview={overview}/>
        <ListMovieVideo keyword_id={id} />
        <div className='w-full sm:w-screen' controls autoPlay >
            <ReactPlayer  className="w-screen aspect-video" url={`https://www.youtube.com/watch?v=${listTrailers?.key}`} playing unmuted width="100%" height="100%" />
        </div>
        </div>

  )
}
