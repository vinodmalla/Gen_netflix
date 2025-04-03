import { createSlice } from "@reduxjs/toolkit";

const MovieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        nowPlayingTrailers:null,
        nowPlayingTrending:null,
        upComingMovies:null,
        toRatedMovies:null,
        listTrailers:null,
        listmoviesDetais:null

    },
    reducers:{
        addPlayingmovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPlayingtrailers:(state,action)=>{
            state.nowPlayingTrailers=action.payload
        },
        addPlayingtrending:(state,action)=>{
            state.nowPlayingTrending=action.payload
        },
        addupcomingmovies:(state,action)=>{
            state.upComingMovies=action.payload
        },
        addtopratedmovies:(state,action)=>{
            state.toRatedMovies=action.payload
        },
        listTrailers:(state,action)=>{
            state.listTrailers=action.payload
        },
        addlistmoviesDetais:(state,action)=>{
            state.listmoviesDetais=action.payload
        }
        

    }

})
export const {addPlayingmovies,addPlayingtrailers,addPlayingtrending,addupcomingmovies,addtopratedmovies,listTrailers,addlistmoviesDetais}=MovieSlice.actions;
export default MovieSlice.reducer;