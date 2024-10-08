import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { DateTime } from "next-auth/providers/kakao";

type BlogProps = {
  blogProps: {
    id: string,
    createdAt: Date;
    title: string;
    body: string;
    description: string;
    username?: string;
    tags: string;
  };
};

const SingleBlog = async ({ blogProps }: BlogProps) => {
  const session = await getServerSession(authOptions);

  const day = blogProps.createdAt.getDate().toString().padStart(2,'0');
  const month = blogProps.createdAt.toLocaleString('en-EN', { month: 'short' }).toUpperCase();
  const monthLong = blogProps.createdAt.toLocaleString('en-EN', { month: 'long' });
  const year = blogProps.createdAt.getFullYear();

  return (
    <div className="w-full flex justify-center items-start md:gap-5 border-b-[0.1px] border-b-black py-4 md:max-w-[1440px]">
      <div className="hidden md:flex md:flex-col justify-center items-end">
        <p className="text-lg font-bold">{day}</p>
        <p className="text-lg font-bold">{month}</p>
        <p className="text-lg font-bold">{year}</p>
      </div>

      <div className="w-full flex flex-col gap-5 justify-center items-start">
        <h1 className="text-xl font-bold tracking-wider">
          {blogProps.title}
          
        </h1>

        <p className="line-clamp-3 md:line-clamp-5 text-sm">
          {blogProps.description}
        </p>

        <div className="w-full flex justify-between items-center md:justify-end">
          <p className="md:hidden">{`${day} ${monthLong} ${year}`}</p>
          <p>{blogProps.username}</p>
        </div>

        <div className="w-full flex justify-between items-center gap-3">
          <div className="flex justify-start items-center gap-3">
            {
              blogProps.tags.split(',').map(t => {
                return <p className="cursor-pointer">#{t}</p>
              })
            }
          </div>

          <div>
            {session != null ? (
              <Link
                href={"/change"}
                className="bg-yellow-200 px-3 py-2 rounded-lg"
              >
                Change
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
