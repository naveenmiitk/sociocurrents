"use client";

import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import Link from 'next/link';
import { useWindowSize } from 'react-use';

const navLinks = [
    {
      id: "1",
      title: "Notes",
      href: "/Notes",
      isSubPagesExits : true, 
      subpages : [
        {
          title : 'Paper 1', 
          href : '/notes/paper1'
        }, 
        {
          title : 'Paper 2', 
          href : '/notes/paper2'
        }, 
      ]
    },
    {
      id: "2",
      title: "Sociological Thinkers",
      href: "/thinkers",
      isSubPagesExits : false, 
    },
    {
      id: "3",
      title: "Socio-Current Affairs",
      href: "/sociocurrents",
      isSubPagesExits : false, 
    },
    {
      id: "4",
      title: "Answer Writing",
      href: "/answer-writing",
      isSubPagesExits : true, 
      subpages : [
        {
          title : 'Paper 1', 
          href : '/answer-writing/paper1'
        }, 
        {
          title : 'Paper 2', 
          href : '/answer-writing/paper2'
        }, 
      ]
    },
  ];

const NavMenuComponent = () => {
   const { width, height } = useWindowSize();

  return (
    <div className="flex flex-row">
      {/* <h1>{width}, {height}</h1> */}
      {navLinks.map((item, index) => (
        <div key={index} className="flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                {item.isSubPagesExits ? (
                  <>
                    <NavigationMenuTrigger className="border-[1px] border-black bg-white ring-0 rounded-none text-[12px] tbl:text-[12px] lg:text-[14px]">
                      {item.title}
                    </NavigationMenuTrigger>
                  </>
                ) : (
                  <>
                    <NavigationMenuTrigger
                      className="border-[1px] border-black bg-whit ring-0 rounded-none text-[12px] tbl:text-[12px] lg:text-[14px]"
                      hidden
                    >
                      <Link
                        href={item.href}
                        className="border-0 border-black ring-0 rounded-none"
                      >
                        <h1>{item.title}</h1>
                      </Link>
                    </NavigationMenuTrigger>
                  </>
                )}

                {item.isSubPagesExits ? (
                  <>
                    <div>
                      <NavigationMenuContent className="grid gap-y-4 p-4 min-w-[150px] items-center justify-center">
                        {item.subpages?.map((subpage, index) => (
                          <div className="" key={index}>
                            <NavigationMenuLink asChild>
                              <Link href={subpage.href}>
                                <h1>{subpage.title}</h1>
                              </Link>
                            </NavigationMenuLink>
                          </div>
                        ))}
                      </NavigationMenuContent>
                    </div>
                  </>
                ) : (
                  <>
                    <div></div>
                  </>
                )}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      ))}
    </div>
  );
}

export default NavMenuComponent
