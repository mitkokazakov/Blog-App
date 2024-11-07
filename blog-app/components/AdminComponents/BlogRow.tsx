import { ExtractDayYearMonth } from "@/app/lib/helpers";
import prisma from "@/app/lib/prismadb";
import { ApproveBlog } from "@/app/lib/services";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import ApproveDelete from "./ApproveDelete";

const BlogRow = ({ blogProps }: BlogProps) => {


  const dateInfo = ExtractDayYearMonth(blogProps.createdAt);

   async function HandleApproveBlog () {
     "use server"
   

    const resp = await ApproveBlog(blogProps.id,blogProps.userId);
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

        <ApproveDelete userId={blogProps.userId} blogId={blogProps.id} isApproved={blogProps.isApproved} path={`/dashboard/deleteusersblog/${blogProps.id}`}/>
        
      </td>
    </tr>
  );
};

export default BlogRow;
