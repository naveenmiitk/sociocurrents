import Image from "next/image";
import React from "react";
import Logo from "../../../public/Marx.png";
import { cn } from "@/lib/utils";
import { anton, inter } from "@/app/(site)/layout";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "../Custom/TypeWritterEffect";
import Karl from "../../../public/karlt.gif";

const Banner = () => {
  const words = [
    {
      text: "Welcome",
      className: "text-black dark:text-white ",
    },
    {
      text: "to",
      className: "text-black dark:text-white ",
    },
    {
      text: "Sociology!!",
      className:
        "text-red-600 dark:text-black text-3xl md:text-5xl lg:text:5xl xl:text-6xl ",
    },
  ];
  return (
    <div className="bg-transparent w-full mx-auto">
      <div className="w-full max-w-[900px] mx-auto border-t- border-b- border-black  h-[300px] lg:h-[300px]  flex justify-between mb-10">
        {/* <div
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
      </div> */}
        <div className="flex flex-col justify-center ml-6 pt-16">
          <TypewriterEffect words={words} />
        </div>

        <div className="flex items-end relative max-w-[200px] image-container">
          {/* <Image
          src={Logo}
          alt="Banner Logo"
          fill
          className="object-contain list-image-none border-0 border-red-500"
        /> */}
          <Image
            src={Karl}
            alt="karl"
            height={280}
            className="object-contain bg-transparent border- border-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
