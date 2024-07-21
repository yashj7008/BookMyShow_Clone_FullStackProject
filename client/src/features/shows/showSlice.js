import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getShowDetail } from "./showAPI"


const initialState = {
    show : [],
    status : "idle"
}


export const fetchShowAsync = createAsyncThunk(
    'movie/fetchShow',
    async ({showId})=>{
        const response = await getShowDetail(showId);
        return response;
    }
)




export const showSlice = createSlice({
    name : "show",
    initialState,
    reducers :{
        increment : (state) =>{
            state.value += 1
        },
    },
    extraReducers : (builder)=>{
        builder
        .addCase(fetchShowAsync.pending, (state)=>{
           state.status = "loading"
        })
        .addCase(fetchShowAsync.fulfilled, (state,action)=>{
            state.status = "idle"
            state.show = action.payload
         })
       
        
        
    },
});


export default showSlice.reducer;

export const {increment}  = showSlice.actions;

export const selectShow = (state) => state.show.show;

