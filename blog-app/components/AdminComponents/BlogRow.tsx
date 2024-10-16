import { ExtractDayYearMonth } from "@/app/lib/helpers";
import prisma from "@/app/lib/prismadb";
import { ApproveBlog } from "@/app/lib/services";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import React from "react";

const BlogRow = ({ blogProps }: BlogProps) => {
  const dateInfo = ExtractDayYearMonth(blogProps.createdAt);

  const HandleApproveBlog = async () => {

    "use server"

    await ApproveBlog(blogProps.id,blogProps.userId);
  };

  return (
    <tr>
      <td className="text-left border border-slate-800 px-4 py-4 ">
        <p className=" line-clamp-1">{blogProps.title}</p>
      </td>
      <td className="text-left border border-slate-800 px-4 py-4 ">
        <p className=" line-clamp-1 max-w-[300px]">{blogProps.description}</p>
      </td>
      <td className="text-left border border-slate-800 px-4 py-4">
        {`${dateInfo.monthShort} ${dateInfo.day} ${dateInfo.year}`}
      </td>
      <td className="text-left border border-slate-800 px-4 py-4">
        {blogProps.isApproved == true ? "approved" : "not approved"}
      </td>
      <td className="text-left border border-slate-800 px-4 py-4 ">
        <div className="flex justify-start gap-5">
          <Link
            href={`/blog/${blogProps.id}`}
            className="bg-green-500 px-3 py-1 rounded-lg "
          >
            View
          </Link>
          <Link href={"/"} className="bg-red-500 px-3 py-1 rounded-lg ">
            Delete
          </Link>

          {
            blogProps.isApproved == false ? <form action={HandleApproveBlog} className="">
            <button
              type="submit"
              className="  bg-yellow-500 px-3 py-1 rounded-lg"
            >
              Approve
            </button>
          </form> : null
          }
        </div>
      </td>
    </tr>
  );
};

export default BlogRow;
