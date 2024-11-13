"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const DeleteButton = ({
  blogId,
  blogTitle,
}: {
  blogId: string;
  blogTitle: string;
}) => {

  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {

  },[isOpen])

  const handleConfirmDelete = async () => {
    //const response = await axios.delete(`/api/deleteblog/${blogId}`);

    const res = await fetch(`/api/deleteblog/${blogId}`, {
      method: "DELETE",
      cache: "no-store",
    });

    if (res.status == 200) {
      //alert("Blog has been deleted");
      toast.success("Blog has been deleted");
      //router.push("/blogs");
      router.refresh();
      setIsOpen(false);
    } else {
      toast.error("Something went wrong!");
    }
  };

  const handleCancel = () => {
    setIsOpen(false)
  };

  if (isOpen) {
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

  return (
    <div>
      <button className="bg-red-600 px-3 py-2 rounded-lg" onClick={() => {setIsOpen(true)}}>Delete</button>
    </div>
  );
};

export default DeleteButton;
