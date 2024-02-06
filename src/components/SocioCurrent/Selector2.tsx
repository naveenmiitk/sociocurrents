"use client";

import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { redirect, useRouter } from 'next/navigation'

interface Selector2Props {
    filter : string | undefined ;
}

const Selector2:React.FC<Selector2Props> = ({filter}) => {

    const rounter = useRouter();

  return (
    <div className='max-w-7xl mx-4 lg:mx-auto border-t-[2px] border-neutral-300 pt-10 mt-10'>
    <div className='mx-10 md:mx-5 mb-20 border-0 border-red-500 flex items-center justify-end lg:max-w-[20%] lg:mx-auto'>
    <Select onValueChange={(value)=>{rounter.push(`/sociocurrents?filter=${value}&page=1`)}}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder={filter || "Sort By"} />
  </SelectTrigger>
  <SelectContent ref={(ref) => {
    if (!ref) return;
    ref.ontouchstart = (e) => {
      e.preventDefault();
    };
  }}>
    <SelectItem value="default">Newest</SelectItem>
    <SelectItem value="paper1">Paper 1</SelectItem>
    <SelectItem value="paper2">Paper 2</SelectItem>
    </SelectContent>
    </Select>
    </div>
    </div>
  )
}

export default Selector2