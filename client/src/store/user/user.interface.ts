import {UserType} from "../../interfaces/user.interface";

export interface UserInitialStateType {
    user: UserType | null,
    isLoading: boolean
}