import { groq } from 'next-sanity';
import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TopicWisePaper1 from "@/components/AnswerWriting/TopicWisePaper1";
import { topicsPaper1, yearWise } from "@/lib/type/staticData";
import CustomSwitch from "@/components/AnswerWriting/CustomSwitch";
import { Post, answerWriting } from "@/lib/type/type";
import { client } from '../../../../../sanity/lib/client';
import { poppins } from '../../layout';
import { cn, sortDataBasedOnKey } from '@/lib/utils';
import Link from 'next/link';
import TopicWisePaper2 from '@/components/AnswerWriting/TopicWisePaper2';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

const query = groq`
*[_type =='answerWriting' && details match 'Paper2']{
  ...,
}| order(_createdAt asc)[0...400]
`;

export const revalidate = 30;

export const metadata: Metadata = {
  title: "PYQP (Paper-2) | Sociology Optional UPSC",
  description:
    "Get Updated Currents Affairs For Your UPSC CSE Preperation with Sociocurrents",
};

const AnswerWritingPage2 = async ({
  searchParams,
}: {
  searchParams?: {
    filter?: string;
  };
}) => {

     const filter = searchParams?.filter || "year";

    //  console.log(searchParams, filter);

      if (!["year", "topic"].includes(filter.toLowerCase())) {
        return notFound();
      }

     const allposts: answerWriting[] = await client.fetch(query);


     const data = sortDataBasedOnKey(allposts, filter.toLowerCase());


  return (
    <div>
      <div className="bg-white min-h-[150px] flex items-center justify-center mb-10 ">
        <div className="-skew-x-[20deg] border-4 border-neutral-700 px-4 mx-10 lg:px-10 bg-black text-white">
          <h1
            className={cn(
              "text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-semibold py-4 md:py-6 skew-x-[20deg]",
              poppins.className
            )}
          >
            PYQP (Paper-2){" "}
          </h1>
        </div>
      </div>

      <div className="w-[80vw] mx-auto space-y-2">
        <div className="w-full">
          <CustomSwitch />
        </div>

        {/* {data?.map((post)=>(
        <div key={post._id}>
            <Link href={`/answer-writing/${post.slug.current}`}> <h1 className='hover:text-red-600 text-lg'>{post.title}</h1></Link>
        </div>
       ))} */}
      </div>

      {filter === "topic" && <TopicWisePaper2 data={data} />}

      {filter === "year" && (
        <div className="my-20 w-[90vw] md:w-[80vw] mx-auto">
          {yearWise.map((year, index) => (
            <div key={index} className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <h1 className="font-semibold flex flex-1 justify-between">
                      {year.year}
                    </h1>
                    {data.filter(
                      (item) => item.details.split("/")[0] === year.year
                    ).length > 0 ? (
                      <span className="text-right hover:no-underline! pr-8">
                        (
                        {
                          data.filter(
                            (item) => item.details.split("/")[0] === year.year
                          ).length
                        }
                        )
                      </span>
                    ) : (
                      <></>
                    )}
                  </AccordionTrigger>
                  <AccordionContent>
                    {data.map((post) => (
                      <div key={post._id}>
                        {post.details.split("/")[0] === year.year && (
                          <div key={post._id} className="py-[6px]">
                            <Link href={`/answer-writing/${post.slug.current}`}>
                              {" "}
                              <h1 className="hover:text-red-600 text-[16px] md:text-lg  pl-4 md:pl-8">
                                ✅ {post.title}
                              </h1>
                            </Link>
                          </div>
                        )}
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnswerWritingPage2
