"use client";

import { poppins } from "@/app/(site)/layout";
import { cn } from "@/lib/utils";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import YoutubeLogo from "../../../public/youtube.svg";
import Image from "next/image";
import Hamburger from "hamburger-react";
import { useClickAway } from "react-use";
import { AnimatePresence, motion } from "framer-motion";

const MobileNavBar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const Toggle = () => {
    setOpen(!open);
  };

  useClickAway(ref, () => setOpen(false));

  /*

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);
  */
 
  return (
    <div className="flex flex-col flex-1 items-center text-end justify-end border-0 border-red-500" ref={ref}>
      {/* {open? <X className='w-8 h-8 ' onClick={Toggle}/> : <AlignJustify className='w-8 h-8' onClick={Toggle}/> } */}
      <div onClick={Toggle}>
       <Hamburger toggled={open} toggle={setOpen}/>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0 }}
          className="fixed left-0 shadow-4xl right-0 top-[5.8rem] p-10 pt-10 bg-neutral-100 border-b border-b-white/20 z-50"
          // className="fixed top-[90px] right-0 w-[45%] h-[40%] bg-neutral-100 bg-opacity-100 z-50 rounded-l-xl"
          >
            <div className="absolute top-10 right-0 p-4">
              {/* <button onClick={Toggle} className="text-white">
            <X className='w-8 h-8'/>
            </button> */}
            </div>
            <div className="flex items-center justify-center h-full w-full p-2">
              {/* Add your navigation links here */}
              <ul
                className={cn(
                  "text-black font-semibold text-lg flex flex-col items-center justify-center"
                )}
              >
                <motion.li
                  className="py-2 hover:text-yellow-600 text-center"
                  onClick={Toggle}
                  initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + 1/ 10,
                    }}
                >
                  <Link href={"/thinkers"}>Thinkers</Link>
                </motion.li>
                <motion.li
                  className="py-2 hover:text-yellow-600 text-center"
                  onClick={Toggle}
                  initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + 2/ 10,
                    }}
                >
                  <Link href={"/sociocurrents"}>Current Affairs</Link>
                </motion.li>
                {/* <li className="py-2 pb-4 hover:text-yellow-600 text-center"  onClick={Toggle}><Link href={'/readouts'}>Readouts</Link></li> */}
                <motion.li
                  className="py-2 pb-4 hover:text-yellow-600 text-center"
                  onClick={Toggle}
                  initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + 3/ 10,
                    }}
                >
                  <Link href={"/answer-writing"}>Answer Writing</Link>
                </motion.li>
                {/* <li className="py-2">Contact</li> */}
                <motion.li
                 initial={{ scale: 0, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{
                   type: "spring",
                   stiffness: 260,
                   damping: 20,
                   delay: 0.1 + 4/ 10,
                 }}
                >
                   <Button
                  className="py-4 bg-white shadow-sm shadow-black text-black hover:bg-neutral-50/90"
                  onClick={Toggle}
                  asChild
                >
                  <a
                    href={"https://www.youtube.com/channel/UCzYhHTjoLSZ8EQeduixnzAQ"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={YoutubeLogo}
                      alt="youtube-logo"
                      height={40}
                      width={40}
                    />
                    Subscribe
                  </a>
                </Button>
            
                </motion.li>
               
              </ul>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
  );
};

export default MobileNavBar;
