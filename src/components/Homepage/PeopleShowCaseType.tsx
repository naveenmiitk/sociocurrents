import React from "react";
import People1 from "../../../public/People_1.png";
import People2 from "../../../public/People_2.png";
import People3 from "../../../public/People_3.png";
import People4 from "../../../public/Logo3.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { anton, caveat, poppins, satisfy } from "@/app/(site)/layout";
import { TypewriterEffect } from "../Custom/TypeWritterEffect";

const People = [
  {
    id: "1",
    image: People4,
  },
  {
    id: "2",
    image: People1,
  },
  {
    id: "3",
    image: People2,
  },
];

const words1 = [
  {
    text: "The",
    className:
      "text-black text-xl font-normal text-2xl md:text-3xl lg:text-5xl ",
  },
  {
    text: "Power",
    className:
      "text-black text-xl text-yellow-500 font-semibold text-2xl md:text-3xl lg:text-5xl ",
  },
  {
    text: "Trio",
    className:
      "text-black text-xl font-normal text-2xl md:text-3xl lg:text-5xl ",
  },
  {
    text: "of",
    className:
      "text-black text-xl font-normal  text-2xl md:text-3xl lg:text-5xl ",
  },
  {
    text: "Sociology...",
    className:
      "text-black text-xl font-normal text-2xl md:text-3xl lg:text-5xl",
  },
];

const PeopleShowcaseType = () => {
  return (
      <div
        className={cn(
          "flex flex-col items-center justify-center bg-gradient-to- bg-transparent from-sky-50 via-slate-50 to-violet-50 pt-10 border-t- border-neutral-700",
          poppins.className
        )}
      >
        {/* <div className="bg-red-500 border-rose-300 border-2 flex justify-start max-w-3xl mr-auto ml-20">
        <div className="border-4 border-neutral-700 px-10  bg- text-black flex items-center justify-center ">
         
          <h1
          className={cn(
            "text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-semibold py-6 skew-x-[20deg]",
            poppins.className
          )}
        >
          Dead Men tell some Tales!!
        </h1>
        
        </div>
      </div> */}

        <div className="bg-red- border- border-black p-4 pb-8 flex justify-start items-start mr-auto xl:ml-[10rem] mb-16 w-[80%]">
          <TypewriterEffect words={words1} />
        </div>

        <div className="my-10 ">
          {People.map((item, index) => (
            <div key={item.id} className="border-0 border-neutral-600">
              <div
                className={cn(
                  "flex items-center gap-x-5 md:gap-x-10 lg:gap-x-20",
                  index % 2 !== 0 ? "flex-row-reverse" : "flex-row"
                )}
              >
                <div className="object-cover flex-row items-center border-0 border-neutral-600">
                  <Image
                    src={item.image}
                    alt={item.id}
                    width={300}
                    height={300}
                    className="border-0 border-neutral-600 rounded-full bg-gradient-to- from-yellow-50 via-slate-50 to-red-50 "
                  />
                </div>
                <div className="max-w-sm md:max-w-md lg:max-w-3xl mx-4">
                  {index == 0 && (
                    <div className="my-16">
                      {/* <h1 className="text-lg md:text-xl font-semibold ">
                      -----{">"}Ahh!! Socio Currents, But Who owns the Means of
                      Production
                    </h1>
                    <h1 className="text-lg md:text-xl font-semibold inline">
                      You filthy{" "}
                    </h1> */}

                      <h1 className="text-lg md:text-xl font-semibold inline">
                        Who owns the MOP?{" "}
                      </h1>
                      <h1
                        className={cn(
                          "text-2xl sm:text-3xl md:text-5xl font-semibold text-red-500 inline",
                          poppins.className
                        )}
                      >
                        bourgeoisie
                      </h1>

                      {/* <TypewriterEffect words={words1} /> */}
                    </div>
                  )}
                  {index == 1 && (
                    <div className="my-16 border-0 border-red-500 flex-col text-right">
                      {index == 1 && (
                        <div className="flex text-right justify-end">
                          <div>
                            <h1 className="text-lg md:text-xl font-semibold inline ">
                              Hmm !! How{" "}
                            </h1>
                            <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold inline text-blue-700">
                              {" "}
                              bureaucratic{" "}
                            </h1>
                            <h1 className="text-lg md:text-xl font-semibold inline ">
                              of you{" "}
                            </h1>
                            {/* <h1 className="text-lg md:text-xl font-semibold border-0 border-neutral-600 hidden lg:inline-block">
                            {"<"}-----
                          </h1>
                          <h1 className="text-lg md:text-xl font-semibold">
                            Founders, Co-Founders, Product Engineers, Growth
                            Managers, Content Experts.....
                          </h1> */}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  {index == 2 && (
                    <div className="my-16">
                      {/* <h1 className="text-lg md:text-xl font-semibold inline">
                      -----{">"}Okkiee !!{" "}
                    </h1>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold inline text-green-800">
                      Collective conscience{" "}
                    </h1>
                    <h1 className="text-lg md:text-xl font-semibold inline">
                      meets digital age.
                    </h1> */}
                      <h1 className="text-lg md:text-xl font-semibold ">
                        But I sense
                        <span className="text-2xl sm:text-3xl md:text-5xl font-semibold inline text-green-800">
                          {" "}
                          anomie{" "}
                        </span>
                        among civil service aspirants.
                      </h1>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default PeopleShowcaseType;
