"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const ApproveDelete = ({
  blogId,
  userId,
  isApproved,
}: {
  blogId: string;
  userId: string;
  isApproved: boolean;
}) => {
  const router = useRouter();

  async function HandleAprrove() {
    try {
      const res = await axios.put("/api/approveblog", {
        blogId: blogId,
        userId: userId,
      });

      if (res.status == 200) {
        toast.success("Blog has been successfully approved");
        router.refresh();
      }
    } catch (error: any) {
      router.push("/dashboard/users");
      toast.error(error.request.responseText);
    }
  }

  return (
    <div className="flex justify-start gap-5">
      <Link
        href={`/blog/${blogId}`}
        className="bg-green-500 px-3 py-1 rounded-lg "
      >
        View
      </Link>
      <Link href={"/"} className="bg-red-500 px-3 py-1 rounded-lg ">
        Delete
      </Link>

      {isApproved == false ? (
        <button
          className="  bg-yellow-500 px-3 py-1 rounded-lg"
          onClick={HandleAprrove}
        >
          Approve
        </button>
      ) : null}
    </div>
  );
};

export default ApproveDelete;
