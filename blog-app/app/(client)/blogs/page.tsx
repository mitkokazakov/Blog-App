import SingleBlog from "@/components/SingleBlog";
import React from "react";

const page = () => {
  return (
    <div className=" w-full min-h-screen bg-[#ffffd7] px-5 py-5 ">
      <div className="w-full pb-5 mb-5 text-left md:text-center">
        <h1 className=" text-3xl font-bold mb-3">Write. Share. Inspire. </h1>

        <p>Where Words Transcend Boundaries, Navigating the Blogging Seas.</p>
      </div>

      <div className="w-full flex flex-col md:items-center md:justify-center">
        <SingleBlog />
        <SingleBlog />
        <SingleBlog />
      </div>
    </div>
  );
};

export default page;
