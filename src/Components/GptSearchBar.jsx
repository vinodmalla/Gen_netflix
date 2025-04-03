import React, { useState, useRef } from "react";
import lang from "../Utils/langConstants";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai"; // Import Google Generative AI SDK
import { API_OPTIONS, VITE_GENAI_API_KEY } from "../Utils/constants";
import { addgptmovieResuts } from "../Utils/gptSlice";

export default function GptSearchBar() {
   
    const searchText = useRef(null);
    const dispatch=useDispatch()
    const langkey = useSelector((state) => state.config.lang);
    const searchtmdbmovies=async(movie)=>{
        console.log(movie)
        const data=await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,API_OPTIONS);
        const json = await data.json();

    
        return json.results

   
        
    }
    const handleGPTsearchClick = async () => {
        console.log(searchText.current.value);
        const gptQuery = "Act as a movie recomendation system and suggest some movies for the query" + searchText.current.value + ". Only give me names of 10 movies, comma separated like the example given ahead. Example Result: Bhool bhulaiya,Shaadi mai jaroor aana,Koi mill gaya,Kabhi khushi kabhi gum,Andhadhun. Also give the results without any leading space"
        const genAI = new GoogleGenerativeAI(VITE_GENAI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(gptQuery);
        console.log(result.response.text());
        if (!result.response){
          // TODO: Writing Error Handling
          
        }
        const GenMovies = result.response.text().split(",")
        const promiseArray=GenMovies.map(movies=>searchtmdbmovies(movies))
        const tmdbresult= await Promise.all(promiseArray)
        console.log(tmdbresult)
        dispatch(addgptmovieResuts({movienames:GenMovies,movieResults:tmdbresult}))
        
    }
    return (
        <div className="pt-[45%] sm:pt-[20%] flex justify-center">
        <form 
            className="absolute z-50 flex flex-row ml-16 sm:flex-row items-center gap-2 sm:gap-4 w-full max-w-lg" 
            onSubmit={(e) => e.preventDefault()}
        >
            <input
                type="text"
                placeholder={lang[langkey].gptSearchPlaceholer}
                ref={searchText}
                className="p-2 w-[50%] mr-2 sm:w-96 bg-transparent border border-solid rounded-lg text-white bg-gradient-to-b from-black outline-none"
            />
            <button
                className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-900 w-1/6 m-2 sm:w-auto"
                onClick={handleGPTsearchClick}
            >
                {lang[langkey].search}
            </button>
        </form>
    </div>
    
    );
}
