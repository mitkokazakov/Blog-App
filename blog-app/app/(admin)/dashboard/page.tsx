
import React from "react";

type SearchParamsType = {
  searchParams: {
    tab: string;
    id: string;
  };
};

// w-full min-h-screen p-5 bg-[#0e0e10] text-white

const page = ({ searchParams }: SearchParamsType) => {
  return (
    <div className="w-full min-h-screen p-5 bg-[#0e0e10] text-white lg:w-3/4 xl:w-4/5 lg:border-l-[1px] lg:border-l-white">

      <h1>Please select tab</h1>
    </div>
  );
};

export default page;
