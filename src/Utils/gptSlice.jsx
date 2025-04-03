import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieResults:null,
        movienames:null,

    },
    reducers:{
        togglegptview:(state,action)=> {
            state.showGptSearch=!state.showGptSearch;
        },
        addgptmovieResuts:(state,action)=>{
            const {movieResults,movienames}=action.payload;
            state.movienames=movienames;
            state.movieResults=movieResults;
        }
    }
})
export const {togglegptview,addgptmovieResuts}=gptSlice.actions;
export default gptSlice.reducer;