
import React from "react";

type SearchParamsType = {
  searchParams: {
    tab: string;
    id: string;
  };
};

const page = ({ searchParams }: SearchParamsType) => {
  return (
    <div className="w-full min-h-screen bg-black text-white">

      <h1>Please select tab</h1>
    </div>
  );
};

export default page;
