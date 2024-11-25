import prisma from "@/app/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  //const {title} = body;

  const {
    title,
    description,
    bodyContent,
    tags,
    userId,
    imageUrl
  }: {
    title: string;
    description: string;
    bodyContent: string;
    tags: string;
    userId: string;
    imageUrl: string
  } = body;

  if(title.length < 4 || description.length < 4 || body.length < 5 || tags.length < 1){
    return new NextResponse("Title, description, tags or body validation does not meet the requierements!", {status: 400});
  }

  if(imageUrl.length == 0){
    return new NextResponse("Image url is empty!", {status: 400});
  }

  const blog = await prisma.blog.create({
    data: {
      title: title,
      description: description,
      body: bodyContent,
      tags: tags,
      userId: userId,
      images: imageUrl
    },
  });

  return NextResponse.json({ blogId: blog.id });
}
