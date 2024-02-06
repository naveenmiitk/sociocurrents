import Image from "next/image";
import React from "react";
import Logo from "../../../public/Marx.png";
import { cn } from "@/lib/utils";
import { anton, inter } from "@/app/(site)/layout";

const Banner = () => {
  return (
    <div className="w-full max-w-[1500px] border-t-2 border-b-2 border-black  h-[200px] lg:h-[250px] bg-red-700 flex justify-between mb-10">
      <div
        className={cn(
          "text-white flex flex-col justify-end px-4 lg:px-12 text-justify tracking-widest",
          anton.className
        )}
      >
        <h1 className={cn("text-[34px] lg:text-[54px] font-bold tracking-widest")}>
          Sociology
        </h1>
        <span className="text-[26px] lg:text-[28px] font-bold tracking-wider">
          meets
          <span className="ml-2 text-[30px] lg:text-[44px] font-bold tracking-widest">
            Current Affairs
          </span>
        </span>
      </div>

      <div className="flex items-end relative max-w-[200px] image-container">
        <Image src={Logo} alt="Banner Logo" fill className="object-contain list-image-none border-0 border-red-500"/>
      </div>
    </div>
  );
};

export default Banner;
