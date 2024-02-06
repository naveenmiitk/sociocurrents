import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import Logo from "../../../public/img2.png";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { anton } from "@/app/(site)/layout";
import { Search } from "lucide-react";
import SearchBar from "../Search/SearchBar";
import MobileNavBar from "./MobileNavBar";


const navLinks = [
  {
    id: "1",
    title: "Sociological Thinkers",
    href: "/thinkers",
  },
  {
    id: "2",
    title: "Socio-Current Affairs",
    href: "/sociocurrents",
  },
  {
    id: "3",
    title: "Answer Writing",
    href: "/answer-writing",
  },
];

const NavBar = () => {
  return (
    <nav className="p-2">
      <div className="flex justify-between  border-0 border-red-400">
        {/* left */}
        <div className="border-0 border-red-400 flex-1 w-[100px] md:w-[200px]">
          <Link href={"/"} className="relative flex items-center">
            
            <div className={cn("flex items-center", anton.className)}>
              <div className="ml-4">
              <h1 className="font-bold text-lg md:text-xl lg:text-2xl tracking-wider">
                Socio
              </h1>
              <h1 className="font-bold text-lg md:text-xl lg:text-2xl tracking-wider">
                Currents
              </h1>
              </div>
              <Image src={Logo} alt="logo" width={100} height={100} className="border-0 border-red-500"/>
            </div>
          </Link>
        </div>


        <div className="flex items-center md:hidden">
        <SearchBar/>
        <MobileNavBar/>
        </div>

        {/* right */}
        <div className="lg:w-1/4"></div>

        <div className="">
          <div className="hidden md:flex items-center gap-x-0 border-0 border-red-400 ">
            
           
            {navLinks.map((item) => (
              <div
                key={item.id}
                className={cn(
                  "border-spacing-1 border-[2px] border-r-0 border-black p-[4px] hover:bg-yellow-50",
                  item.id === navLinks.length.toString() ? "border-r-[2px]" : ""
                )}
              >
                <Link href={item.href}>
                  <h1 className="text-[12px] md:text-[12px] lg:text-[14px]">
                    {item.title}
                  </h1>
                </Link>
              </div>
            ))}

            <div className="flex h-10 items-center mx-2 lg:mx-4">
            <SearchBar/>
            
            <Button className="bg-yellow-400/80 text-black hover:bg-yellow-400/80" asChild><a href={'https://www.youtube.com/channel/UCzYhHTjoLSZ8EQeduixnzAQ'} target='_blank' rel="noopener noreferrer">Subscribe</a></Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
