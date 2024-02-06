import React from "react";
import { Button } from "@/components/ui/button";
import { TrackButtonClicked } from "@/components/Analytics/CustomEvent";
import { Metadata } from "next";
import GoogleMeetLogo from "../../../../public/GoogleMeet.svg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About SocioCurrent | Sociology Optional UPSC",
  description:
    "Get Updated Currents Affairs For Your UPSC CSE Preperation with Sociocurrents",
};

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto min-h-[50vh]">
      <div className="border-b-2 border-neutral-300 pb-4 mx-4 md:mx-10 flex items-center justify-center">
        <div className="-skew-x-[20deg] border-4 border-neutral-700 px-4 mx-10 lg:px-10 bg-black text-white">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold skew-x-[20deg] py-2 md:py-4">
            About Us
          </h1>
        </div>
      </div>

      <div className="py-6 px-6 md:px-10 text-justify">
        <h1 className="text-xl font-semibold underline underline-offset-8 py-2">
          Our Story
        </h1>
        <h1 className="text-lg">
          Three aspirants, Three IITians and Three Losers grappling with
          sociology optional!!! How did we meet ? We just bumped outside the
          UPSC Bhawan in 2022. It was my third interview, and once again,
          success eluded me. Is there anything we could do to improve our
          sociology optional score? We lamented on a late night google meet. It
          was evident we were missing something crucial in our sociology
          optional strategy.
        </h1>
      </div>

      <div className="py-6 px-6 md:px-10 text-justify">
        <h1 className="text-xl font-semibold underline underline-offset-8 py-2">
          The Introspection
        </h1>
        <h1 className="text-lg">
          Sociology was a strange optional. It had a well defined syllabus that
          overlapped with some of the GS-1 portion. More importantly the
          questions being asked were repetitive. Year after Year similar
          questions appeared in the paper. Now this was both a boon and a bane.
          While it gave a sense that the paper was predictable it also meant
          that everyone else was almost writing the same mugged up answers. How
          could we make ourselves distinct in this sea of Near Perfect Answer
          Writers. Probably we knew the answer all this while. Its simple by
          applying the sociological concepts to the contemporary developments .
          To show that you have not only mugged those thinkers but can also
          connect them with current events.
        </h1>
      </div>

      <div className="py-6 px-6 md:px-10 text-justify">
        <h1 className="text-xl font-semibold underline underline-offset-8 py-2">
          How Sociocurrents was born ?
        </h1>
        <h1 className="text-lg">
          &quot;I have an idea,&quot; I exclaimed. ....the other two replied Umm
          Hmmm and we knew instinctively that we are going to revolutionize how
          sociology was taught for the UPSC. We all believed in an idea that
          there is a smarter way of approaching sociology for this exam. We
          believed that you can score a decent marks even with the minimum but
          effective sources. No need of scavenging through loads of unwanted
          content. A total waste of time and effort. The solution was clear:
          read a basic number of thinkers, learn to apply them, connect with
          current affairs, and provide relevance in answers. This was much more
          effective than mugging up hundreds of thinkers and writing boring and
          abstruse answers. We had a solution, one that could help a thousand
          others like me. That’s when Sociocurrents was born.
        </h1>
      </div>

      <div className="py-6 px-6 md:px-10 text-justify">
        <h1 className="text-xl font-semibold underline underline-offset-8 py-2">
          Our Core values
        </h1>
        <h1 className="text-lg">
          What we stand for as a company is embodied in four core values. They
          form the foundation of our company and drive us daily:
        </h1>
        <ol className="pl-3">
          <li className="text-lg">
            1. Deliver the smartest sociology preparation content imaginable
          </li>
          <li className="text-lg">
            2. Connect with every student and provide killer service. Your
            future is important and we want to help you succeed
          </li>
          <li className="text-lg">
            3. Hire those guys who always say &quot;I got it...I will figure out
            a way&quot;
          </li>
          <li className="text-lg">
            4. Create a casual work environment- We are obsessed with those
            start up cubicles and the animated discussions over google meet.
          </li>
        </ol>
      </div>

      <div className="py-6 px-6 md:px-10 text-center flex flex-col gap-y-4 items-center justify-center mb-20">
        <h1 className="text-xl font-semibold border-2 border-red-500 p-4 rounded-lg ">
          Do you think you can teach sociology current affairs better than us ?
        </h1>
        {/* <h1 className="text-xl text-center font-semibold">Tell us how and earn your seat in the Cubicle.</h1> */}
        {/* ?subject:Schedule%20Google%20Meet%20For%20Discussion */}
        <Button asChild onClick={TrackButtonClicked} className="mt-6">
          <a href="mailto:sociocurrents@gmail.com">
            <Image
              src={GoogleMeetLogo}
              className="w-6 h-6 mr-2"
              alt="GoogleMeet"
            />
            Lets Google Meet
          </a>
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;
