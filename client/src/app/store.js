import { configureStore } from '@reduxjs/toolkit'
import movieListReducer from '../features/movieList/movieListSlice'

export const  store = configureStore({
      movies : movieListReducer
})