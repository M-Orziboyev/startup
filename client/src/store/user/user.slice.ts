import {UserInitialStateType} from "./user.interface";
import {createSlice} from "@reduxjs/toolkit";
import {register} from "./user.action";

export const initialState: UserInitialStateType = {
    user: null ,
    isLoading: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, state => {
            state.isLoading = true
        })
            .addCase(register.fulfilled, (state , {payload})=> {
            state.isLoading = false
        })
            .addCase(register.rejected, state => {
            state.isLoading = false
            state.user = null
        })
    },
})

export const {reducer}  = userSlice