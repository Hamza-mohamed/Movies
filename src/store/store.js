import { configureStore } from "@reduxjs/toolkit";
import fav from './slice/favourite'
import moviesReducer  from'./slice/movies'

export const store = configureStore({
    reducer: {
        myFavs: fav,
        movies:moviesReducer 
    }
})

/*

{

    language:{language:"en"},
    counter:{counter:0},
    loader:{loader:false}
}
*/