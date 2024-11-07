import prisma from "@/app/lib/prismadb";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

type UpdateParams = {
    blogId: string
}


export async function DELETE(req: NextRequest, {params}: {params: UpdateParams}){

    const blogId = params.blogId;

    const blog = await prisma.blog.findFirst({
        where:{
            id: blogId
        }
    })

   
    const currentBlog = await prisma.blog.delete({
        where: {
            id: blogId
        }
    });

    //revalidatePath("/dashboard/posts?tab=all");

    return NextResponse.json({userId: blog?.userId})

}