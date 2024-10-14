import { ExtractDayYearMonth } from "@/app/lib/helpers";
import Link from "next/link";
import React from "react";

type UserRowParams = {
  id: string;
  name: string | null;
  image?: string;
  isDeleted: boolean;
  createdAt: Date;
  email: string;
  role: string;
};

const UserRow = ({
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
    <tr>
      <td className="text-left border border-slate-800 px-4 py-4 ">
        <div className="flex justify-start items-center gap-5">
          <div className="w-12 h-12 rounded-full flex justify-center items-center ">
            <img
              src={image}
              alt="op"
              className="w-full h-full rounded-full"
            />
          </div>
          <p>{name}</p>
        </div>
      </td>
      <td className="text-left border border-slate-800 px-4 py-4">
        {email}
      </td>
      <td className="text-left border border-slate-800 px-4 py-4">
       {`${dateInfo.monthShort} ${dateInfo.day} ${dateInfo.year}`}
      </td>
      <td className="text-left border border-slate-800 px-4 py-4">{role}</td>
      <td className="text-left border border-slate-800 px-4 py-4">{isDeleted == true ? "deleted" : "active"}</td>
      <td className="text-left border border-slate-800 px-4 py-4 ">
        <Link
          href={"/dashboard/users/33"}
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

export default UserRow;
