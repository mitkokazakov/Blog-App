"use client";
import React, { useEffect, useState } from "react";
import "../../../node_modules/froala-editor/css/froala_style.min.css";
import FroalaEditor from "react-froala-wysiwyg";
import "../../../node_modules/froala-editor/css/froala_style.css";
import "../../../node_modules/froala-editor/css/froala_editor.css";
import "../../../node_modules/froala-editor/js/plugins/image.min.js";
import "../../../node_modules/froala-editor/js/plugins/image_manager.min.js";
import "../../../node_modules/froala-editor/js/plugins/align.min.js";
import "../../../node_modules/froala-editor/js/plugins/paragraph_format.min.js";
import "../../../node_modules/froala-editor/js/plugins/paragraph_style.min.js";
import "../../../node_modules/froala-editor/js/plugins/align.min.js";
import "../../../node_modules/froala-editor/js/plugins/lists.min.js";
import "../../../node_modules/froala-editor/js/plugins/save.min.js";
import "../../../node_modules/froala-editor/js/froala_editor.pkgd.min.js";
import "../../../node_modules/froala-editor/js/froala_editor.min.js";
import { v2 as cloudinary } from "cloudinary";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

cloudinary.config({
  cloud_name: "ddvfwyoek",
  api_key: "419694577789571",
  api_secret: "Lk_axhjstubw3CycN61LQYceDUQ",
});

type BufferType = {
  id: string;
  buffer: Buffer;
};

type TextEditorFields = {
  blogtitle: string,
  description: string,
  body: string

}

const TextEditorScheme = z.object({
  blogtitle: z.string().min(4, {message: "Title should be at least 4 characters long!"}),
  description: z
    .string()
    .min(4, { message: "Description should be at least 4 characters long!" }),
});



const page = () => {

  const [blog, setBlog] = useState(() => {
    let fromLocaleStorage = localStorage.getItem("blog") || "";

    return fromLocaleStorage;
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TextEditorFields>({
    resolver: zodResolver(TextEditorScheme),
  });

  const [images, setImages] = useState<BufferType[]>([]);

  const sendBlogInfo: SubmitHandler<TextEditorFields> = (data) => {
   
    const blogtitle = data.blogtitle;
    const description = data.description;
    const body = blog;

    const dataInput = {
      bolgtitle: blogtitle,
      description: description,
      body: body
    };

    console.log(dataInput);
    
  };


  return (
    <div className="mt-10 sm:mx-auto sm:w-full md:w-[800px]">
      <form onSubmit={handleSubmit(sendBlogInfo)} method="POST" className="space-y-6" encType="multipart/form-data">
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
            <span className="text-red-600 tracking-widest text-sm">{errors.blogtitle?.message}</span>
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
            <span className="text-red-600 tracking-widest text-sm">{errors.description?.message}</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Body
          </label>
          <div className="mt-2">

            <FroalaEditor
            
              config={{
                placeholderText: "Insert here",
                imageAllowedTypes: ["jpeg", "jpg", "png"],
                saveInterval: 1000,
                toolbarButtons: {
                  moreText: {
                    buttons: [
                      "italic",
                      "bold",
                      "underline",
                      "strikeThrough",
                      "subscript",
                      "superscript",
                    ],
                  },
                  moreParagraph: {
                    buttons: ["alignLeft", "alignRight", "alignCenter"],
                  },
                  moreRich: {
                    buttons: ["insertHR", "insertImage"],
                  },
                },
                events: {
                  "save.before": function (html: string) {
                    localStorage.setItem("blog", html);
                  },
                  "image.removed": function ($img: any) {

                    let id = $img.attr("id");

                    setImages((prevState) => {
                      return prevState.filter((i) => i.id !== id);
                    });

                    cloudinary.uploader.destroy(id);

                    console.log(id);
                  },
                  "image.inserted": function ($img: any) {
                    const image = $img;
                    console.log(image);

                    const src: string = $img.attr("src");

              

                    fetch(src)
                      .then((res) => res.blob())
                      .then(async (blob) => {
                        console.log(blob);
                        const bytes = await blob.arrayBuffer();
                        const buffer = Buffer.from(bytes);

                        let current = {
                          id: src,
                          buffer: buffer,
                        };

                        setImages((prevState) => [...prevState, current]);

                        const currentId = uuidv4();

                        console.log(currentId);
                        
                        

                        await new Promise((resolve, reject) => {
                          cloudinary.uploader.upload_stream({
                            public_id: currentId
                          }, function (error, result) {
                            if (error) {
                              reject(error);
                              return;
                            }
                            resolve(result);
                          })
                          .end(buffer);
                        });

                        await fetch(`/api/search?publicId=${currentId}`).then(res => res.json()).then(d => {
                          $img.attr("src",d.result.secure_url);
                          $img.attr("id",d.result.public_id)
                        } )
                        
                        

                      });
                  },
                },
              }}
              model={blog}
              onModelChange={(e: string) => setBlog(e)}
              tag="textarea"
              
            />

            <span className="text-red-600 tracking-widest text-sm"></span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <span className="text-red-600 tracking-widest text-sm"></span>
          </div>
        </div>

        <div>
          <button
            onClick={() => {
              console.log(images);
            }}
            type="submit"
            className="flex w-full justify-center rounded-md bg-[#ffffd7] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-[2px_2px_8px_0px_rgba(0,0,0,0.3)]  hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
