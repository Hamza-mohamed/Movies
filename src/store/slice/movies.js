import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const moviesAction=createAsyncThunk("movies/getAll",
async ()=>{
    const res=await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=479a2ea26dd1cb4a73232a1287763e38')
    console.log(res.data.results,"dddsss");
    return res.data.results
}
)



const moviesSlice=createSlice({
name:"movies",
initialState:{movies:[]},
extraReducers:(builder)=>{
   
      builder.addCase(moviesAction.fulfilled,(state,action)=>{
        state.movies=action.payload
        console.log(action.payload,"pay");
       })
}

})
export default moviesSlice.reducer