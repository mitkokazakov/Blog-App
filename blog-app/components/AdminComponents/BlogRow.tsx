import { ExtractDayYearMonth } from "@/app/lib/helpers";
import Link from "next/link";
import React from "react";

const BlogRow = ({blogProps}: BlogProps) => {

    const dateInfo = ExtractDayYearMonth(blogProps.createdAt);

  return (
    <tr>
      <td className="text-left border border-slate-800 px-4 py-4 ">
        <p className=" line-clamp-1">{blogProps
            .title}</p>
      </td>
      <td className="text-left border border-slate-800 px-4 py-4 ">
        <p className=" line-clamp-1 max-w-[300px]">
          {blogProps.description}
        </p>
      </td>
      <td className="text-left border border-slate-800 px-4 py-4">
        {`${dateInfo.monthShort} ${dateInfo.day} ${dateInfo.year}`}
      </td>
      <td className="text-left border border-slate-800 px-4 py-4">{blogProps.isApproved == true ? "approved" : "not approved"}</td>
      <td className="text-left border border-slate-800 px-4 py-4 ">
        <Link
          href={`/blog/${blogProps.id}`}
          className="bg-green-500 px-3 py-1 rounded-lg mr-5"
        >
          View
        </Link>
        <Link href={"/"} className="bg-red-500 px-3 py-1 rounded-lg">
          Delete
        </Link>
      </td>
    </tr>
  );
};

export default BlogRow;
