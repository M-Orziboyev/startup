import {UserType} from "../../interfaces/user.interface";

export interface UserInitialStateType {
    user: UserType | null,
    isLoading: boolean
    error: null | string | unknown
}

export interface AuthTokens {
    refreshToken: string
    accessToken: string
}

export interface AuthUserResponse extends AuthTokens{
    user: UserType
}

export interface InterfaceEmailAndPassword {
    password: string
    email: string
}