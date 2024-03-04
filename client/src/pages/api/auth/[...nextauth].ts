import {NextApiRequest, NextApiResponse} from "next";
import nextAuth from "next-auth";
import * as process from "process";
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import {AuthService} from "../../../services/auth.service";
import axios from "axios";
import {AuthUserResponse} from "../../../store/user/user.interface";
import {API_URL, getAuthUrl} from "../../../config/api.config";
import {setCookie} from "src/utils/cookie-persistance";



export default (req: NextApiRequest, res: NextApiResponse) => {
    adapter: TypeORMLegacyAdapter({
        type: 'mysql',
        username: process.env.server,
        password: process.env.aZJTA7W3Meu4oJTk,
        host: process.env.DATABASE_HOST,
        database: process.env.DATABASE_DB,
        synchronize: false
    })
    return nextAuth(req, res, {
        providers: [
            GoogleProvider({
                clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
                clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string
            }),
            GithubProvider({
                clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string,
                clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET as string
            })
        ],

        secret: process.env.NEXT_PUBLIC_SECRET_AUTH,
        callbacks: {
            async signIn({user}) {
                if (user) {
                    const email = user.email as string;
                    const checkUser = await AuthService.checkUser(email)
                    if (checkUser === 'user') {
                        const response = await axios.post<AuthUserResponse>(
                            `${API_URL}${getAuthUrl('login')}`,
                            {
                                email,
                                password: '',
                            }
                        );
                        setCookie(res, 'next-auth.access-token', response.data.accessToken, {
                            path: '/',
                            secure: true,
                            maxAge: 2592000
                        })
                        return true
                    } else if (checkUser === 'no-user') {
                        const response = await axios.post<AuthUserResponse>(
                            `${API_URL}${getAuthUrl('register')}`,
                            {
                                email,
                                password: '',
                            }
                        );
                        setCookie(res, 'next-auth.access-token', response.data.accessToken, {
                            path: '/',
                            secure: true,
                            maxAge: 2592000
                        })
                        return true
                    }
                }
                return false
            }
        }
    })
}

function TypeORMLegacyAdapter(arg0: { type: string; username: string | undefined; password: string | undefined; host: string | undefined; database: string | undefined; synchronize: boolean; }) {
    throw new Error("Function not implemented.");
}
