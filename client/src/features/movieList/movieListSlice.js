import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchAllMovie, fetchProductByQuery , fetchMovieById } from "./movieListAPI"


const initialState = {
    movieList : [],
    movie : [],
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
    async ({query, type})=>{
        console.log("in asycc", type)
        const response = await fetchProductByQuery(query, type);
        return response;
    }
)

export const fetchMovieByIdAsync = createAsyncThunk(
    'movie/fetchMovieById',
    async({movieId})=>{
        const response = await fetchMovieById(movieId);
        return response;
    }
)


export const movieSlice = createSlice({
    name : "movieListApna",
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
        .addCase(fetchAllMovieAsync.fulfilled, (state,action)=>{
            state.status = "idle"
            state.movieList = action.payload
         })
        .addCase(fetchAllMovieByQueryAsync.pending, (state)=>{
            state.status = "loading"
         })
         .addCase(fetchAllMovieByQueryAsync.fulfilled, (state,action)=>{
            state.status = "idle"
            state.movieList = action.payload
         })
         .addCase(fetchMovieByIdAsync.pending, (state)=>{
            state.status = "loading"
         })
         .addCase(fetchMovieByIdAsync.fulfilled, (state,action)=>{
            state.status = "idle"
            state.movie = action.payload
         })
        
        
    },
});


export default movieSlice.reducer;

export const {increment}  = movieSlice.actions;

export const selectAllMovie = (state) => state.movieList.movieList;
export const selectSingleMovie = (state)=> state.movieList.movie;
