import {UserInitialStateType} from "./user.interface";
import {createSlice} from "@reduxjs/toolkit";
import {register} from "./user.action";

export const initialState: UserInitialStateType = {
    user: null ,
    isLoading: false,
    error: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(register.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.user = payload.user;
                state.error = null;
            })
            .addCase(register.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.user = null;
                state.error = payload;
            })
    },
})

export const {reducer}  = userSlice