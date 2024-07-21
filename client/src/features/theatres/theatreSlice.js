import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { loadTheatreList } from "./theatreAPI"


const initialState = {
    theatreList : [],
    status : "idle"
}


export const fetchAllTheatreAsync = createAsyncThunk(
    'movie/fetchAllTheatre',
    async ({movieId})=>{
        const response = await loadTheatreList(movieId);
        return response;
    }
)




export const theatreSlice = createSlice({
    name : "theatres",
    initialState,
    reducers :{
        increment : (state) =>{
            state.value += 1
        },
    },
    extraReducers : (builder)=>{
        builder
        .addCase(fetchAllTheatreAsync.pending, (state)=>{
           state.status = "loading"
        })
        .addCase(fetchAllTheatreAsync.fulfilled, (state,action)=>{
            state.status = "idle"
            state.theatreList = action.payload
         })
       
        
        
    },
});


export default theatreSlice.reducer;

export const {increment}  = theatreSlice.actions;

export const selectAllTheatres = (state) => state.theatreList.theatreList;

