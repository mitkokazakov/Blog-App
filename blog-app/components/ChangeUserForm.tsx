"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useRouter } from "next/navigation";

type ChangeUserProfileProps = {
  name: string;
  email: string;
  newpassword: string;
};

const RegisterSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Full name should be at least 2 characters long!" }),
  email: z.string().email(),
  newpassword: z
    .union([
      z
        .string()
        .length(0, {
          message: "Password should be at least 4 characters long!",
        }),
      z
        .string()
        .min(4, { message: "Password should be at least 4 characters long!" }),
    ])
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
});

const ChangeUserForm = ({
  color,
  name,
  email,
  userId,
}: {
  color: string;
  name: string;
  email: string;
  userId: string;
}) => {
  const [image, setImage] = useState<File>();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangeUserProfileProps>({
    resolver: zodResolver(RegisterSchema),
  });

  const changeUser: SubmitHandler<ChangeUserProfileProps> = async (data) => {
    const name = data.name;
    const email = data.email;
    const newpassword = data.newpassword;

    const formData = new FormData();

    let imageUrl = "";

    if (image) {
      const currentImageId = uuidv4();

      const formImageData = new FormData();

      formImageData.append("image", image as File);
      formImageData.append("imageId", currentImageId);

      const res = await axios.post("/api/uploadimage", formImageData);

      if (res.status === 200) {
        const imageId = res.data?.imageId;

        await fetch(`/api/search?publicId=${imageId}`)
          .then((res) => res.json())
          .then((d) => {
            //setImageUrl(d.result.secure_url);
            imageUrl = d.result.secure_url;
          });
          
      } else {
        alert("Something went wrong!");
      }
    }

    formData.append("name", name);
    formData.append("email", email);
    formData.append("newpassword", newpassword);
    formData.append("imageUrl", imageUrl);

    const updateResponse = await axios.put(
      `/api/updateuser/${userId}`,
      formData
    );

    if (updateResponse.status == 200) {
      alert("User has been updated successfully");
      router.refresh();
    } else {
      alert("Wrong!");
    }
  };

  return (
    <div className=" sm:mx-auto sm:w-full sm:max-w-sm lg:min-w-[400px]">
      <h1 className="font-bold text-lg text-center tracking-widest mb-10">
        Change User
      </h1>
      <form
        onSubmit={handleSubmit(changeUser)}
        method="PUT"
        className="space-y-6"
        encType="multipart/form-data"
      >
        <div>
          <label
            htmlFor="name"
            className={`block text-sm font-medium leading-6 text-${color}`}
          >
            Full Name
          </label>
          <div className="mt-2">
            <input
              value={name}
              id="name"
              type="text"
              required
              className="block w-full px-3 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("name")}
            />
            <span className="text-red-600 tracking-widest text-sm">
              {errors?.name?.message}
            </span>
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className={`block text-sm font-medium leading-6 text-${color}`}
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              value={email}
              id="email"
              type="email"
              required
              autoComplete="email"
              className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("email")}
            />
            <span className="text-red-600 tracking-widest text-sm">
              {errors?.email?.message}
            </span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="newpassword"
              className={`block text-sm font-medium leading-6 text-${color}`}
            >
              New password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="newpassword"
              type="password"
              autoComplete="current-password"
              className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("newpassword")}
            />
            <span className="text-red-600 tracking-widest text-sm">
              {errors?.newpassword?.message}
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
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-[#ffffd7] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-[2px_2px_8px_0px_rgba(0,0,0,0.3)]  hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
          >
            Change
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangeUserForm;
