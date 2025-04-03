import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePlayingMovies from '../Hooks/usePlayingMovies';
import useUpcoming from '../Hooks/useUpcoming';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import Gptsearch from './Gptsearch';
import { useSelector } from 'react-redux';


function Broswer() {
  useNowPlayingMovies();
   usePlayingMovies();
   useUpcoming();
   useTopRatedMovies(); 
   const showGptSearch=useSelector(state=>state.gpt?.showGptSearch)
 

  return (
    <div>
      <Header/>
      {showGptSearch ? <Gptsearch /> : 
      <>
       <MainContainer />
       <SecondaryContainer />
      

      </>}
      
      
    </div>
  )
}

export default Broswer
