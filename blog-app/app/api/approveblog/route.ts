import prisma from "@/app/lib/prismadb";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest){

    const body = await req.json()

    const {blogId, userId} = body;

    const updatedBlog = await prisma.blog.update({
        data: {
          isApproved: true,
        },
        where: {
          id: blogId,
        },
      });
    
      revalidatePath(`/dashboard/users/${userId}`);

    return NextResponse.json({updatedBlog})
}