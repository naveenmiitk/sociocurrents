"use client";

import { Switch } from "@/components/ui/switch"
import React, { useState } from 'react'
import { Label } from "../ui/label"
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../Custom/MovingBorder";
import { cn } from "@/lib/utils";

const CustomSwitch = () => {
    const [toggle, setToggle] = useState(false);
    const [value, setValue] = useState('topic');
    const router = useRouter();
    const path = usePathname();


    const onValueChnage = () => {
      setToggle(!toggle);
      if(toggle){
        setValue('topic');
      }else{
        setValue('year');
      }
      console.log(toggle, value);
      router.push(`${path}?filter=${value}`);
      
    }

  return (
    <div className="flex items-center justify-center space-x-2 w-full">
      <Label htmlFor="toggle" className={cn("text-lg px-1 transition-opacity")}>
        {toggle ? "Year Wise" : ""}
      </Label>
      {/* <Button
        borderRadius="2rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800  shadow-lg shadow-neutral-200"
      > */}
        <Switch
          id="toggle"
          onCheckedChange={onValueChnage}
          value={value}
          className="peer inline-flex items-center h-[24px] w-[44px] shrink-0"
        />
      {/* </Button> */}
      <Label htmlFor="toggle" className="text-lg px-1 transition-opacity">
        {toggle ? "" : "Topic Wise"}
      </Label>
    </div>
  );
}

export default CustomSwitch
