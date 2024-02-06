"use client";

import { event } from 'nextjs-google-analytics';
import React from 'react'

const CustomEvent = () => {
  return (
    <div>CustomEvent</div>
  )
}

export const TrackButtonClicked = () => {
    event("Google Meet Button", {
        page : "About us", 
        time : Date.now(), 
    });
    // console.log("Button Clicked");
}

export default CustomEvent