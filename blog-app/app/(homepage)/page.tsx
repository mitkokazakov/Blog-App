import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className=" w-full h-screen bg-[url('../../images/cover.jpg')] bg-bottom bg-cover bg-no-repeat flex justify-center items-center">
      <div className="h-full w-full py-10 flex flex-col justify-between items-center">
        <div className="w-full px-6 md:px-10">
          <p className="font-extrabold text-[36px] max-w-[350px] text-white md:text-[40px]">
            Empower Your Voice. Illuminate minds.
          </p>
        </div>

        <div className="w-full px-10 flex flex-col justify-center items-center  gap-10">
          <Link
            href={"/dashboard"}
            className="w-full bg-[#ffffd7] px-8 py-2 font-medium text-xl tracking-widest text-center sm:w-64"
          >
            Login
          </Link>
          <Link
            href={"/dashboard"}
            className="w-full bg-[#ffffd7] px-8 py-2 font-medium text-xl tracking-widest text-center sm:w-64"
          >
            Register
          </Link>
          <p className="font-bold text-xl text-white">OR</p>
          <Link
            href={"/dashboard"}
            className="w-full bg-[#ffffd7] px-8 py-2 font-medium text-xl tracking-widest text-center sm:w-64"
          >
            Start to Read
          </Link>
        </div>
      </div>
    </div>
  );
}
