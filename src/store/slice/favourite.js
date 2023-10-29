import { createSlice } from "@reduxjs/toolkit";

const faveSlice=createSlice({
    name:"fav",
    initialState:{fav:[]},
    reducers:{
      addToFav :function(state,action)  {
        action.payload[0].color="black"
        let movie=Object.values(action.payload)
        movie.color="red"
        state.fav.push(...movie)
      },
      removeFromFav :function(state,action)  {
        let movie=Object.values(action.payload)
        state.fav.pop(...movie)
      }
    }
})

export const {addToFav,removeFromFav}=faveSlice.actions

export default faveSlice.reducer
// let dispatch=useDispatch()
// dispatch(addToFav(movie))