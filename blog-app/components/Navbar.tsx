"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import {  PiSignIn } from "react-icons/pi";

const Navbar = () => {

  const [dropdownActive, setDropdown] = useState(false);


  return (
    <div className='relative w-full h-20 bg-[#ffffd7] border-b-[1px] border-b-black flex justify-between items-center px-5'>

      <div>
        <p className=' tracking-widest'>NorthBlogs</p>
      </div>

      <div className='flex justify-center items-center gap-5'>
        {/* <Link href={"/"}>Login</Link> */}
        < PiSignIn className='text-[30px]' />
        <div onClick={() => {setDropdown(!dropdownActive)}} className='w-16 h-16 rounded-full bg-white flex justify-center items-center text-2xl'>M</div>
      </div>

      <div  className={`absolute overflow-hidden right-3 top-[101%] w-[150px] bg-white flex flex-col gap-5 justify-center items-start px-2 py-2 duration-500 ${dropdownActive ? 'h-32 opacity-1 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'}`}>
          <Link href={"/"}>My Blogs</Link>
          <Link href={"/"}>Create Blog</Link>
          <Link href={"/"}>Log Out</Link>
      </div>
      
    </div>
  )
}

export default Navbar
