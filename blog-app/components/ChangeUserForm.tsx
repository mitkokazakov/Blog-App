"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

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
    .string()
    .min(4, { message: "Password should be at least 4 characters long!" }),
});

const ChangeUserForm = ({color}: {color: string}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangeUserProfileProps>({
    resolver: zodResolver(RegisterSchema),
  });

  const registerUser: SubmitHandler<ChangeUserProfileProps> = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.newpassword;

    alert("OOP");
  };

  return (
    <div className=" sm:mx-auto sm:w-full sm:max-w-sm lg:min-w-[400px]">
      <form
        onSubmit={handleSubmit(registerUser)}
        method="PUT"
        className="space-y-6"
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
              id="name"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              id="email"
              type="email"
              required
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              required
              autoComplete="current-password"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  //setImage(e.target.files[0]);
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
