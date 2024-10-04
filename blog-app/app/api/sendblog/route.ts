import prisma from "@/app/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

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

  return NextResponse.json({ blog });
}
