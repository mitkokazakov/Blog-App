import prisma from "@/app/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(res: NextRequest){

    const users = await prisma.user.findMany({
        select:{
          id: true,
          image: true,
          name: true,
          isDeleted: true,
          createdAt: true,
          role: true,
          email: true
        }
      });

      return NextResponse.json({users: users});

}