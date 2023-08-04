import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthService} from "../../services/auth.service";
import {AuthUserResponse, InterfaceEmailAndPassword} from "./user.interface";
import {errorCatch} from "../../helpers/api.helper";

export const register = createAsyncThunk<AuthUserResponse, InterfaceEmailAndPassword>('auth/register', async({email, password}, thunkApi) => {
   try {
      const response = await AuthService.register(email, password);
      return response.data
   } catch (error){
       console.log(error)
       return thunkApi.rejectWithValue(errorCatch(error))
   }
})
export const login = createAsyncThunk<AuthUserResponse, InterfaceEmailAndPassword>('auth/login', async({email, password}, thunkApi) => {
   try {
      const response = await AuthService.login(email, password);
      return response.data
   } catch (error){
       console.log(error)
       return thunkApi.rejectWithValue(errorCatch(error))
   }
})

export const logout = createAsyncThunk('auth/logout', () => {
    AuthService.logout()
})

export const checkAuth = createAsyncThunk<AuthUserResponse>('auth/check-auth', async(_, thunkAPI) => {
    try {
        const response = await AuthService.getNewToken()
        return response.data
    }catch (error){
        console.log(error)
        return thunkAPI.rejectWithValue(error)
    }
})