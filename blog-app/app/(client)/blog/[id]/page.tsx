import React from "react";
import { GetBlogById } from "@/app/lib/services";
import Link from "next/link";
import Image from "next/image";
import ErrorPage from "@/components/ErrorPage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/authoptions";

type ParamsType = {
  params: {
    id: string;
  };
};

const BlogPage = async ({ params }: ParamsType) => {

  const session = await getServerSession(authOptions);

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

  if (!blog) {
    return <ErrorPage text={"Blog with that id does not exist! Sorry."}/>
  }

  return (
    <div className="px-5 md:px-12 py-8 max-w-[1440px] 2xl:px-0 mx-auto">
      <h1 className="text-2xl font-bold tracking-wider">{blog?.title}</h1>

      <div className="flex justify-start items-center gap-3 mt-5 text-sm pb-5 border-b border-b-slate-300">
        <p className="">{`${day} ${monthLong} ${year}`}</p>
        <div className="h-[7px] w-[7px] bg-slate-500 rounded-full"></div>
        <p>{blog?.user.name}</p>
      </div>

      <p className="mt-5 text-lg text-justify font-medium mb-5">{blog?.description}</p>

      <Image
        src={blog?.images as string}
        alt=""
        className="w-full md:w-10/12 m-auto max-h-[700px] mb-5"
        width={1400}
        height={1000}
        priority={false}
      ></Image>

      <div
        className="blog-content text-lg mb-5"
        dangerouslySetInnerHTML={{ __html: blog && body }}
      ></div>

      {
        session?.user.role == "ADMIN" ? <div className="w-full flex justify-center">
        <Link
          href={"/dashboard/posts"}
          className="text-center bg-black text-white px-5 py-3 tracking-widest font-medium rounded-lg hover:bg-white hover:text-black hover:border-[1px] hover:border-black"
        >
          Back to Dashboard
        </Link>
      </div> : null
      }
    </div>
  );
};

export default BlogPage;
