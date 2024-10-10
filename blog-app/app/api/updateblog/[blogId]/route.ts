import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

type UpdateParams = {
    blogId: string
}


export async function PUT(req: NextRequest, {params}: {params: UpdateParams}){

    const blogId = params.blogId;

    const body = await req.json();

    const {id, title, description, bodyContent, tags, userId, imageUrl}:{ id: string; title: string, description: string, bodyContent: string, tags: string, userId: string, imageUrl: string } = body;

    return NextResponse.json({message: `Okayy lets see the id ${blogId}`})

}