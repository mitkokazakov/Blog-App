"use client";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { IoClose } from "react-icons/io5";

import { useSession } from "next-auth/react";
import axios from "axios";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type TextEditorFields = {
  blogtitle: string;
  description: string;
  body: string;
  tags: string[];
};

const TextEditorScheme = z.object({
  blogtitle: z
    .string()
    .min(4, { message: "Title should be at least 4 characters long!" }),
  description: z
    .string()
    .min(4, { message: "Description should be at least 4 characters long!" }),
});

const CreateBlogForm = () => {
  const [blog, setBlog] = useState("");

  const router = useRouter();

  const [tags, setTags] = useState<string[]>([]);

  const [image, setImage] = useState<File>();

  const [errorTags, setErrorTags] = useState<boolean>(false);

  const [bodyError, setBodyErrors] = useState<boolean>(false);

  const { data: session, status } = useSession();

  useEffect(() => {
    let fromLocaleStorage = localStorage.getItem("blog") || "";
    setBlog(fromLocaleStorage);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TextEditorFields>({
    resolver: zodResolver(TextEditorScheme),
  });

  const sendBlogInfo: SubmitHandler<TextEditorFields> = async (data) => {
    const blogtitle = data.blogtitle;
    const description = data.description;
    const body = blog;

    console.log(blog.length);
    

    if(blog.length < 20){
      setBodyErrors(true);
      return;
    }

    if (tags.length == 0) {
      setErrorTags(true);
      return;
    }

    
    // const bytes: any = await image?.arrayBuffer();
    // const buffer = Buffer.from(bytes);

    const currentId = uuidv4();

    const formData = new FormData();

    formData.append("image", image as File);
    formData.append("imageId", currentId);

    let imageUrl = "";

    try {
      const response = await axios.post("/api/uploadimage", formData);

      if (response.status == 200) {
        console.log(response);
        console.log(response.data?.imageId);

        await fetch(`/api/search?publicId=${currentId}`)
          .then((res) => res.json())
          .then((d) => {
            //setImageUrl(d.result.secure_url);
            imageUrl = d.result.secure_url;
          });

        console.log(imageUrl);
      }

      if (response.status != 200) {
        toast.error("Something went wrong!");
      }
    } catch (error: any) {
      toast.error("Something went wrong during uploading the image!");
    }

    try {
      const resp = await axios.post("/api/sendblog", {
        title: blogtitle,
        description: description,
        bodyContent: body,
        tags: tags.join(","),
        userId: session?.user.id as string,
        imageUrl: imageUrl,
      });

      if (resp.request.status === 200) {
        console.log(resp);

        router.push(`/blog/${resp.data.blogId}`);
        toast.success("You have successfully added post!");
        localStorage.setItem("blog", "");
        router.refresh();
      } else {
        //alert(resp.request.responseText);
        toast.error(resp.request.responseText);
      }
    } catch (error: any) {
      console.log("Error");
      toast.error("Something went wrong when tried to upload the blog!");
      //toast.error(error?.request.responseText);
    }

    setErrorTags(false);
    setBodyErrors(false);
  };

  const addTag = (currentTag: string) => {
    if (!tags.includes(currentTag)) {
      setTags((prevState) => [...prevState, currentTag]);
    }
  };

  const removeTag = (currentTag: string) => {
    if (tags.includes(currentTag)) {
      setTags((prevState) => {
        return prevState.filter((i) => i !== currentTag);
      });
    }
  };

  return (
    <div className="px-5 mt-10 pb-10 sm:mx-auto sm:w-full md:w-[800px]">
      <form
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
        onSubmit={handleSubmit(sendBlogInfo)}
        method="POST"
        className="space-y-6"
        encType="multipart/form-data"
      >
        <div>
          <label
            htmlFor="blogtitle"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Title
          </label>
          <div className="mt-2">
            <input
              id="blogtitle"
              type="text"
              required
              className="block w-full border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("blogtitle")}
            />
            <span className="text-red-600 tracking-widest text-sm">
              {errors.blogtitle?.message}
            </span>
          </div>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Short Description
          </label>
          <div className="mt-2">
            <textarea
              id="description"
              required
              className="block w-full border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              rows={7}
              {...register("description")}
            />
            <span className="text-red-600 tracking-widest text-sm">
              {errors.description?.message}
            </span>
          </div>
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Image
          </label>
          <div className="mt-2">
            <input
              id="image"
              required
              className="bg-white block w-full border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="file"
              onChange={(e) => {
                if (e.target.files) {
                  setImage(e.target.files[0]);
                }
              }}
            />
            <span className="text-red-600 tracking-widest text-sm"></span>
          </div>
        </div>

        <div>
          <label
            htmlFor="body"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Body
          </label>
          <div className="mt-2">
            <ReactQuill
              id="body"
              className="bg-white"
              theme="snow"
              value={blog}
              onChange={(e) => {
                setBlog(e);
                localStorage.setItem("blog", e);
                if(blog.length >= 20){
                  setBodyErrors(false);
                }else{
                  setBodyErrors(true);
                }
              }}
            />

            <span className="text-red-600 tracking-widest text-sm">{bodyError ? "Body should be at least 10 characters long" : null}</span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="tags"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Tags
            </label>
          </div>
          <div className="mt-2 pl-2 flex items-center bg-white">
            {tags?.map((tag) => {
              return (
                <div
                  key={tag}
                  className="flex items-center bg-slate-100 rounded-lg px-2 mr-2"
                >
                  <p className="mr-2">{tag}</p>
                  <IoClose
                    id={tag}
                    className="cursor-pointer"
                    onClick={(e) => {
                      const currentTag = e.currentTarget.id;
                      console.log(currentTag);
                      removeTag(currentTag);
                      if (tags.length == 0) {
                        setErrorTags(true);
                      }
                    }}
                  />
                </div>
              );
            })}

            <input
              id="tags"
              type="text"
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none border-none"
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  console.log(e.key);

                  addTag(e.currentTarget.value);

                  setErrorTags(false);

                  e.currentTarget.value = "";
                }
              }}
            />
          </div>
          <span className="text-red-600 tracking-widest text-sm">
            {errorTags == true ? "You should have at least one tag" : ""}
          </span>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-[#ffffd7] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-[2px_2px_8px_0px_rgba(0,0,0,0.3)]  hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogForm;
