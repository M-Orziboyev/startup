import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthService} from "../../services/auth.service";
import {AuthUserResponse, InterfaceSign} from "./user.interface";
import {errorCatch} from "../../helpers/api.helper";

export const register = createAsyncThunk<AuthUserResponse, {
    email: string
    password: string,
    callback: () => void
}>('auth/register', async ({
                               email,
                               password,
                               callback
                           }, thunkApi) => {
    try {
        const response = await AuthService.register(email, password);
        callback()
        return response.data
    } catch (error) {
        console.log(error)
        return thunkApi.rejectWithValue(errorCatch(error))
    }
})
export const login = createAsyncThunk<AuthUserResponse, {
    email: string
    password: string,
    callback: () => void
}>('auth/login', async ({
                            email,
                            password,
                            callback
                        }, thunkApi) => {
    try {
        const response = await AuthService.login(email, password);
        callback()
        return response.data
    } catch (error) {
        console.log(error)
        return thunkApi.rejectWithValue(errorCatch(error))
    }
})

export const sendVerificationCode = createAsyncThunk<'Success', {
    email: string,
    isUser: boolean,
    callback: () => void
}>("auth/verification-code", async ({email, isUser, callback}, thunkApi) => {
    try {
        const response = await AuthService.sendOtp(email, isUser);
        callback()
        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(errorCatch(error))
    }
})
export const verifyVerificationCode = createAsyncThunk<'Success', {
    email: string,
    otpVerification: string, callback: () => void
}>("auth/verify-code", async ({email, otpVerification, callback}, thunkApi) => {
    try {
        const response = await AuthService.verifyOtp(email, otpVerification)
        callback()
        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(errorCatch(error))
    }
})
export const editProfilePassword = createAsyncThunk<'Success', {
    email: string,
    password: string, callback: () => void
}>("auth/edit-profile", async ({email, password, callback}, thunkApi) => {
    try {
        const response = await AuthService.editProfilePassword(email, password)
        callback()
        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(errorCatch(error))
    }
})

export const logout = createAsyncThunk('auth/logout', () => {
    AuthService.logout()
})

export const checkAuth = createAsyncThunk<AuthUserResponse>('auth/check-auth', async (_, thunkAPI) => {
    try {
        const response = await AuthService.getNewToken()
        return response.data
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error)
    }
})