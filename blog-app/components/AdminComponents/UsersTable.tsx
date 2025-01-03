"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";
import UserResponsiveRow from "./UserResponsiveRow";

type UserProps = {
  users: UserParams[];
};

const UsersTable = ({ users }: UserProps) => {

  console.log(users);
  
  const [userData, SetUserData] = useState<UserParams[]>();

  useEffect(() => {
    SetUserData(users)
  },[users])

  function OnChangeInput(input: string) {
    const tempData = users.filter((u) => u.name?.toLocaleLowerCase().includes(input.toLocaleLowerCase()));

    SetUserData(tempData);
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-5 md:flex-row md:justify-between">
        <input
          type="text"
          name="username"
          id="username"
          className="px-4 py-1 bg-slate-800 rounded-lg"
          placeholder="Search for a user"
          onChange={(e) => {
            OnChangeInput(e.target.value);
          }}
        />

        <Link
          href={"/dashboard/registeruser"}
          className="bg-purple-600 px-3 py-1 rounded-lg text-center"
        >
          Add User
        </Link>
      </div>

      <div className="hidden md:overflow-x-auto md:block">
        <table className="table-auto border-collapse border border-slate-400 w-full">
          <thead>
            <tr>
              <th className="text-left border border-slate-800 px-4 py-4 whitespace-nowrap">
                Name
              </th>
              <th className="text-left border border-slate-800 px-4 py-4 whitespace-nowrap">
                Email
              </th>
              <th className="text-left border border-slate-800 px-4 py-4 whitespace-nowrap">
                Created at
              </th>
              <th className="text-left border border-slate-800 px-4 py-4 whitespace-nowrap">
                Role
              </th>
              <th className="text-left border border-slate-800 px-4 py-4 whitespace-nowrap">
                Status
              </th>
              <th className="text-left border border-slate-800 px-4 py-4 whitespace-nowrap">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userData &&
              userData?.map((user) => {
                return (
                  <UserRow
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email as string}
                    createdAt={user.createdAt}
                    isDeleted={user.isDeleted}
                    image={user.image as string}
                    role={user.role as string}
                  />
                );
              })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-2 md:hidden">
      {userData &&
              userData?.map((user) => {
                return (
                  <UserResponsiveRow
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email as string}
                    createdAt={user.createdAt}
                    isDeleted={user.isDeleted}
                    image={user.image as string}
                    role={user.role as string}
                  />
                );
              })}
      </div>
    </div>
  );
};

export default UsersTable;
