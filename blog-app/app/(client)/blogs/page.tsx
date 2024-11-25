import SingleBlog from "@/components/SingleBlog";
import React from "react";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/authoptions";
import { GetAllApprovedBlogs, GetAllBlogs } from "@/app/lib/services";

const BlogsPage = async () => {

  const session = await getServerSession(authOptions);

  const blogs = await GetAllApprovedBlogs();

  return (
    <div className=" w-full min-h-screen bg-[#ffffd7] px-5 py-5 ">
      <div className="w-full pb-5 mb-5 text-left md:text-center">
        <h1 className=" text-3xl font-bold mb-3">Write. Share. Inspire. </h1>

        <p className="text-lg">Where Words Transcend Boundaries, Navigating the Blogging Seas.</p>
      </div>

      <div className="w-full flex flex-col gap-8 md:items-center md:justify-center">
        {
          blogs.length == 0 ? <h1 className="text-center text-3xl tracking-widest font-bold mt-20">Currently there are no blogs!</h1> : null
        }
        {
          blogs.map(blog => {
            return <SingleBlog key={blog.id} blogProps={blog}/>
          })
        }
      </div>
    </div>
  );
};

export default BlogsPage;
