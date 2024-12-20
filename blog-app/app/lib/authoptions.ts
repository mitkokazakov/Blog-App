import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import prisma from "@/app/lib/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        //This is logic if we want to restrict user to log in if it is soft deleted
        // async profile(profile){
        //   const user = await prisma.user.findUnique({
        //     where: {
        //       email: profile.email,
        //     },
        //   });
  
        //   // If the user is soft-deleted or not found, throw an error
        //   if (!user || user.isDeleted) {
        //     throw new Error(
        //       "Your account is restricted or does not exist. Please contact support."
        //     );
        //   }

        //   return {
        //     id: user.id,
        //     name: user.name || profile.name,
        //     email: user.email,
        //     image: user.image || profile.picture,
        //     role: user.role,
        //   };

        // }
      }),
      CredentialsProvider({
        name: "credentials",
        credentials: {
          email: {
            label: "Email",
            type: "text",
            placeholder: "jsmith@yahoo.com",
          },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          //Check if there is am email and password
          if (!credentials?.email || !credentials.password) {
            throw new Error("Missing email or password!");
          }
  
          //Check if there is user with provided email
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });
  
          if (!user || !user?.hashedPassword || user?.isDeleted) {
            throw new Error("There is now user with this email.Sorry!");
          }
  
          //Check if the passwords matched
          const matchedPasswords = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );
  
          if (!matchedPasswords) {
            throw new Error("Incorect password!");
          }
  
          return user;
        },
      }),
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
      strategy: "jwt",
    },
    debug: process.env.NODE_ENV === "development",
  };