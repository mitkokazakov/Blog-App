// app/items/delete/[itemId]/page.js
"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

export default function DeleteConfirmationModal({
  blogId,
  blogTitle,
}: {
  blogId: string;
  blogTitle: string;
}) {
  const router = useRouter();

  const handleConfirmDelete = async () => {
    //const response = await axios.delete(`/api/deleteblog/${blogId}`);

    const res = await fetch(`/api/deleteblog/${blogId}`,{
      method:"DELETE",
      cache: "no-store"
    })

    if (res.status == 200) {
      //alert("Blog has been deleted");
      router.push("/dashboard/posts?tab=all");
      router.refresh();
      router.back();
<<<<<<< Updated upstream
      // setTimeout(() => {
      //   router.replace("/dashboard/posts"); // Navigate to /dashboard/posts after the modal is gone
      //   router.refresh(); // Ensure the page data is refreshed
      // }, 1000);
=======

      setTimeout(() => {
        router.replace("/dashboard/posts?tab=all"); // Navigate to /dashboard/posts after the modal is gone
        router.refresh(); // Ensure the page data is refreshed
      }, 1000);
>>>>>>> Stashed changes

    } else {
      alert("Something went wrong!");
    }
  };

  const handleCancel = () => {
    router.back();
  };

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
