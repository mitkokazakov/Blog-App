import Link from "next/link";
import React from "react";

import { getServerSession } from "next-auth";
import { authOptions } from "../lib/authoptions";
import LogOut from "@/components/LogOut";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const sessionText = JSON.stringify(session);

  return (
    <div className="homepage w-full min-h-screen bg-[url('/cover.jpg')] bg-scroll bg-cover bg-no-repeat flex justify-center items-center">
      <div className="min-h-screen w-full py-10 flex flex-col justify-between items-center">
        <div className="w-full px-6 md:px-10">
          <p className="font-extrabold text-[36px] max-w-[350px] text-white md:text-[40px]">
            Empower Your Voice. Illuminate minds.
          </p>

          <p>{session == null ? "not logged in" : sessionText}</p>
        </div>

        <div className="w-full px-10 flex flex-col justify-center items-center  gap-10">
          {session == null ? (
            <Link
              href={"/login"}
              className="w-full bg-[#ffffd7] px-8 py-2 cursor-pointer opacity-80 hover:opacity-100 font-medium text-xl tracking-widest text-center sm:w-64"
            >
              Login
            </Link>
          ) : null}

          {session == null ? (
            <Link
              href={"/register"}
              className="w-full bg-[#ffffd7] px-8 py-2 cursor-pointer opacity-80 hover:opacity-100 font-medium text-xl tracking-widest text-center sm:w-64"
            >
              Register
            </Link>
          ) : null}

          {session != null ? (
            <div
              className="w-full bg-[#ffffd7] px-8 py-2 cursor-pointer opacity-80 hover:opacity-100 font-medium text-xl tracking-widest text-center sm:w-64"
            >
              <LogOut color={"black"}/>
            </div>
          ) : null}
          <p className="font-bold text-xl text-white">OR</p>

          <Link
            href={"/blogs"}
            className="w-full bg-[#ffffd7] px-8 py-2 cursor-pointer opacity-80 hover:opacity-100 font-medium text-xl tracking-widest text-center sm:w-64"
          >
            Start to Read
          </Link>
        </div>
      </div>
    </div>
  );
}
