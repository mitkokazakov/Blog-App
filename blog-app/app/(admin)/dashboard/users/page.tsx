import Link from "next/link";
import React from "react";

type UsersFilterParams = {
  searchParams: {
    tab: string;
  };
};

const page = ({ searchParams }: UsersFilterParams) => {
  // const data: number[] = [1, 2, 3, 4, 20, 34, 45, 55];

  // console.log(searchParams.tab);

  // let filteredData: number[] = data;

  // if (searchParams.tab == "below") {
  //   filteredData = data.filter((num) => num < 18);
  // }

  // if (searchParams.tab == "above") {
  //   filteredData = data.filter((num) => num > 18);
  // }
  // if (searchParams.tab == "all") {
  //   filteredData = data;
  // }

  return (
    <div className="w-full bg-[#0f0f11] h-screen text-white flex flex-col gap-8 px-10 py-10">
      <div>
        <h1 className="font-bold tracking-widest text-2xl">All Users</h1>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <input type="text" name="username" id="username" className="px-4 py-1 bg-slate-800 rounded-lg" placeholder="Search for a user"/>

          <Link href={"/"} className="bg-purple-600 px-3 py-2 rounded-lg">Add User</Link>
        </div>

        <div>
          <table className="table-auto border-collapse border border-slate-400 w-full">
            <thead>
              <tr>
                <th className="text-left border border-slate-800 px-4 py-4">Name</th>
                <th className="text-left border border-slate-800 px-4 py-4">Email</th>
                <th className="text-left border border-slate-800 px-4 py-4">Created at</th>
                <th className="text-left border border-slate-800 px-4 py-4">Role</th>
                <th className="text-left border border-slate-800 px-4 py-4">Status</th>
                <th className="text-left border border-slate-800 px-4 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left border border-slate-800 px-4 py-4">Mitko Kazakov</td>
                <td className="text-left border border-slate-800 px-4 py-4">dimitark@gmail.com</td>
                <td className="text-left border border-slate-800 px-4 py-4">Nov 04 2024</td>
                <td className="text-left border border-slate-800 px-4 py-4">client</td>
                <td className="text-left border border-slate-800 px-4 py-4">active</td>
                <td className="text-left border border-slate-800 px-4 py-4 ">
                  <Link href={'/'} className="bg-green-500 px-3 py-1 rounded-lg mr-5">View</Link>
                  <Link href={'/'} className="bg-red-500 px-3 py-1 rounded-lg">Delete</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
