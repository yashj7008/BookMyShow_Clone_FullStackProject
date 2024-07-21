import { configureStore } from '@reduxjs/toolkit'
import movieListReducer from '../features/movieList/movieListSlice'
import theatreListReducer from '../features/theatres/theatreSlice'
import showReducer from '../features/shows/showSlice'
import authReducer from "../features/auth/authSlice"

export const  store = configureStore({
    reducer: {
        movieList: movieListReducer,
        theatreList : theatreListReducer,
        show : showReducer,
        auth : authReducer

      }
   
})