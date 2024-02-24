import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { answerWriting, notes } from "./type/type";

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

export const sortDataBasedOnKey = (data: answerWriting[] | notes[],  key: string) => {
       let sortedData = data;
       
      //  data.map(value=>console.log(value.details));

       if (key === "year") {
         sortedData = data.sort(function (a, b) {
           let x =  Number(a.details.split("/")[0]);
           let y =  Number(b.details.split("/")[0]);
           // console.log(x, y);
           if (x > y) {
             return 1;
           }
           if (x < y) {
             return -1;
           }
           return 0;
         });
       } else if (key === "paper") {
         sortedData = data.sort(function (a, b) {
           let x =  Number(a.details.split("/")[1]);
           let y =  Number(b.details.split("/")[1]);
          //  console.log(x, y);
           if (x > y) {
             return 1;
           }
           if (x < y) {
             return -1;
           }
           return 0;
         });
       } else if(key === "topic"){
          sortedData = data.sort(function (a, b) {
            let x =  parseFloat(a.details.split("/")[2]);
            let y =  parseFloat(b.details.split("/")[2]);
            // console.log(x, y);
            if (x > y) {
              return 1;
            }
            if (x < y) {
              return -1;
            }
            return 0;
          });
       } else if (key === "question"){
          sortedData = data.sort(function (a, b) {
            let x = Number(a.details.split("/")[3]);
            let y = Number(b.details.split("/")[3]);
            if (x > y) {
              return 1;
            }
            if (x < y) {
              return -1;
            }
            return 0;
          });
       }
      return sortedData;
};


export const matchCloseNumbers =(a:string, b : string, epsilon = 0.001) => {
  const aParts = String(a).split('.');
  const bParts = String(b).split('.');

  if (aParts.length !== 2 || bParts.length !== 2) {
    return false;
  }

  const matchWhole = aParts[0] === bParts[0];

  const aDigit = parseInt(aParts[1][0], 10);
  const bDigit = parseInt(bParts[1][0], 10);
  const matchFirstDigit = aDigit === bDigit;

  return matchWhole && matchFirstDigit;
}


export const getBaseHref = (base : string) => {
      if (base === 'post'){
        return '/post/';
      }else if (base === 'answerWriting'){
        return '/answer-writing/';
      }else if (base === 'notes'){
        return '/notes/';
      }
      else 
      return '/post/';
} 

