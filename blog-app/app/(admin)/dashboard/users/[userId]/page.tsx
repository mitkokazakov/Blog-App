import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full bg-[#0f0f11] h-screen text-white flex flex-col gap-8 px-10 py-10'>
     <div>
        <h1 className="font-bold tracking-widest text-2xl mb-10">User Info</h1>
      </div>

      <div className='flex justify-center items-center gap-40'>
        <div className='w-72 h-72 rounded-full'>
            <img src="/user.png" alt="user" className='w-full h-full rounded-full'/>
        </div>

        <div className='flex flex-col justify-start items-start gap-5'>
            <h1 className='text-2xl font-bold tracking-widest'>Mitko Kazakov</h1>
            <p>Phone Number: <span className='font-bold tracking-widest'>08966523223</span></p>
            <p>Email: <span className='font-bold tracking-widest'>dimitark@gmail.com</span></p>
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
      </div>
    </div>
  )
}

export default page
