import React from "react";
import { GetBlogById } from "@/app/lib/services";

type ParamsType = {
  params: {
    id: string;
  };
};

const page = async ({ params }: ParamsType) => {
  const blog = await GetBlogById(params.id);

  const day = blog?.createdAt.getDate().toString().padStart(2, "0");

  const month = blog?.createdAt
    .toLocaleString("en-EN", { month: "short" })
    .toUpperCase();

  const monthLong = blog?.createdAt.toLocaleString("en-EN", {
    month: "long",
  });

  const year = blog?.createdAt.getFullYear();

  const body: any = blog?.body as string;

  return (
    <div className="px-5 py-8 max-w-[1440px] mx-auto">
      <h1 className="text-2xl font-bold tracking-wider">
        {/* Bytes & Beyond: Where Tech meets imagination */}
        {blog?.title}
      </h1>

      <div className="flex justify-start items-center gap-3 mt-5 text-sm pb-5 border-b border-b-slate-300">
        <p className="">{`${day} ${monthLong} ${year}`}</p>
        <div className="h-[7px] w-[7px] bg-slate-500 rounded-full"></div>
        <p>{blog?.user.name}</p>
      </div>

      <p className="mt-5">{blog?.description}</p>

      <img src={blog?.images as string} alt="" />

      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: blog && body }}
      ></div>
    </div>
  );
};

export default page;
