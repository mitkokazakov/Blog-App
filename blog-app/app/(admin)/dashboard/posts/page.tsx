import DashboardAllPosts from '@/components/AdminComponents/DashboardAllPosts'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="w-full bg-[#0f0f11] h-screen text-white flex flex-col gap-8 px-10 py-10">
      <div>
        <h1 className="font-bold tracking-widest text-2xl">All Posts</h1>
      </div>

      <DashboardAllPosts />

      {/* <div className="flex justify-between items-center">
          <input
            type="text"
            name="username"
            id="username"
            className="px-4 py-1 bg-slate-800 rounded-lg"
            placeholder="Search for a post"
          />

          <div className='flex justify-center items-center gap-5'>
            <Link href={'/'} className='bg-yellow-600 px-3 py-2 rounded-lg tracking-widest'>Approved</Link>
            <Link href={'/'} className='bg-yellow-600 px-3 py-2 rounded-lg tracking-widest'>Not approved</Link>
            <Link href={'/'} className='bg-yellow-600 px-3 py-2 rounded-lg tracking-widest'>All</Link>
          </div>

          <div>
          <Link href={"/"} className="bg-purple-600 px-3 py-2 rounded-lg">
            Add Post
          </Link>
          </div>
        </div>

        <div>
        <table className="table-auto border-collapse border border-slate-400 w-full">
            <thead>
              <tr>
                <th className="text-left border border-slate-800 px-4 py-4">
                  Blog Title
                </th>
                <th className="text-left border border-slate-800 px-4 py-4">
                  Short Description
                </th>
                <th className="text-left border border-slate-800 px-4 py-4">
                  Created at
                </th>
                <th className="text-left border border-slate-800 px-4 py-4">
                  Status
                </th>
                <th className="text-left border border-slate-800 px-4 py-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left border border-slate-800 px-4 py-4 ">
                  <p className=' line-clamp-1'>Best places to see the northern lights</p>
                </td>
                <td className="text-left border border-slate-800 px-4 py-4 ">
                  <p className=' line-clamp-1 max-w-[300px]'>The best places to see the northern light is probably Norway, Finland, Iceland and Canada.</p> 
                </td>
                <td className="text-left border border-slate-800 px-4 py-4">
                  Nov 04 2024
                </td>
                <td className="text-left border border-slate-800 px-4 py-4">
                  approved
                </td>
                <td className="text-left border border-slate-800 px-4 py-4 ">
                  <Link
                    href={"/dashboard/users/33"}
                    className="bg-green-500 px-3 py-1 rounded-lg mr-5"
                  >
                    View
                  </Link>
                  <Link href={"/"} className="bg-red-500 px-3 py-1 rounded-lg">
                    Delete
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
    </div>
  )
}

export default page
