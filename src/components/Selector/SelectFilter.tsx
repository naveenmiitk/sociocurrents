"use client";

import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const SelectFilter = () => {
    const [selectedValue, setSelectedValue] = useState<String | null>(null);
    // console.log(selectedValue);
  return (
    <div className='mx-10 md:mx-5'>
    <Select onValueChange={(value)=>setSelectedValue(value)}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Sort By" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="newest">Newest</SelectItem>
    <SelectItem value="oldest">Oldest</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
    </Select>
    </div>
  )
}

export default SelectFilter