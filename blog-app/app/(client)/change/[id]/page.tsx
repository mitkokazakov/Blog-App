//"use client";
import React, { useEffect, useState } from "react";
import { v2 as cloudinary } from "cloudinary";
import "react-quill/dist/quill.snow.css";
import { GetBlogById } from "@/app/lib/services";
import ChangeForm from "@/components/ChangeForm";

cloudinary.config({
  cloud_name: "ddvfwyoek",
  api_key: "419694577789571",
  api_secret: "Lk_axhjstubw3CycN61LQYceDUQ",
});

type ParamsType = {
  params: {
    id: string;
  };
};

const page = async ({ params }: ParamsType) => {

  const blogId = params.id;

  const blog = await GetBlogById(blogId);

  const blogData = {
    id: blog?.id as string,
    title: blog?.title as string,
    description: blog?.description as string,
    body: blog?.body as string,
    tags: blog?.tags as string,
    createdAt: blog?.createdAt as Date
  }

  return (
    <div className="mt-10 pb-10 sm:mx-auto sm:w-full md:w-[800px]">
      <h1 className="text-center font-bold text-2xl mb-10">Change Blog</h1>

      <ChangeForm blogData={blogData}/>
    </div>
  );
};

export default page;
