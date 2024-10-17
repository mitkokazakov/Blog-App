"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { IoIosAddCircleOutline } from "react-icons/io";
import { SlLogout } from "react-icons/sl";
import { PiReadCvLogoLight } from "react-icons/pi";
import LogOut from "../LogOut";
import axios from "axios";

const NavBarAuthPanel = ({ sessionStatus, userId }: { sessionStatus: boolean, userId: string }) => {
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
      <div className="flex justify-center items-center gap-5">
        {sessionStatus == false ? (
          <Link href={"/"} className="text-xl tracking-widest font-medium">
            Login
          </Link>
        ) : null}

        {sessionStatus == false ? (
          <Link href={"/"} className="text-xl tracking-widest font-medium">
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
            {userImage && <img src={userImage}></img>}

            {userImage == null ? <p>{userLetters}</p> : null}
          </div>
        ) : null}
      </div>

      <div
        className={`absolute bg-white overflow-hidden min-w-[250px] right-3 lg:right-20 top-[101%] rounded-3xl bg-transparent backdrop-blur-sm flex flex-col gap-9 justify-start items-start px-8 py-5 duration-500 ${
          dropdownActive
            ? "h-64 opacity-1 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={() => {
            setDropdown(!dropdownActive);
          }}
          className="w-full flex justify-start items-center gap-5 cursor-pointer py-2 "
        >
          <PiReadCvLogoLight className="text-2xl text-black" />
          <Link href={"/blogs"} className="font-medium text-black ">
            All Blogs
          </Link>
        </div>


        <div
          onClick={() => {
            setDropdown(!dropdownActive);
          }}
          className="w-full flex justify-start items-center gap-5 cursor-pointer py-2 "
        >
          <SlLogout className="text-2xl text-black" />
          {/* <Link href={"/"} className="font-medium">
            Log Out
          </Link> */}
          <LogOut color={"black"}/>
        </div>
      </div>
    </div>
  );
};

export default NavBarAuthPanel;
