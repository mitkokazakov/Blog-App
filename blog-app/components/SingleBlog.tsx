import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { DateTime } from "next-auth/providers/kakao";
import { ExtractDayYearMonth } from "@/app/lib/helpers";

type BlogProps = {
  blogProps: {
    id: string;
    createdAt: Date;
    title: string;
    body: string;
    description: string;
    username?: string;
    tags: string;
    userId: string
  };
};

const SingleBlog = async ({ blogProps }: BlogProps) => {
  const session = await getServerSession(authOptions);

  const dateInfo  = ExtractDayYearMonth(blogProps.createdAt);

  const day = blogProps.createdAt.getDate().toString().padStart(2, "0");
  const month = blogProps.createdAt
    .toLocaleString("en-EN", { month: "short" })
    .toUpperCase();
  const monthLong = blogProps.createdAt.toLocaleString("en-EN", {
    month: "long",
  });
  const year = blogProps.createdAt.getFullYear();

  return (
    <div className="w-full flex justify-center items-start md:gap-5 border-b-[0.1px] border-b-black py-4 md:max-w-[1440px]">
      <div className="hidden md:flex md:flex-col justify-center items-end">
        <p className="text-lg font-bold">{dateInfo.day}</p>
        <p className="text-lg font-bold">{dateInfo.monthShort.toUpperCase()}</p>
        <p className="text-lg font-bold">{dateInfo.year}</p>
      </div>

      <div className="w-full flex flex-col gap-5 justify-center items-start">
        <Link href={`/blog/${blogProps.id}`}>
          <h1 className="text-xl font-bold tracking-wider">
            {blogProps.title}
          </h1>
        </Link>

        <p className="line-clamp-3 md:line-clamp-5 text-sm">
          {blogProps.description}
        </p>

        <div className="w-full flex justify-between items-center md:justify-end">
          <p className="md:hidden">{`${dateInfo.day} ${dateInfo.monthLong} ${dateInfo.year}`}</p>
          <p>{blogProps.username}</p>
        </div>

        <div className="w-full flex justify-between items-center gap-3">
          <div className="flex justify-start items-center gap-3">
            {blogProps.tags.split(",").map((t) => {
              return <p className="cursor-pointer">#{t}</p>;
            })}
          </div>

          <div>
            {session?.user.id == blogProps.userId ? (
              <Link
                href={`/change/${blogProps.id}`}
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
