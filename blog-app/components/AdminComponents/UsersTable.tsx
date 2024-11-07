"use client";
import Link from "next/link";
import React, { useState } from "react";
import UserRow from "./UserRow";

type UserProps = {
  users: UserParams[];
};

const UsersTable = ({ users }: UserProps) => {

  console.log(users);
  
  const [userData, SetUserData] = useState<UserParams[]>(users);

  function OnChangeInput(input: string) {
    const tempData = users.filter((u) => u.name?.includes(input));

    SetUserData(tempData);
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
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
          className="bg-purple-600 px-3 py-2 rounded-lg"
        >
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
    </div>
  );
};

export default UsersTable;
