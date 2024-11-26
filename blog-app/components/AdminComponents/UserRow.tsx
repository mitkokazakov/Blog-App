import { ExtractDayYearMonth } from "@/app/lib/helpers";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { revalidatePath } from "next/cache";

const UserRow = ({
  id,
  name,
  image,
  isDeleted,
  createdAt,
  email,
  role,
}: UserRowParams) => {

  //revalidatePath("/dashboard/users");
  const dateInfo = ExtractDayYearMonth(createdAt);

  return (
    <tr>
      <td className="text-left border border-slate-800 px-4 py-4 whitespace-nowrap">
        <div className="flex justify-start items-center gap-5">
          <div className="w-12 h-12 rounded-full flex justify-center items-center bg-white">
            {image != null ? (
              <Image
                src={image}
                width={500}
                height={500}
                quality={100}
                alt="op"
                className="max-w-full max-h-full rounded-full object-cover aspect-[1/1]"
              ></Image>
            ) : null}

            {image == null ? (
              <FaRegUser className="text-3xl text-black" />
            ) : null}
          </div>
          <p>{name}</p>
        </div>
      </td>
      <td className="text-left border border-slate-800 px-4 py-4 whitespace-nowrap">{email}</td>
      <td className="text-left border border-slate-800 px-4 py-4 whitespace-nowrap">
        {`${dateInfo.monthShort} ${dateInfo.day} ${dateInfo.year}`}
      </td>
      <td className="text-left border border-slate-800 px-4 py-4 whitespace-nowrap">{role}</td>
      <td className="text-left border border-slate-800 px-4 py-4 whitespace-nowrap">
        {isDeleted == true ? "deleted" : "active"}
      </td>
      <td className="text-left border border-slate-800 px-4 py-4 whitespace-nowrap">
        <div className="flex justify-start items-center gap-5">
          <Link
            href={`/dashboard/users/${id}`}
            className="bg-green-500 px-3 py-1 rounded-lg"
          >
            View
          </Link>

          {isDeleted == false ? (
            <Link
              href={`/dashboard/deleteuser/${id}`}
              className="bg-red-500 px-3 py-1 rounded-lg"
            >
              Delete
            </Link>
          ) : null}

          <Link
            href={`/myprofile/${id}`}
            className="bg-yellow-500 px-3 py-1 rounded-lg"
          >
            Change
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
