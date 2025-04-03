import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Broswer from './Broswer'
import { RouterProvider } from 'react-router-dom';
import Login from './Login';
import MovieDetails from './MovieDetails';




function Body() {
  const approuter=createBrowserRouter([
    {
        path:"/",
        element:<Login />
    },
    {
        path:"/broswer",
        element:<Broswer />
    },
    {
      path:"/moviedetails",
      element:<MovieDetails />
    }
])


  return (
    <div>
        <RouterProvider router={approuter} />
        
  


      
    </div>
  )
}

export default Body
