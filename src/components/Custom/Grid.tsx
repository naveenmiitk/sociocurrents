import React from "react";

export function GridBackground({children}: {children : React.ReactNode}) {
  return (
    <div className="relative min-h-[200rem] w-full">
       <div className="absolute inset-0 -z-10 h-full w-[full] bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:2rem_3rem]"></div>
      {children}
    </div>
  );
}
