
import React, { useEffect, useState } from "react";

import "react-quill/dist/quill.snow.css";
import CreateBlogForm from "@/components/CreateBlogForm";



const CreatePage = () => {

  return (
    <div className="mt-10 pb-10 sm:mx-auto sm:w-full md:w-[800px]">
      <h1 className=" text-center text-3xl font-bold tracking-widest">Create Blog</h1>

      <CreateBlogForm />
    </div>
  );
};

export default CreatePage;
