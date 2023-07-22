import {UserType} from "../../interfaces/user.interface";

export interface UserInitialStateType {
    user: UserType | null,
    isLoading: boolean
}

export interface AuthTokens {
    refreshToken: string
    accessToken: string
}

export interface AuthUserResponse extends AuthTokens{
    user: UserType
}

export interface InterfaceEmailAndPassword {
    email: string
    password: string
}