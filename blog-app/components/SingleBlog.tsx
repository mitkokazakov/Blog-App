import Link from "next/link";
import React from "react";

const SingleBlog = () => {
  return (
    <div className="w-full flex justify-center items-start md:gap-5 border-b-[0.1px] border-b-black py-4 md:max-w-[1440px]">
      <div className="hidden md:flex md:flex-col justify-center items-end">
        <p className="text-lg font-bold">23</p>
        <p className="text-lg font-bold">JUL</p>
        <p className="text-lg font-bold">2024</p>
      </div>

      <div className="w-full flex flex-col gap-5 justify-center items-start">
        <h1 className="text-xl font-bold tracking-wider">
          Bytes & Beyond: Where Tech meets imagination
        </h1>

        <p className="line-clamp-3 md:line-clamp-5 text-sm">
          Embark on an joourney of exploration where technology intersects with
          art,design and creativity. Embark on an joourney of exploration where
          technology intersects with art,design and creativity. Embark on an
          joourney of exploration where technology intersects with art,design
          and creativity. Embark on an joourney of exploration where technology
          intersects with art,design and creativity. Embark on an joourney of
          exploration where technology intersects with art,design and
          creativity.
        </p>

        <div className="w-full flex justify-between items-center md:justify-end">
          <p className="md:hidden">23 July 2024</p>
          <p>Sara De Cortes</p>
        </div>

        <div className="w-full flex justify-between items-center gap-3">
          <div className="flex justify-start items-center gap-3">
            <p className="cursor-pointer">#tech</p>
            <p className="cursor-pointer">#art</p>
            <p className="cursor-pointer">#design</p>
          </div>

          <div>
            <Link href={'/change'} className="bg-yellow-200 px-3 py-2 rounded-lg">Change</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
