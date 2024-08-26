import React from "react";

type ParamsType = {
  params: {
    id: string;
  };
};

const page = ({ params }: ParamsType) => {
  return (
    <div className="px-5 py-8 max-w-[1440px] mx-auto">
      <h1 className="text-2xl font-bold tracking-wider">
        Bytes & Beyond: Where Tech meets imagination
      </h1>

      <div className="flex justify-start items-center gap-3 mt-5 text-sm pb-5 border-b border-b-slate-300">
        <p className="">26 July 2024</p>
        <div className="h-[7px] w-[7px] bg-slate-500 rounded-full"></div>
        <p>Sara De Cortes</p>
      </div>

      <p className="mt-5">
      Embark on an joourney of exploration where technology intersects with
          art,design and creativity. Embark on an joourney of exploration where technology intersects with
          art,design and creativity.  
      </p>

      <p className="font-bold tracking-widest mt-5">Unleashing Imagination Through Technology</p>

      <p className="mt-5">
      Embark on an joourney of exploration where technology intersects with
          art,design and creativity. Embark on an joourney of exploration where technology intersects with
          art,design and creativity. Embark on an joourney of exploration where technology intersects with
          art,design and creativity. Embark on an joourney of exploration where technology intersects with
          art,design and creativity. Embark on an joourney of exploration where technology intersects with
          art,design and creativity. 
      </p>
    </div>
  );
};

export default page;
