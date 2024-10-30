import prisma from "@/app/lib/prismadb";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

type UpdateParams = {
    blogId: string
}


export async function DELETE(req: NextRequest, {params}: {params: UpdateParams}){

    const blogId = params.blogId;

    // const body = await req.json();

    // const {id, title, description, bodyContent, tags, userId, imageUrl}:{ id: string; title: string, description: string, bodyContent: string, tags: string, userId: string, imageUrl: string } = body;

    const currentBlog = await prisma.blog.delete({
        where: {
            id: blogId
        }
    });

    //revalidatePath("/dashboard/posts?tab=all");

    return NextResponse.json({message: `The Blog has been deleted successfully`})

}