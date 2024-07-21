import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { login , register , checkAuth} from "./authAPI"


const initialState = {
    loggedInUserToken: null, // this should only contain user identity => 'id'/'role'
    status : "idle",
    error : null,
    userChecked : false
}

export const createUserAsync = createAsyncThunk(
    'user/createUser',
    async ({fullName,role, email, password})=>{
        const response = await register(fullName,role, email, password);
        return response;
    }
)

export const loginUserAsync = createAsyncThunk(
    'user/loginUser',
    async ({email, password})=>{
        const response = await login(email, password);
        return response;
    }
)

export const checkAuthAsync = createAsyncThunk('user/checkAuth', async () => {
    try {
      const response = await checkAuth();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  });



export const authSlice = createSlice({
    name : "user",
    initialState,
    reducers :{
        increment : (state) =>{
            state.value += 1
        },
    },
    extraReducers : (builder)=>{
        builder
        .addCase(loginUserAsync.pending, (state)=>{
           state.status = "loading"
        })
        .addCase(loginUserAsync.fulfilled, (state,action)=>{
            state.status = "idle"
            state.loggedInUserToken = action.payload
         })
         .addCase(createUserAsync.pending, (state)=>{
            state.status = "loading"
         })
         .addCase(createUserAsync.fulfilled, (state,action)=>{
             state.status = "idle"
             state.loggedInUserToken = action.payload
          })
          .addCase(createUserAsync.rejected, (state,action)=>{
            state.status = "idle"
            state.loggedInUserToken = action.error
         })
         .addCase(checkAuthAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(checkAuthAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.loggedInUserToken = action.payload;
            state.userChecked = true;
          })
          .addCase(checkAuthAsync.rejected, (state, action) => {
            state.status = 'idle';
            state.userChecked = false;
          })
       
        
        
    },
});


export default authSlice.reducer;

export const {increment}  = authSlice.actions;

export const selectLoggedInUser = (state) => state.auth.loggedInUserToken;
export const selectError = (state) => state.auth.error;
export const selectUserChecked = (state) => state.auth.userChecked;