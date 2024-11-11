import SingleBlog from "@/components/SingleBlog";
import React from "react";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/authoptions";
import { GetAllBlogs, GetAllBlogsByTag } from "@/app/lib/services";

type TagParams = {
    params: {
        tagId: string
    }
}

const TagPage = async ({params}: TagParams) => {

  const session = await getServerSession(authOptions);

  const blogs = await GetAllBlogsByTag(params.tagId);

  return (
    <div className=" w-full min-h-screen bg-[#ffffd7] px-5 py-5 ">
      <div className="w-full pb-5 mb-5 text-left md:text-center">
        <h1 className=" text-3xl font-bold mb-3">Write. Share. Inspire. </h1>

        <p className="text-lg">Where Words Transcend Boundaries, Navigating the Blogging Seas.</p>

        <p className="text-2xl tracking-widest mt-10 font-semibold">All blogs related to: #{params.tagId}</p>
      </div>

      <div className="w-full flex flex-col gap-8 md:items-center md:justify-center">
        {
          blogs.map(blog => {
            return <SingleBlog key={blog.id} blogProps={blog}/>
          })
        }
      </div>
    </div>
  );
};

export default TagPage;
