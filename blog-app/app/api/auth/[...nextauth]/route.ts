import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import prisma from "@/app/lib/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {

    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            // authorization: {
            //     params: {
            //       prompt: "consent",
            //       access_type: "offline",
            //       response_type: "code",
            //     },
            //   }
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith@yahoo.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials){
                const user = {id: "1", email: "testmail@yahoo.com"} 

                if(user){

                    return user;
                }
                else{
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, session }) {
      
            console.log("JWT Callback", { token, user, session });
      
            return { ...token, ...user };
          },

          async session({ session, token }) {
      
            session.user.id = token.id;
            session.user.role = token.role;
      
            return session;
          },
    },
    secret: process.env.SECRET,
    session: {
        strategy: "jwt"
    },
    debug: process.env.NODE_ENV === "development"
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}