import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import Logo from "../../../public/img2.png";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { anton } from "@/app/(site)/layout";
import { Search, Youtube } from "lucide-react";
import SearchBar from "../Search/SearchBar";
import MobileNavBar from "./MobileNavBar";
import NavMenuComponent from "./NavMenuComponent";
import YoutubeLogo from "../../../public/youtube.svg";

const NavBar = () => {
  return (
    <nav className="p-2">
      <div className="flex justify-between  border-0 border-red-400">
        {/* left */}
        <div className="border-0 border-red-400 flex-1 w-[100px] md:w-[200px]">
          <Link href={"/"} className="relative flex items-center">
            <div className={cn("flex items-center", anton.className)}>
              <div className="ml-4">
                <h1 className="font-bold text-lg md:text-lg lg:text-2xl tracking-wider">
                  Socio
                </h1>
                <h1 className="font-bold text-lg md:text-lg lg:text-2xl tracking-wider">
                  Currents
                </h1>
              </div>
              <Image
                src={Logo}
                alt="logo"
                width={100}
                height={100}
                className="border-0 border-red-500"
              />
            </div>
          </Link>
        </div>

        <div className="flex items-center tbxl:hidden">
          <SearchBar />
          <MobileNavBar />
        </div>

        {/* right */}

        <div className="">
          <div className="hidden tbxl:flex items-center gap-x-0 border-0 border-red-400 ">
            <NavMenuComponent />

            <div className="flex h-10 items-center mx-1 lg:mx-2 border-[0px] border-black">
              <SearchBar />

              <Button
                className="bg-yellow-400/80 text-black hover:bg-yellow-400/80 lg:bg-yellow-400/80  px-2! "
                asChild
              >
                <a
                  href={
                    "https://www.youtube.com/channel/UCzYhHTjoLSZ8EQeduixnzAQ"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h1 className="md:hidden lg:block">Subscribe</h1>

                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
