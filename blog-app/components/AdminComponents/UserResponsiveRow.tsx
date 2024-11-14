import { ExtractDayYearMonth } from '@/app/lib/helpers'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaRegUser } from 'react-icons/fa'

const UserResponsiveRow = ({
    id,
    name,
    image,
    isDeleted,
    createdAt,
    email,
    role,
  }: UserRowParams) => {

    const dateInfo = ExtractDayYearMonth(createdAt);

  return (
    <div className='w-full px-5 py-4 rounded-xl bg-sky-950 text-white flex flex-col items-start sm:items-center gap-5'>
      <div className='flex justify-center items-center gap-5'>
      
      <div className="w-12 h-12 rounded-full flex justify-center items-center bg-white">
            {image != null ? (
              <Image
                src={image}
                width={48}
                height={48}
                alt="op"
                className="w-full h-full rounded-full"
              ></Image>
            ) : null}

            {image == null ? (
              <FaRegUser className="text-3xl text-black" />
            ) : null}
          </div>

        <p className='text-lg font-bold tracking-widest'>{name}</p>
      </div>

      <div className='flex flex-col gap-3 justify-start items-center sm:w-full sm:flex-row sm:justify-between'>

        <div className='w-full flex flex-col gap-4'>
            <p className='text-sm'>Email: <span className='font-bold tracking-widest'>{email}</span></p>
            <p className='text-sm'>Role: <span className='font-bold tracking-widest'>{role}</span></p>
            <p className='text-sm'>Created At: <span className='font-bold tracking-widest'> {`${dateInfo.monthShort} ${dateInfo.day} ${dateInfo.year}`}</span></p>
            <p className='text-sm'>Status: <span className='font-bold tracking-widest'>{isDeleted == true ? "deleted" : "active"}</span></p>
        </div>

        <div className="w-full flex justify-start items-center gap-4  sm:flex-col sm:items-end">
          <Link
            href={`/dashboard/users/${id}`}
            className="min-w-20 text-center bg-green-500 px-3 py-1 rounded-lg"
          >
            View
          </Link>

          {isDeleted == false ? (
            <Link
              href={`/dashboard/deleteuser/${id}`}
              className="max-w-20 bg-red-500 px-3 py-1 rounded-lg"
            >
              Delete
            </Link>
          ) : null}

          <Link
            href={`/myprofile/${id}`}
            className="max-w-20 bg-yellow-500 px-3 py-1 rounded-lg"
          >
            Change
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserResponsiveRow
