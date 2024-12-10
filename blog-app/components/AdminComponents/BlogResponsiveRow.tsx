import React from 'react'
import ApproveDelete from './ApproveDelete'
import { ExtractDayYearMonth } from '@/app/lib/helpers'

const BlogResponsiveRow = ({blogProps}: BlogProps) => {

    const dateInfo = ExtractDayYearMonth(blogProps.createdAt);

  return (
    <div className='bg-sky-950/25 hover:bg-sky-950/55 duration-500 rounded-xl px-5 py-3 w-full flex flex-col gap-3'>
      <p className='text-xl font-bold'>{blogProps.title}</p>

      <p className=' line-clamp-3 mb-5'>{blogProps.description}</p>

      <div className='w-full flex justify-between items-center'>
        <p>{`${dateInfo.monthShort} ${dateInfo.day} ${dateInfo.year}`}</p>
        <p>{blogProps.isApproved == true ? "approved" : "not approved"}</p>
      </div>

      <ApproveDelete userId={blogProps.userId} blogId={blogProps.id} isApproved={blogProps.isApproved} path={`/dashboard/deleteusersblog/${blogProps.id}`}/>
    </div>
  )
}

export default BlogResponsiveRow
