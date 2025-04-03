import React, { useState } from 'react'


import { IMG_URL } from '../Utils/constants'
import { addlistmoviesDetais } from '../Utils/MovieSlice';


import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

export default function MoveCard({poster_path,movieData}) {
  
  const dispatch=useDispatch()
 
  if(!poster_path)return null;
 

  return (
    <div className='w-36 sm:w-48 pr-4' >
       <Link to="/moviedetails"><img  alt="Movie Card" src={IMG_URL+poster_path} onClick={()=>{
          dispatch(addlistmoviesDetais(movieData))
         }

        }
           /></Link> 
        
    </div>
   
  )
}
