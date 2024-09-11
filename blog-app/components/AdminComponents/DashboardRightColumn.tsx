import Link from "next/link";
import React from "react";

const DashboardRightColumn = ({
  tabInfo,
  idInfo,
}: {
  tabInfo: string;
  idInfo: string;
}) => {
  if (tabInfo == "users") {
    return (
      <div className="w-[300px] min-h-screen border-r-[1px] border-r-white">
        <p>Users</p>
        <p>{idInfo}</p>
      </div>
    );
  }

  if (tabInfo == "tags") {
    return (
      <div className="w-[300px] min-h-screen border-r-[1px] border-r-white">
        <p>Tags</p>
        <p>{idInfo}</p>
      </div>
    );
  }

  if (tabInfo == "posts") {
    return (
      <div className="w-[300px] min-h-screen border-r-[1px] border-r-white">
        <p>Posts</p>
        <p>{idInfo}</p>
      </div>
    );
  }
};

export default DashboardRightColumn;
