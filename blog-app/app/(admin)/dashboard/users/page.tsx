import Link from "next/link";
import React from "react";
import "../../globals.css";
import Image from "next/image";
import { GetAllUsers } from "@/app/lib/services";
import UserRow from "@/components/AdminComponents/UserRow";
import UsersTable from "@/components/AdminComponents/UsersTable";

//import image1 from '../../../../images/user.png';

type UsersFilterParams = {
  searchParams: {
    tab: string;
  };
};

const page = async ({ searchParams }: UsersFilterParams) => {
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

  const users = await GetAllUsers();

  return (
    <div className="w-full bg-[#0f0f11] h-screen text-white flex flex-col gap-8 px-10 py-10">
      <div>
        <h1 className="font-bold tracking-widest text-2xl">All Users</h1>
      </div>

      <UsersTable users={users} />
      {/* <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <input
            type="text"
            name="username"
            id="username"
            className="px-4 py-1 bg-slate-800 rounded-lg"
            placeholder="Search for a user"
          />

          <Link href={"/"} className="bg-purple-600 px-3 py-2 rounded-lg">
            Add User
          </Link>
        </div>

        <div>
          <table className="table-auto border-collapse border border-slate-400 w-full">
            <thead>
              <tr>
                <th className="text-left border border-slate-800 px-4 py-4">
                  Name
                </th>
                <th className="text-left border border-slate-800 px-4 py-4">
                  Email
                </th>
                <th className="text-left border border-slate-800 px-4 py-4">
                  Created at
                </th>
                <th className="text-left border border-slate-800 px-4 py-4">
                  Role
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

              {
                users && users?.map(user => {
                  return <UserRow id={user.id} name={user.name} email={user.email as string} createdAt={user.createdAt} isDeleted={user.isDeleted} image={user.image as string} role={user.role as string} />
                })
              }
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default page;
