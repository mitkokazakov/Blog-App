
import prisma from "@/app/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
    
    const body = await request.json();

    const {name, email, password}:{ name: string; email: string, password: string } = body;

    //console.log(name,email,password);

    if(!name || !email || !password){
        return new NextResponse("You should fill in all fields", {status: 400});
    }

    const existingUser = await prisma.user.findFirst({
        where:{
            email: email
        }
    });

    if(name.length < 2 || password.length < 4){
        return new NextResponse("Name or Password does not meet the min length requirements!", {status: 400})
    }

    if(existingUser){
        return new NextResponse("User with this email already exist!", {status: 400});
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user = await prisma.user.create({
        data: {
          email: email,
          name: name,
          hashedPassword: hashedPassword
        },
      })

    return NextResponse.json({user})
    
}