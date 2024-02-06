import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const capitalise = (str : string) => {
    return str && str[0].toUpperCase() + str.slice(1);
} 

export const hrefToReadable = (str : string) => {
    const strsplit = str.split("_");
    const strCapital = strsplit.map((item)=>(
      capitalise(item)
    ))
    const finalStr = strCapital.join(" ");
    return finalStr || null;
}

export const readableToHref = (str : string) => {
  const strmod = str.toLowerCase().replace(/ /g, "_");
  return strmod || null;
}
