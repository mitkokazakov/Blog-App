"use client";
import Link from "next/link";
import React, { useState } from "react";
import { PiSignIn } from "react-icons/pi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { SlLogout } from "react-icons/sl";
import { PiReadCvLogoLight } from "react-icons/pi";

import { useSession } from "next-auth/react";

const Navbar = () => {
  const [dropdownActive, setDropdown] = useState(false);

  const { data: session, status } = useSession();

  return (
    <div className="relative w-full h-20 bg-[#ffffd7] border-b-[1px] border-b-black flex justify-between items-center px-5 lg:px-20">
      <div>
        <Link href={"/"} className=" tracking-widest font-bold text-lg">
          NorthBlogs
        </Link>
      </div>

      <div className="flex justify-center items-center gap-5">
        {session == null ? (
          <Link href={"/"} className="text-xl tracking-widest font-medium">
            Login
          </Link>
        ) : null}

        {session == null ? (
          <Link href={"/"} className="text-xl tracking-widest font-medium">
            Register
          </Link>
        ) : null}

        {session != null ? (
          <div
            onClick={() => {
              setDropdown(!dropdownActive);
            }}
            className="w-16 h-16 rounded-full bg-white flex justify-center items-center text-2xl cursor-pointer"
          >
            M
          </div>
        ) : null}
        
      </div>

      <div
        className={`absolute overflow-hidden min-w-[250px] right-3 lg:right-20 top-[101%] rounded-3xl bg-transparent backdrop-blur-sm flex flex-col gap-9 justify-center items-start px-8 py-5 duration-500 ${
          dropdownActive
            ? "h-64 opacity-1 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={() => {
            setDropdown(!dropdownActive);
          }}
          className="w-full flex justify-start items-center gap-5 cursor-pointer py-2 hover:bg-[#fffbc2]"
        >
          <PiReadCvLogoLight className="text-2xl" />
          <Link href={"/myblogs"} className="font-medium">
            My Blogs
          </Link>
        </div>

        <div
          onClick={() => {
            setDropdown(!dropdownActive);
          }}
          className="w-full flex justify-start items-center gap-5 cursor-pointer py-2 hover:bg-[#fffbc2]"
        >
          <IoIosAddCircleOutline className="text-2xl" />

          <Link href={"/create"} className="font-medium">
            Create Blog
          </Link>
        </div>

        <div
          onClick={() => {
            setDropdown(!dropdownActive);
          }}
          className="w-full flex justify-start items-center gap-5 cursor-pointer py-2 hover:bg-[#fffbc2]"
        >
          <SlLogout className="text-2xl" />
          <Link href={"/"} className="font-medium">
            Log Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
