import Link from 'next/link'
import React from 'react'

const DashboardContent = () => {
  return (
    <div className="w-[400px] min-h-screen border-r-[1px] text-white border-r-white flex flex-col gap-3 py-5 px-2">
        <Link href={"/dashboard/users"} className='px-5 py-3 hover:bg-[#21334c] font-bold tracking-widest focus:bg-[#21334c]'>Users</Link>
        <Link href={"/dashboard/posts"} className='px-5 py-3 hover:bg-[#21334c] font-bold tracking-widest focus:bg-[#21334c]'>Posts</Link>
      </div>
  )
}

export default DashboardContent
