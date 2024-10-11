import prisma from "@/app/lib/prismadb";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

type UpdateParams = {
    userId: string
}


export async function GET(req: NextRequest, {params}: {params: UpdateParams}){

    const userId = params.userId;

    const user = await prisma.user.findFirst({
        where:{
            id: userId
        },
        select:{
            image: true,
            name: true
        }
    })

    return NextResponse.json({user})

}