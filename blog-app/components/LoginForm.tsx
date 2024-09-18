"use client";
import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(4, { message: "Password should be at least 4 characters long!" }),
});

type LoginFormFields = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>({
    resolver: zodResolver(LoginSchema),
  });

  const loggUser: SubmitHandler<LoginFormFields> = (data) => {
   
    const email = data.email;
    const password = data.password;

    const dataInput = {
      email: email,
      password: password,
    };
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleSubmit(loggUser)} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
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
              {errors.email?.message}
            </span>
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
              {...register("password")}
            />
            <span className="text-red-600 tracking-widest text-sm mt-1">
              {errors.password?.message}
            </span>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-[#ffffd7] px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-[2px_2px_8px_0px_rgba(0,0,0,0.3)]  hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
          >
            Sign in
          </button>
        </div>
      </form>

      <div className="w-full min-h-9 mt-10 relative">
        <div className="absolute top-[50%] w-full h-[1px] bg-zinc-400 "></div>
        <div className=" bg-[#ffffd7] min-w-[200px] flex justify-center items-center py-3 px-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <p>Or continue with</p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-5">
        <button>
          <div className="flex justify-center items-center gap-3 border-zinc-400 border-[1px] px-16 py-1 rounded-lg">
            <img
              className="w-8 h-8 bg-transparent"
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt="Google"
            />
            <p>Google</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
