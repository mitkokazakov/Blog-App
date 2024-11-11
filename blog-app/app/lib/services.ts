import { revalidatePath } from "next/cache";
import prisma from "./prismadb";
export const dynamic = 'force-dynamic'

export async function FetchImages() {
  // "use server"

  const allImgs = await fetch(
    `https://api.cloudinary.com/v1_1/ddvfwyoek/resources/image`,
    {
      mode: "no-cors",
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY +
            ":" +
            process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
        ).toString("base64")}`,
        "Access-Control-Allow-Origin": "*",
      },
    }
  );

  const response = allImgs.json();

  return response;
}

type BlogInfo = {
  title: string;
  description: string;
  images?: string;
  tags: string;
  userId: string;
  body: string;
};
export async function SubmitBlog(blogInfo: BlogInfo) {
  const blog = await prisma.blog.create({
    data: {
      title: blogInfo.title,
      description: blogInfo.description,
      body: blogInfo.body,
      tags: blogInfo.tags,
      userId: blogInfo.userId,
    },
  });
}

export async function GetUser(userId: string) {
  const currentUser = prisma.user.findFirst({
    where: {
      id: userId,
    },
  });

  return currentUser;
}

type SingleBlogProps = {
  id: string;
  createdAt: Date;
  title: string;
  body: string;
  description: string;
  username: string;
  tags: string;
  userId: string,
  isApproved: boolean
};

export async function GetAllUserBlogs(userId: string) {
  const currentUser = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      blogs: true,
    },
  });

  const userBlogs = currentUser?.blogs;

  const userBlogsArray: SingleBlogProps[] = [];

  userBlogs?.map((blog) => {
    const currentBlog = {
      id: blog.id,
      createdAt: blog.createdAt,
      title: blog.title,
      body: blog.body,
      description: blog.description,
      username: currentUser?.name as string,
      tags: blog.tags,
      userId: blog.userId,
      isApproved: blog.isApproved
    };

    userBlogsArray.push(currentBlog)
  });

  return userBlogsArray;
}

export async function GetAllBlogs(){

  const allBlogs = await prisma.blog.findMany({
    include:{
      user: true
    }
  });

  return allBlogs;
}

export async function GetAllBlogsByTag(tag: string){

  const allBlogs = await prisma.blog.findMany({
    where:{
      tags: {
        contains: tag
      }
    },
    include:{
      user: true
    }
  });

  return allBlogs;
}

export async function GetBlogById(id: string){

  const currentBlog = await prisma.blog.findFirst({
    where:{
      id: id
    },
    include:{
      user: true
    }
  })

  return currentBlog;

  
}

export async function GetAllUsers(){
"use server"
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

  revalidatePath("/dashboard/users");
  return users;
}

export async function GetUserByIdWithBlogs(userId: string){

  const currentUser = prisma.user.findFirst({
    where: {
      id: userId,
    },
    include:{
      blogs: true
    }
  });

  return currentUser;
}

export async function ApproveBlog  (blogId: string, userId: string) {
  "use server"
  const updatedBlog = await prisma.blog.update({
    data: {
      isApproved: true,
    },
    where: {
      id: blogId,
    },
  });

  revalidatePath(`/dashboard/users/${userId}`);

  if(!updatedBlog){
    return {error: "Could not approve blog!"}
  }

  return { success: "Blog has been approved successufull!"}
  

  
};
