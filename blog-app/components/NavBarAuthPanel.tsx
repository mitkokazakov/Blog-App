"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { SlLogout } from "react-icons/sl";
import { PiReadCvLogoLight } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { FaList } from "react-icons/fa6";


import LogOut from "./LogOut";
import axios from "axios";
import Image from "next/image";

const NavBarAuthPanel = ({
  sessionStatus,
  userId,
  userRole
}: {
  sessionStatus: boolean;
  userId: string;
  userRole: string;
}) => {
  const [dropdownActive, setDropdown] = useState(false);

  const [userImage, setUserImage] = useState<string>("");

  const [userLetters, setUserLetters] = useState<string>("");

  useEffect(() => {
    async function FetchUserImage() {
      try {
        const response = await axios.get(`/api/userimage/${userId}`);

        console.log(response);

        setUserImage(response?.data.user.image);

        setUserLetters(response?.data.user.name[0].toUpperCase());
      } catch (error: any) {
        alert(error);
        console.log(error);
      }
    }

    if (sessionStatus == true) {
      FetchUserImage();
    }
  });

  return (
    <div className="">
      <div className="flex justify-center items-center gap-5 sm:gap-8 md:gap-16">
        {sessionStatus == false ? (
          <Link href={"/login"} className=" tracking-widest font-medium">
            Login
          </Link>
        ) : null}

        {sessionStatus == false ? (
          <Link href={"/register"} className=" tracking-widest font-medium">
            Register
          </Link>
        ) : null}

        {sessionStatus == true ? (
          <div
            onClick={() => {
              setDropdown(!dropdownActive);
            }}
            className="w-16 h-16 overflow-hidden rounded-full bg-white flex justify-center items-center text-2xl cursor-pointer"
          >
            {userImage != null && userImage != "" ? (
              <Image
                src={userImage}
                width={500}
                height={500}
                quality={100}
                loading="lazy"
                alt="user image"
                className="max-w-full max-h-full object-cover aspect-[1/1]"
              ></Image>
            ) : null}

            {userImage == null || userImage == "" ? <p>{userLetters}</p> : null}
          </div>
        ) : null}
      </div>

      <div
        className={`absolute overflow-hidden min-w-[250px] right-3 lg:right-20 top-[101%] rounded-3xl bg-transparent backdrop-blur-sm flex flex-col gap-9 justify-center items-start px-8 py-5 duration-500 ${
          dropdownActive
            ? "h-auto opacity-1 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }`}
      >

<div
          onClick={() => {
            setDropdown(!dropdownActive);
          }}
          className="w-full flex justify-start items-center gap-5 cursor-pointer py-2 hover:bg-[#fffbc2]"
        >
          <FaList className="text-2xl" />
          <Link href={"/blogs"} className="font-medium">
            All Blogs
          </Link>
        </div>

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
          <FaRegUser className="text-2xl" />

          <Link href={`/myprofile/${userId}`} className="font-medium">
            My Profile
          </Link>
        </div>

        {
          userRole == "ADMIN" ? <div
          onClick={() => {
            setDropdown(!dropdownActive);
          }}
          className="w-full flex justify-start items-center gap-5 cursor-pointer py-2 hover:bg-[#fffbc2]"
        >
          <RxDashboard className="text-2xl" />

          <Link href={`/dashboard`} className="font-medium">
            Dashboard
          </Link>
        </div> : null
        }

        <div
          onClick={() => {
            setDropdown(!dropdownActive);
          }}
          className="w-full flex justify-start items-center gap-5 cursor-pointer py-2 hover:bg-[#fffbc2]"
        >
          <SlLogout className="text-2xl" />

          <LogOut color={"black"} />
        </div>
      </div>
    </div>
  );
};

export default NavBarAuthPanel;
