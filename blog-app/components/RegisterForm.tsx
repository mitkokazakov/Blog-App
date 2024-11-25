
"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";

type RegisterFormFields = {
  name: string;
  email: string;
  password: string;
};

const RegisterSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Full name should be at least 2 characters long!" }),
  email: z.string().email(),
  password: z
    .string()
    .min(4, { message: "Password should be at least 4 characters long!" }),
});

const RegisterForm = ({color, role}: {color: string, role: string}) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormFields>({
    resolver: zodResolver(RegisterSchema),
  });

  const registerUser: SubmitHandler<RegisterFormFields> = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;

    try {
      const resp = await axios.post("/api/register", {
        name: name,
        email: email,
        password: password,
      });

      console.log(resp);

      if (resp.request.status === 200) {
        // if(role == 'user'){
        //   router.push("/login");
        // }

        // if(role == "admin"){
        //   router.push("/dashboard/users");
        //   router.refresh();
        // }
        //alert("Registration was successfuly");
        toast.success("Registration was successfuly");
        router.push('/login');

      } else {
        //alert(resp.request.responseText)
        toast.error(resp.request.responseText);
      }
    } catch (error: any) {
      // if(role == "user"){
      //   router.push("/");
      // }
      //alert(error.request.responseText);
      toast.error(error?.request.responseText);
    }
  };

 

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form
        onSubmit={handleSubmit(registerUser)}
        method="POST"
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
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              htmlFor="password"
              className={`block text-sm font-medium leading-6 text-${color}`}
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
              className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("password")}
            />
            <span className="text-red-600 tracking-widest text-sm">
              {errors?.password?.message}
            </span>
          </div>
        </div>

        <div>
        <button
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

export default RegisterForm;
