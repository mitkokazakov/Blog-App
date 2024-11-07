// app/items/delete/[itemId]/page.js
"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function DeleteConfirmationModal({
  blogId,
  blogTitle,
}: {
  blogId: string;
  blogTitle: string;
}) {
  const [isOpen, setIsOpen] = useState(true);

  const router = useRouter();

  const handleConfirmDelete = async () => {
    const res = await axios.delete(`/api/deleteblog/${blogId}`);

    if (res.status == 200) {

      const userId = res.data.userId;

      toast.success("Blog has been deleted");
      router.push(`/dashboard/users/${userId}`);
      router.refresh();
      setIsOpen(false);
    } else {
      alert("Something went wrong!");
    }
  };

  const handleCancel = () => {
    router.back();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md text-center shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Are you sure you want to delete this blog?
        </h3>
        <p className="text-gray-600 mb-6">Blog Title: {blogTitle}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleConfirmDelete}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none"
          >
            Yes, Delete
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
