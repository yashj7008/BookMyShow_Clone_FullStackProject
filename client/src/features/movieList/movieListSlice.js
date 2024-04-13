import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchAllMovie, fetchProductByQuery } from "./movieListAPI"


const initialState = {
    movieList : [],
    status : "idle"
}


export const fetchAllMovieAsync = createAsyncThunk(
    'movie/fetchAllMovies',
    async ()=>{
        const response = await fetchAllMovie();
        return response;
    }
)

export const fetchAllMovieByQueryAsync = createAsyncThunk(
    'movie/fetchAllMoviesByQuery',
    async (query)=>{
        const response = await fetchProductByQuery(query);
        return response;
    }
)


export const movieSlice = createSlice({
    name : "movieList",
    initialState,
    reducers :{
        increment : (state) =>{
            state.value += 1
        },
    },
    extraReducers : (builder)=>{
        builder
        .addCase(fetchAllMovieAsync.pending, (state)=>{
           state.status = "loading"
        })
        .addCase(fetchAllMovieByQueryAsync.fulfilled, (state, action)=>{
            state.status = "idle",
            state.movieList = action.payload,

         });
        
    },
});


export default movieSlice.reducer;

export const {increment}  = movieSlice.actions;

export const selectAllMovie = (state) => state.movieList.movieList;
