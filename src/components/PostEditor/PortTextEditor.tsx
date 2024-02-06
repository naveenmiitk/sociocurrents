import Image from 'next/image';
import React from 'react'
import PortableText from 'react-portable-text';
import { urlForImage } from '../../../sanity/lib/image';
import { Post } from '@/lib/type/type';
import { PortableText as PTText } from '@portabletext/react';
import Link from 'next/link';

interface PortTextEditorProps {
    post : Post
}




const PortTextEditor:React.FC<PortTextEditorProps> = ({post}) => {
    const components = {
        types : {
            image: (props: any) => {
                // console.log('props',props);
                return(
                    <>
                    {props.value?.asset?._ref ? <>
                        <div className='w-full border-0 border-red-500 flex items-center justify-center'>
                        <div className='relative my-2 max-h-[500px] max-w-[500px] image-container flex flex-col items-center justify-center border-[2px] border-neutral-500 p-2'>
                        
                             <Image
                            className='object-contain border-0 border-blue-500 image'
                            src={urlForImage(props.value?.asset?._ref)}
                            alt={props?.alt || post.title || "Socio Currents"}
                            fill
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw"
                        />
                        
                        
                        <h1>{props.value?.alt}</h1>
                    </div>
        
                    </div>
                    </> : <></>}
                    </>
                  
                    
                );
            }, 
    
        }, 
        marks: {
          em: ({children} : any) => <em className="text-gray-600 font-semibold">{children}</em>,
          internalLink: ({value, children} : any) => {
            const {slug = {}} = value
            const href = `/${slug.current}`
            return <a href={href} className='text-green-500 underline underline-offset-4'>{children}</a>
          }, 
          link: ({value, children} : any) => {
            const { blank, href } = value
            return blank ?
              <a href={href} target="_blank" rel="noopener" className='text-blue-600 underline underline-offset-4'>{children}</a>
              : <a href={href} className='text-red-500 underline underline-offset-4' target="_blank" rel="noopener">{children}</a>
          }
        },
        block : {
            h1: ({children} : any) => <h1 className="text-2xl text-red-800">{children}</h1>,
            h2: ({children} : any) => <h1 className="text-xl text-red-700">{children}</h1>,
            h3: ({children} : any) => <h1 className="text-xl text-red-700">{children}</h1>,
            h4: ({children} : any) => <h1 className="text-lg text-red-500">{children}</h1>,
            blockquote: ({children} : any) => <blockquote className="border-l-[#e6141e] border-l-4 pl-5 py-2">{children}</blockquote>,
            normal:({children} : any) =>  (
                <>
               {(children.length === 1 && children[0] === '') ?  
                 <br/> : <p className='text-[14px] md:text-[16px]'>{children}</p> }
                </>
            ),

        } , 
        list : {
            bullet: ({children} : any) => <ul className="mt-xl">{children}</ul>,
            number: ({children} : any ) => <ol className="mt-lg">{children}</ol>,
            checkmarks: ({children}:  any) => <ol className="m-auto text-lg">{children}</ol>,

        }, 
        listItem: {
            bullet: ({children} : any) => <li style={{listStyleType: 'disc'}} className='ml-6'>{children}</li>,
            //disclosure-closed 
            number : ({children} : any) => <li style={{listStyleType: 'decimal'}} className='ml-6'>{children}</li>,
            checkmarks: ({children}: any ) => <li>✅ {children}</li>,
          },
        
    }


    return (
        <PTText
        value={post.body}    
        components={components}    
        />
    )
}



const PortTextEditor1:React.FC<PortTextEditorProps> = ({post}) => {
  return (
    <PortableText 
    content={post.body}  
    projectId = {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
    className='text-justify'
    serializers ={{
        h1:({children} : any) => (
            <h1 className='text-2xl py-5 font-bold text-red-800'>{children}</h1>
        ),
        h2: (props:any) => <h2 className='text-red-500 font-bold text-2xl font-serif py-5' {...props}/>,
        li: ({ children}:any) => (
            <div className='my-2'>
            <li className="list-decimal ml-6 md:ml-10 mb-1 text-[16px] md:text-[18px]">{children}</li>
            </div>
        ),
        h3:({children} : any) => (
            <h3 className='text-xl py-5 font-bold text-blue-800'>{children}</h3>
        ),
        h4:({children} : any) => (
            <h1 className='text-xl py-5 font-bold text-red-600'>{children}</h1>
        ),
        blockquote:({children} : any) => (
            <blockquote className='border-l-[red] border-l-4 pl-5 py-5 my-5'>
                {children}
            </blockquote>
        ),
        normal:({children} : any) =>  (
            <>
           {(children.length === 1 && children[0] === '') ?  
             <br/> : <p className='text-[16px] md:text-[18px]'>{children}</p> }
            </>
        ),
        highlight:({children} : any) => (
            <p className='text-[16px] md:text-[18px] bg-yellow-200 pr-2 pl-1 inline-block'>{children}</p>
        ),
        strong : ({children} : any) => (
            <span className='font-semibold py-2 inline'>{children}</span>
        ),
        // link : ({children,value} : any) => (
        //     // <div>
        //     // <a href={value}>
        //     // <p className='underline underline-offset-4 text-red-600 cursor-pointer'>{children}</p>
        //     // </a>
        //     // </div>
        //     <div>
        //         <a href={value}>
        //         {children}
        //         </a>
        //     </div>
        // ),
        link : ({children, href} : any) => {
            // console.log(href);
            return (
                <Link href={href} target='_blank' rel="noopener noreferrer">
                <p className='underline underline-offset-4 text-red-600 cursor-pointer'>{children}</p>
                </Link>
            )
        }, 
    
    
        
        image: (props: any) => {
            // console.log('props',props);
            return(
                <div className='w-full border-0 border-red-500 flex items-center justify-center'>
                    <div className='relative my-2 max-h-[500px] max-w-[500px] image-container flex flex-col items-center justify-center border-[2px] border-neutral-500 p-2'>
                    <Image
                        className='object-contain border-0 border-blue-500 image'
                        src={urlForImage(props.asset._ref)}
                        alt={props?.alt || post.title || "Socio Currents"}
                        fill
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                    />
                    <h1>{props?.alt}</h1>
                </div>

                </div>
                
            );
        },

    }}
    />
  )
}



export default PortTextEditor

