import Image from 'next/image';
import {urlForImage} from '../../../sanity/lib/image';
import Link from 'next/link'
import { PortableTextComponents, PortableTextReactComponents } from '@portabletext/react';

export const RichTextComponents: any =  {
    types: {
        image: ({value}: any) => {
            return(
                <div className='relative w-full h-96 m-10 mx-auto'>
                    <Image
                        className='object-contain'
                        src={urlForImage(value)}
                        alt={value.alt || "Blog Image NYPedia"}
                        fill
                    />
                </div>
            );
        },
        list : {
            bullet:({children} : any) => (
                <ul className="ml-10 py-5 list-desc space-y-5">{children}</ul>
            ),
            number:({children} : any) => (
                <ol className='mt-lg list-decimal'>{children}</ol>
            ),
            checkmarks: ({children}: any) => <ol className="m-auto text-lg">{children}</ol>,
        },
        
        listItem: {
            // Ex. 1: customizing common list types
            bullet: ({children} : any) => <li style={{listStyleType: 'disclosure-closed'}}>{children}</li>,
        
            // Ex. 2: rendering custom list items
            checkmarks: ({children} : any) => <li>✅ {children}</li>,
        },

        block : {
            h1:({children} : any) => (
                <h1 className='text-5xl py-10 font-bold text-teal-400'>{children}</h1>
            ),
            h2:({children} : any) => {
                return(
                    <div className='text-4xl py-10 font-bold text-teal-400'>
                         <h2 className="text-4xl py-10 font-bold text-teal-400">{children}</h2>
                    </div>
                   
                )
            },
            h3:({children} : any) => (
                <h3 className='text-3xl py-10 font-bold text-teal-400'>{children}</h3>
            ),
            h4:({children} : any) => (
                <h1 className='text-2xl py-10 font-bold text-teal-400'>{children}</h1>
            ),
            blockquote:({children} : any) => (
                <blockquote className='border-l-[#0a84f7] border-l-4 pl-5 py-5 my-5'>
                    {children}
                </blockquote>
            ),
        },    
      marks: {
        link: ({children, value} :  any) => {
          const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
          return (
            <Link href={value.href} rel={rel}
            className='underline decoration-[#0a84f7] hover:decoration-black'
            >
                {children}</Link>
          );
        },
      },
  
}
}
