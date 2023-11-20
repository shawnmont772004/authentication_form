import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    loading: false,
    error:null,
}

const userSlice =createSlice({
    name:"user",
    initialState,
    reducers : {
        signinStart:(state)=>{
            state.loading = true;
        },
        signinSuccess:(state,action)=>{
            state.currentUser = action.payload;//payload refers to data
            state.loading = false;
            state.error=null;
        },
        signinFail:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const {signinStart,signinSuccess,signinFail}=userSlice.actions;
export default userSlice.reducer