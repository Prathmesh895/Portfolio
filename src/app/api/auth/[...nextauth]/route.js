import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import { ConnectDB } from "@/models/sender";
import NextAuth from "next-auth";
import MYLOGIN from "@/lib/myschema";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email", required: true },
                password: { label: "Password", type: "password", required: true }
            },
            async authorize(credentials) {
                const { email, password } = credentials;
                console.log("Credentials received:", email, password);
                try {
                    await ConnectDB();
                    const user = await MYLOGIN.findOne({ email });
                    if (!user) {
                        console.log("No user found with email:", email);
                        return null;
                    }

                    const isPasswordValid = await bcrypt.compare(password, user.password);
                    console.log("Password valid:", isPasswordValid);

                    if (!isPasswordValid) {
                        console.log("Invalid password for user:", email);
                        return null;
                    }

                    console.log("User authenticated:", user);
                    return user;
                } catch (error) {
                    console.error("Error during authentication:", error);
                    throw new Error("Failed to authenticate");
                }
            }
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.role = user.role;
            return token;
        },
        async session({ session, token }) {
            if (token?.role) session.user.role = token.role;
            return session;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };