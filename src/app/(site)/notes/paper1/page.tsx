import React from 'react'
import { poppins } from '../../layout';
import { cn, sortDataBasedOnKey } from '@/lib/utils';
import TopicWisePaper1 from '@/components/AnswerWriting/TopicWisePaper1';
import { groq } from 'next-sanity';
import { notes } from '@/lib/type/type';
import { client } from '../../../../../sanity/lib/client';
import { Metadata } from 'next';


const query = groq`
*[_type =='notes' && details match 'Paper1']{
  ...,
}| order(_createdAt asc)[0...400]
`;

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Notes (Paper-1) | Sociology Optional UPSC",
  description:
    "Get Updated Currents Affairs For Your UPSC CSE Preperation with Sociocurrents",
};

const NotesPaper1Page = async () => {

 const allposts: notes[] = await client.fetch(query);

 const data1 = sortDataBasedOnKey(allposts, "topic");
 const data = sortDataBasedOnKey(data1, "question");

  // data.map((value) => console.log(value.details));
  
  return (
    <div className="min-h-[60vh]">
      <div className="bg-white min-h-[150px] flex items-center justify-center mb-10 ">
        <div className="-skew-x-[20deg] border-4 border-neutral-700 px-4 mx-10 lg:px-10 bg-black text-white">
          <h1
            className={cn(
              "text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-semibold py-4 md:py-6 skew-x-[20deg]",
              poppins.className
            )}
          >
           Notes (Paper-1) {" "}
          </h1>
        </div>
      </div>


      <div>
        <TopicWisePaper1 data={data}/>
      </div>
    </div>
  );
}

export default NotesPaper1Page
