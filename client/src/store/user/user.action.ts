import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthService} from "../../services/auth/auth.service";
import {AuthUserResponse, InterfaceEmailAndPassword} from "./user.interface";

export const register = createAsyncThunk<AuthUserResponse, InterfaceEmailAndPassword>('auth/register', async ({email, password}, thunkApi) => {
   try {
      const response = await AuthService.register(email, password);
      return response.data
   } catch (error){
       console.log('error')
       return thunkApi.rejectWithValue(error)
   }
})