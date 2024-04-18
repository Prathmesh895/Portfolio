import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { ConnectDB } from "@/models/sender";
import bcrypt from 'bcryptjs';
import  MYLOGIN from "@/lib/myschema";

export const authOptions={
    providers: [
        CredentialsProvider({
            name:"credentials",
            credentials:{},

            async authorize(credentials){
                const {email,password}=credentials;
               
                try {
                    await ConnectDB();
                    const user =await MYLOGIN.findOne({email});
                    if(!user){
                        return null;
                    }
                    if (!user || !bcrypt.compare(password, user.password)) {
                        return null;
                    }
                    return user;
                } catch (error) {
                    console.log("Error: ",error);
                }
            },
        })
    ],
    session:{
        strategy:"jwt",
    },
    secret:process.env.NEXTAUTH_SECRET,
    pages:{
        signIn:"/",
    },
}

const handler = NextAuth(authOptions);
export {handler as GET,handler as POST};