import {NextApiRequest, NextApiResponse} from "next";
import nextAuth from "next-auth";
import * as process from "process";
import GoogleProvider from 'next-auth/providers/google';

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
                    return 'success'
                }
                return 'failure'
            }
        }
    })
}