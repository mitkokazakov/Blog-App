"use client";
import { ExtractDayYearMonth } from "@/app/lib/helpers";
import { all } from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type PostType = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  status: string;
};

const data: PostType[] = [
  {
    id: "1a",
    title: "Best places to see the northern lights",
    description:
      "The best places to see the northern light is probably Norway, Finland, Iceland and Canada.",
    createdAt: "Nov 04 2024",
    status: "approved",
  },
  {
    id: "2a",
    title: "Tromso - the northernmost city",
    description:
      "The best places to see the northern light is probably Norway, Finland, Iceland and Canada.",
    createdAt: "Nov 04 2024",
    status: "not approved",
  },
  {
    id: "3a",
    title: "Big snowstorm is comming?",
    description:
      "The best places to see the northern light is probably Norway, Finland, Iceland and Canada.",
    createdAt: "Nov 04 2024",
    status: "approved",
  },
  {
    id: "4a",
    title: "Which country is best for living",
    description:
      "The best places to see the northern light is probably Norway, Finland, Iceland and Canada.",
    createdAt: "Nov 06 2024",
    status: "not approved",
  },
];

const DashboardAllPosts = ({ tab, allPosts }: { tab: string, allPosts: BlogType[] }) => {
  const [filteredData, SetFilteredData] = useState<BlogType[]>(allPosts);
  const [posts, SetPosts] = useState<PostType[]>(data);

  //let filteredData = data;

  useEffect(() => {
    if (tab == "approved") {
        //filteredData = data.filter((p) => p.status == "approved");

        const tempData = allPosts.filter(p => p.isApproved == true)

        SetFilteredData(tempData)
      }
      if (tab == "not approved") {
        //filteredData = data.filter((p) => p.status == "not approved");

        const tempData = allPosts.filter(p => p.isApproved == false)

        SetFilteredData(tempData)
      }
      if (tab == "all") {
        //filteredData = data;
        SetFilteredData(allPosts)
      }
  },[tab])



  function OnChangeInput(input:string){

    const tempData = allPosts.filter(p => p.title.includes(input))

    SetFilteredData(tempData);
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <input
          type="text"
          name="username"
          id="username"
          className="px-4 py-1 bg-slate-800 rounded-lg"
          placeholder="Search for a post"
          onChange={(e) => OnChangeInput(e.target.value)}
        />

        <div className="flex justify-center items-center gap-5">
          <Link
            href={"/dashboard/posts?tab=approved"}
            className="focus:bg-yellow-600 px-3 py-2 rounded-lg tracking-widest"
          >
            Approved
          </Link>
          <Link
            href={"/dashboard/posts?tab=not approved"}
            className="focus:bg-yellow-600 px-3 py-2 rounded-lg tracking-widest"
          >
            Not approved
          </Link>
          <Link
            href={"/dashboard/posts?tab=all"}
            className="focus:bg-yellow-600 px-3 py-2 rounded-lg tracking-widest"
          >
            All
          </Link>
        </div>

        <div>
          <Link href={"/"} className="bg-purple-600 px-3 py-2 rounded-lg">
            Add Post
          </Link>
        </div>
      </div>

      <div>
        <table className="table-auto border-collapse border border-slate-400 w-full">
          <thead>
            <tr>
              <th className="text-left border border-slate-800 px-4 py-4">
                Blog Title
              </th>
              <th className="text-left border border-slate-800 px-4 py-4">
                Short Description
              </th>
              <th className="text-left border border-slate-800 px-4 py-4">
                Created at
              </th>
              <th className="text-left border border-slate-800 px-4 py-4">
                Status
              </th>
              <th className="text-left border border-slate-800 px-4 py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.map((blog) => {

              const dateInfo = ExtractDayYearMonth(blog.createdAt);

              return (
                <tr key={blog.id}>
                  <td className="text-left border border-slate-800 px-4 py-4 ">
                    <p className=" line-clamp-1">{blog.title}</p>
                  </td>
                  <td className="text-left border border-slate-800 px-4 py-4 ">
                    <p className=" line-clamp-1 max-w-[300px]">
                      {blog.description}
                    </p>
                  </td>
                  <td className="text-left border border-slate-800 px-4 py-4">
                    {`${dateInfo.monthShort} ${dateInfo.day} ${dateInfo.year}`}
                  </td>
                  <td className="text-left border border-slate-800 px-4 py-4">
                    {
                      blog.isApproved == true ? "approved" : "not approved"
                    }
                  </td>
                  <td className="text-left border border-slate-800 px-4 py-4 ">
                    <Link
                      href={`/blog/${blog.id}`}
                      className="bg-green-500 px-3 py-1 rounded-lg mr-5"
                    >
                      View
                    </Link>
                    <Link
                      href={"/"}
                      className="bg-red-500 px-3 py-1 rounded-lg"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardAllPosts;
