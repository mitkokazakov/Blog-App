import Link from "next/link";
import React from "react";

type DasboardMiddleColumnParams = {
  tabInfo: string;
};

const DasboardMiddleColumn = ({ tabInfo }: DasboardMiddleColumnParams) => {
  return (
    <div className="w-[300px] min-h-screen border-r-[1px] border-r-white">
      <div className="grid grid-cols-1">
      <p>{tabInfo}</p>
      <Link href={`/dashboard?tab=${tabInfo}&id=blog12345`}>Current Blog1</Link>
      <Link href={`/dashboard?tab=${tabInfo}&id=tag12345`}>Current Blog2</Link>
      <Link href={`/dashboard?tab=${tabInfo}&id=user12345`}>Current Blog3</Link>
      <Link href={`/dashboard?tab=${tabInfo}&id=tag1`}>Current Blog4</Link>
      </div>
    </div>
  );
};

export default DasboardMiddleColumn;
