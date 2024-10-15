

import React, { FormEvent, useEffect } from "react";
import { redirect, useRouter } from 'next/navigation'
import RegisterForm from "@/components/RegisterForm";


const page = async () => {



  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=yellow&shade=400"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-widest text-gray-900">
            Register
          </h2>
        </div>

        <RegisterForm color={"gray-900"} />
        
      </div>
    </div>
  );
};

export default page;
