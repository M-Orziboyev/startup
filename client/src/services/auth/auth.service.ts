import {API_URL, getAuthUrl} from "../../config/api.config";
import {AuthUserResponse} from "../../store/user/user.interface";
import {saveStorage, saveTokensCookie} from "../../helpers/auth.helper";
import axios from "axios"

export const AuthService = {
    async register(email: string, password: string) {
        const response = await axios.post<AuthUserResponse>(
            `${API_URL}${getAuthUrl('register')}`,
            {
                email,
                password,
            }
        );

        if (response.data.accessToken) {
            saveStorage(response.data);
        }

        return response
    }
}