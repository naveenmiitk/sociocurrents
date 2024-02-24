import { groq } from 'next-sanity';
import React from 'react'
import { client } from '../../../../sanity/lib/client';
import Link from 'next/link';
import { Post, answerWriting } from '@/lib/type/type';
import { cn } from '@/lib/utils';
import { poppins } from '../layout';
import { Metadata } from 'next';
import CustomSwitch from '@/components/AnswerWriting/CustomSwitch';
import { topicsPaper1, yearWise} from '@/lib/type/staticData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import TopicWisePaper1 from '@/components/AnswerWriting/TopicWisePaper1';
import { redirect } from 'next/navigation';


const query = groq`
*[_type =='answerWriting']{
  ...,
}| order(_createdAt asc)[0...100]
`

export const revalidate = 30;

export const metadata: Metadata = {
  title: "PYQP (Paper-2) | Sociology Optional UPSC",
  description:
    "Get Updated Currents Affairs For Your UPSC CSE Preperation with Sociocurrents",
};

const AnswerWritingPage = async ({
  searchParams,
}: {
  searchParams?: {
    filter?: string,
  },
}) => {

    redirect('/answer-writing/paper1');

    const filter = searchParams?.filter || 'year';

    // console.log(searchParams, filter);

    const allposts : answerWriting[]= await client.fetch(query);

  
    const sortDataBasedOnKey = (data : answerWriting[], key : string) => {
      let sortedData = allposts;
      // console.log(data[0].details);

      if(key === 'year'){
        sortedData = allposts.sort(function(a,b){
          let x = a.details.split('/')[0];
          let y = b.details.split('/')[0];
          // console.log(x, y);
          if(x>y){return 1;}
          if(x<y){return -1;}
          return 0;
        });
      }else if(key === 'paper'){
        sortedData = allposts.sort(function(a,b){
          let x = a.details.split('/')[1];
          let y = b.details.split('/')[1];
          // console.log(x, y);
          if(x>y){return 1;}
          if(x<y){return -1;}
          return 0;
        });
      }
      return sortedData;
    }


    const data = sortDataBasedOnKey(allposts, filter.toLowerCase());


  return (
    <div>
      <div className='bg-neutral-50 min-h-[150px] flex items-center justify-center mb-10 '>
        <div className='-skew-x-[20deg] border-4 border-neutral-700 px-4 mx-10 lg:px-10 bg-black text-white'>
        <h1 className={cn('text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-semibold py-4 md:py-6 skew-x-[20deg]',poppins.className )}>Sociology Answer Writing </h1>
        </div>
     </div>

      <div className='w-[80vw] mx-auto space-y-2'>
        <div className='w-full'>
        <CustomSwitch/>
        </div>
       

       {/* {data?.map((post)=>(
        <div key={post._id}>
            <Link href={`/answer-writing/${post.slug.current}`}> <h1 className='hover:text-red-600 text-lg'>{post.title}</h1></Link>
        </div>
       ))} */}
    </div>

        {
          filter === 'topic' && 
          <TopicWisePaper1 data={data}/>
        }

        {
          filter === 'year' && (
            <div className='my-20'>
              {yearWise.map((year, index)=>(
                <div key={index} className='max-w-4xl mx-auto'>
                  <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                      <AccordionTrigger>
                  <h1 className='font-semibold'>{year.year}</h1>
                  </AccordionTrigger>
                  <AccordionContent>
                  {data.map((post)=>(
                    <div key={post._id}>
                      {
                        post.details.split('/')[0] === year.year && (
                          <div key={post._id}>
                          <Link href={`/answer-writing/${post.slug.current}`}> <h1 className='hover:text-red-600 text-lg pl-8'>✅ {post.title}</h1></Link>
                          </div>
                        )
                      }
                    </div>
                  ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
                </div>
              ))}
            </div>
          )
        }

    </div>
    
  )
}

export default AnswerWritingPage


// { _id: React.Key | null | undefined; slug: { current: any; }; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | Iterable<React.ReactNode> | null | undefined; }