import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/authoptions";
import { ExtractDayYearMonth } from "@/app/lib/helpers";
import DeleteButton from "./DeleteButton";

const SingleBlog = async ({ blogProps }: BlogProps) => {
  const session = await getServerSession(authOptions);

  const dateInfo = ExtractDayYearMonth(blogProps.createdAt);

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
              return (
                <Link href={`/tag/${t}`} key={t} className="cursor-pointer">
                  #{t}
                </Link>
              );
            })}
          </div>

          <div className="flex justify-center items-center gap-5">
            {session?.user.id == blogProps.userId ? (
              <Link
                href={`/change/${blogProps.id}`}
                className="bg-yellow-200 px-3 py-2 rounded-lg"
              >
                Change
              </Link>
            ) : null}

            {session?.user.id == blogProps.userId ? <DeleteButton blogId={blogProps.id} blogTitle={blogProps.title}/> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
