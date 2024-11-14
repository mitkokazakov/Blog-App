import React from 'react'
import ApproveDelete from './ApproveDelete'

const BlogResponsiveRow = ({ blogProps }: BlogProps) => {
  return (
    <div className='bg-sky-950 rounded-xl px-5 py-3 w-full flex flex-col gap-3'>
      <p className='text-xl font-bold'>{blogProps.title}</p>

      <p className=' line-clamp-3 mb-5'>{blogProps.description}</p>

      <div className='w-full flex justify-between items-center'>
        <p>{'22 May 2024'}</p>
        <p>{blogProps.isApproved == true ? "approved" : "not approved"}</p>
      </div>

      <ApproveDelete userId={blogProps.userId} blogId={blogProps.id} isApproved={blogProps.isApproved} path={`/dashboard/deleteusersblog/${blogProps.id}`}/>
    </div>
  )
}

export default BlogResponsiveRow
