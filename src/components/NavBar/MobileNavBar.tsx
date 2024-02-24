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
import Logo from "../../../public/Marx.png";

const MobileNavBar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const Toggle = () => {
    setOpen(!open);
  };

  useClickAway(ref, () => setOpen(false));

  useEffect(()=>{
    if (open) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  },[open]);

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
    <div
      className="flex flex-col flex-1 items-center text-end justify-end border-0 border-red-500"
      ref={ref}
    >
      {/* {open? <X className='w-8 h-8 ' onClick={Toggle}/> : <AlignJustify className='w-8 h-8' onClick={Toggle}/> } */}
      <div onClick={Toggle} className="z-50">
        <Hamburger toggled={open} toggle={setOpen} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
            className="fixed left-0 shadow-4xl bottom-0 right-0 top-[5.8rem]  p-10 pt-10 bg-neutral-100 border-b border-b-white/20 z-50 h-screen"
            // className="fixed top-[90px] right-0 w-[45%] h-[40%] bg-neutral-100 bg-opacity-100 z-50 rounded-l-xl" // top-[5.8rem]
          >
            <div className="absolute top-10 right-0 p-4">
              {/* <button onClick={Toggle} className="text-white">
            <X className='w-8 h-8'/>
            </button> */}
            
            </div>
            <div className="flex items-start justify-start h-full w-full p-2">
              {/* Add your navigation links here */}
              <ul
                className={cn(
                  "text-black font-semibold text-lg flex flex-col items-start justify-center w-full"
                )}
              >
                <motion.li
                  className="py-2 hover:text-yellow-400 text-center flex w-full"
                  onClick={Toggle}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + 1 / 10,
                  }}
                >
                  <Link href={"/notes/paper1"}>Notes Paper 1</Link>
                </motion.li>
                <motion.li
                  className="py-2 hover:text-yellow-400 text-center flex w-full"
                  onClick={Toggle}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + 2 / 10,
                  }}
                >
                  <Link href={"/notes/paper2"}>Notes Paper 2</Link>
                </motion.li>
                <motion.li
                  className="py-2 hover:text-yellow-400 text-center flex w-full"
                  onClick={Toggle}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + 3 / 10,
                  }}
                >
                  <Link href={"/thinkers"}>Thinkers</Link>
                </motion.li>
                <motion.li
                  className="py-2 hover:text-yellow-400 text-center flex w-full"
                  onClick={Toggle}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + 4 / 10,
                  }}
                >
                  <Link href={"/sociocurrents"}>Current Affairs</Link>
                </motion.li>
                {/* <li className="py-2 pb-4 hover:text-yellow-600 text-center"  onClick={Toggle}><Link href={'/readouts'}>Readouts</Link></li> */}
                <motion.li
                  className="py-2 pb-4 hover:text-yellow-400 text-center flex w-full"
                  onClick={Toggle}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + 5 / 10,
                  }}
                >
                  <Link href={"/answer-writing/paper1"}>PYQ Paper 1</Link>
                </motion.li>
                <motion.li
                  className="py-2 pb-4 hover:text-yellow-400 text-center flex w-full"
                  onClick={Toggle}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + 6 / 10,
                  }}
                >
                  <Link href={"/answer-writing/paper2"}>PYQ Paper 2</Link>
                </motion.li>
                {/* <li className="py-2">Contact</li> */}
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + 7 / 10,
                  }}
                >
                  <Button
                    className="bg-yellow-400/80 text-black hover:bg-yellow-400/80"
                    asChild
                  >
                    <a
                      href={
                        "https://www.youtube.com/channel/UCzYhHTjoLSZ8EQeduixnzAQ"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Subscribe
                    </a>
                  </Button>
                  {/* <Button
                    className="py-4 bg-white shadow-sm shadow-black text-black hover:bg-neutral-50/90"
                    onClick={Toggle}
                    asChild
                  >
                    <a
                      href={
                        "https://www.youtube.com/channel/UCzYhHTjoLSZ8EQeduixnzAQ"
                      }
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
                  </Button> */}
                </motion.li>
              </ul>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 1 }}
                transition={{
                  ease: "linear",
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + 8 / 10,
                }}
              >
                <Image src={Logo} alt="logo" width={180} className="" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavBar;
