import React from 'react'
import Image from "next/image";

const ErrorPage = ({text}: {text: string}) => {
  return (
    <div className="w-full min-h-screen flex justify-center items-start pt-32">
        <div className="flex flex-col gap-10">
          <div className="w-[600px] h-[360px] mx-auto">
            <Image
              src={"/error.png"}
              width={600}
              height={360}
              alt="Error page"
              className="w-full h-full"
            />
          </div>
          <h1 className="text-center text-2xl font-bold tracking-widest">{text}</h1>
        </div>
      </div>
  )
}

export default ErrorPage
