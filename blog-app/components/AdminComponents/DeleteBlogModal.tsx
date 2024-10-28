// app/items/delete/[itemId]/page.js
"use client";

import { useRouter } from 'next/navigation';

export default function DeleteConfirmationModal({ blogId }: {blogId: string}) {
  const router = useRouter();

  const handleConfirmDelete = async () => {
    // Add deletion logic here, such as an API call
    console.log(`Deleting item with ID: ${blogId}`);
    // After deletion, close the modal and navigate back
    router.push('/items');
  };

  const handleCancel = () => {
    router.back(); // Close modal without deleting
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md text-center shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Are you sure you want to delete this item?
        </h3>
        <p className="text-gray-600 mb-6">Item ID: {blogId}</p>
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
