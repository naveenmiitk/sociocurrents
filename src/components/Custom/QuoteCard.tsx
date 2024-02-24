import React from "react";
import P1 from "../../../public/p1.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { anton, barlow, poppins } from "@/app/(site)/layout";

const QuoteCard = () => {
  return (
    <div className="hidden lg:flex lg:flex-col">
      <div className="bg-gradient-to- from-[#fffbd5] to-[#b20a2c bg-white backdrop-blur-md px-2">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-[80%] lg:max-w-6xl mx-auto py-6">
          <div>
            <h1
              className={cn(
                "text-lg lg:text-xl font-semibold text-center tracking-wider leading-relaxed max-w-3xl mx-auto",
                poppins.className
              )}
            >
              <span className="text-2xl md:text-3xl"> &#x301D;</span> The
              Production of too many useful things results in too many
              <span className="text-[#b20a2c]"> useless </span>
              people. <span className="text-2xl md:text-3xl"> &#x301E;</span>
            </h1>
            <h1 className="font-mono italic text-right text-xl font-semibold">
              {" "}
              - Karl Marx
            </h1>
          </div>

          <div className="w-full flex items-end justify-end">
            <div className="border-0 border-red-500 max-w-[320px] h-[200px] md:w-[300px] md:h-[130px] flex flex-1 items-end justify-end">
              <Image
                src={P1}
                alt="P1"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white min-h-[150px] flex items-center justify-center ">
          <div className="-skew-x-[20deg] border-4 border-neutral-700 px-4 mx-10 lg:px-10 bg-black text-white">
            <h1
              className={cn(
                "text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-semibold py-4 skew-x-[20deg]",
                poppins.className
              )}
            >
              PYQP (Paper-1){" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
