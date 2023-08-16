import {NextApiRequest, NextApiResponse} from "next";
import nextAuth from "next-auth";
import * as process from "process";
import GoogleProvider from 'next-auth/providers/google';
import {AuthService} from "../../../services/auth.service";

export default (req: NextApiRequest, res: NextApiResponse) => {
    return nextAuth(req, res, {
        providers: [
            GoogleProvider({
                clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
                clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string
            })
        ],
        secret: process.env.NEXT_PUBLIC_SECRET_AUTH,
        callbacks: {
            async signIn({user}) {
                if(user){
                    const email = user.email as string;
                    const checkUser = await AuthService.checkUser(email)
                    if (checkUser === 'user') {
                        await AuthService.login(email, '')
                    }else if(checkUser === 'no-user'){
                        await  AuthService.register(email, '')
                    }
                    return true
                }
                return false
            }
        }
    })
}