import Link from 'next/link'
import React from 'react'

const DashboardContent = () => {
  return (
    <div className="w-[300px] min-h-screen border-r-[1px] text-white border-r-white grid grid-cols-1">
        <Link href={"/dashboard/users"}>Users</Link>
        <Link href={"/dashboard/details"}>Posts</Link>
        <Link href={"/dashboard/update"}>Tags</Link>
      </div>
  )
}

export default DashboardContent
