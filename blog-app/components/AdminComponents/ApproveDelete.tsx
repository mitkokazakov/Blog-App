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
  path
}: {
  blogId: string;
  userId: string;
  isApproved: boolean;
  path: string
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
        console.log("approves");
        router.refresh();
        console.log("refreshed");
        
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
        className="bg-green-500 px-3 py-1 rounded-lg min-w-20 text-center"
      >
        View
      </Link>

      {/* dashboard/deleteblog/${blogId} */}
      <Link href={path} className="bg-red-500 px-3 py-1 rounded-lg max-w-20">
        Delete
      </Link>

      {isApproved == false ? (
        <button
          className="  bg-yellow-500 px-2 py-1 rounded-lg max-w-20 text-center"
          onClick={HandleAprrove}
        >
          Approve
        </button>
      ) : null}
    </div>
  );
};

export default ApproveDelete;
