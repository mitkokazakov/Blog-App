import SingleBlog from "@/components/SingleBlog";
import React from "react";

import { authOptions } from "@/app/lib/authoptions";
import { getServerSession } from "next-auth";
import { GetAllUserBlogs } from "@/app/lib/services";

const page = async () => {
  const session = await getServerSession(authOptions);

  const blogs = await GetAllUserBlogs(session?.user.id as string);

  return (
    <div className="w-full min-h-screen bg-[#ffffd7] px-5 py-10 flex flex-col gap-10">
      <h1 className=" font-bold tracking-widest text-2xl text-center">
        My Blogs
      </h1>

      <div className="w-full flex flex-col gap-8 md:items-center md:justify-center">
        {blogs.length == 0 ? (
          <h1 className="text-center text-3xl tracking-widest font-bold mt-20">
            Currently there are no blogs!
          </h1>
        ) : null}
        {blogs.map((b) => {
          return <SingleBlog key={b.id} blogProps={b} />;
        })}
      </div>
    </div>
  );
};

export default page;
