import prisma from "@/app/lib/prismadb";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

type UpdateParams = {
    blogId: string
}


export async function PUT(req: NextRequest, {params}: {params: UpdateParams}){

    const blogId = params.blogId;

    const body = await req.json();

    const {id, title, description, bodyContent, tags, userId, imageUrl}:{ id: string; title: string, description: string, bodyContent: string, tags: string, userId: string, imageUrl: string } = body;

    const currentBlog = await prisma.blog.findFirst({
        where: {
            id: blogId
        }
    });

    const updatedBlog = await prisma.blog.update({
        data:{
            title: title,
            description: description,
            body: bodyContent,
            tags: tags,
            images: imageUrl == null ? currentBlog?.images : imageUrl,
            createdAt: new Date(),
        },
        where:{
            id: blogId
        }
    })

    return NextResponse.json({message: `The Blog is updated successfully`})

}