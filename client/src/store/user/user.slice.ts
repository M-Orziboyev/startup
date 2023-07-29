import {UserInitialStateType} from "./user.interface";
import {createSlice} from "@reduxjs/toolkit";
import {checkAuth, login, logout, register} from "./user.action";

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
            .addCase(login.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.user = payload.user;
                state.error = null;
            })
            .addCase(login.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.user = null;
                state.error = payload;
            })
            .addCase(logout.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.user = null;
                state.error = payload;
            })
            .addCase(checkAuth.fulfilled, (state, { payload }) => {
                state.user = payload.user;
            })
    },
})

export const {reducer}  = userSlice