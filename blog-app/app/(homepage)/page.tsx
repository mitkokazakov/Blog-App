import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className=" w-full h-screen bg-[url('../../images/cover.jpg')] bg-bottom bg-cover bg-no-repeat flex justify-center items-center">
      <div className="flex flex-col justify-center items-center mt-64 gap-10">
        <p className="font-extrabold text-[40px] text-white max-w-[350px]">Empower Your Voice. Illuminate minds.</p>
        <Link
          href={"/dashboard"}
          className="bg-[#ffffd7] px-8 py-2 font-bold text-xl tracking-widest"
        >
          Login
        </Link>
        <Link
          href={"/dashboard"}
          className="bg-[#ffffd7] px-8 py-2 font-bold text-xl tracking-widest"
        >
          Register
        </Link>
        <Link
          href={"/dashboard"}
          className="bg-[#ffffd7] px-8 py-2 font-bold text-xl tracking-widest"
        >
          Start to Read
        </Link>
      </div>
    </div>
  );
}
