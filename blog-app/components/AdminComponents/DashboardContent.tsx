import Link from 'next/link'
import React from 'react'

const DashboardContent = () => {
  return (
    <div className="w-[300px] min-h-screen border-r-[1px] border-r-white">
        <Link href={"/dashboard/list"}>Users</Link>
        <Link href={"/dashboard/posts"}>Posts</Link>
        <Link href={"/dashboard/update"}>Tags</Link>
      </div>
  )
}

export default DashboardContent
