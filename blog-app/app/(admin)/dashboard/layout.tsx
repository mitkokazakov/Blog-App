import React from "react";

const layout = ({
  children,
  list,
}: {
  children: React.ReactNode;
  list: React.ReactNode;
}) => {
  return (
    <div className="w-full min-h-screen bg-black flex">
      {children}
      {list}
    </div>
  );
};

export default layout;
