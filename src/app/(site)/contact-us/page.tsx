import React from "react";
import YoutubeLogo from "../../../../public/youtube.svg";
import GmailLogo from "../../../../public/gmail.svg";
import InstagamLogo from "../../../../public/instagram.svg";
import MetaLogo from "../../../../public/meta.svg";
import LinkedinLogo from "../../../../public/Linked.svg";
import TelegramLogo from "../../../../public/telegram.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { anton, poppins } from "../layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact SocioCurrent | Sociology Optional UPSC',
  description: 'Get Updated Currents Affairs For Your UPSC CSE Preperation with Sociocurrents',
}

const ContactUsPage = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-[70vh]">
      <div className="border-b-2 border-neutral-300 pb-4 mx-4 md:mx-10 flex items-center justify-center">
        <div className="-skew-x-[20deg] border-4 border-neutral-700 px-4 mx-10 lg:px-10 bg-black text-white">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold skew-x-[20deg] py-2 md:py-4">
          Contact Us
        </h1>
        </div>
       
      </div>

      <div className="max-w-2xl mx-10 my-6">
        <h1 className="font-semibold text-lg">We want to hear from you.</h1>
        <h1>
          Send us your suggestions, feedback or questions and we&apos;ll do our best
          to help. Please be as specific as possible to ensure the fastest and
          most accurate response.
        </h1>
        <h1 className="my-4">Shoot us an Email : 
          <h1 className="inline ml-2"><a href="mailto:contact@sociocurrents.com" className="text-red-700 underline underline-offset-4">contact@sociocurrents.com</a></h1>
        </h1>

        <div className="my-10">
          <h1>Office Hours</h1>
          <h1>09:00 AM To 06:00 PM</h1>
        </div>

       
      </div>

      <div className="py-6 px-10 text-justify">
        {/* <h1 className="text-red-600 font-semibold text-2xl text-center">
          Below are the soical media handles to Contact us.{" "}
        </h1> */}
        <h1 className="bg-black text-white p-2 inline-flex rounded-xl">Lets&apos; Connect : </h1>
        <div className="flex items-center justify-around py-10">
        <a href={'mailto:sociocurrents@gmail.com'} target='_blank' rel="noopener noreferrer"><Image src={GmailLogo} width={40} height={40} alt="gmaillogo" /></a>
        <a href={'https://www.instagram.com/sociocurrents/'} target='_blank' rel="noopener noreferrer">
          <Image
            src={InstagamLogo}
            width={40}
            height={40}
            alt="instagramlogo"
          /></a>
           <a href={'https://www.linkedin.com/company/sociocurrents/about/'} target='_blank' rel="noopener noreferrer"><Image src={LinkedinLogo} width={40} height={40} alt="metalogo" /></a>
           <a href={'https://t.me/sociocurrrents/'} target='_blank' rel="noopener noreferrer"><Image src={TelegramLogo} width={40} height={40} alt="Telegramlogo" /></a>
           <a href={'https://www.youtube.com/channel/UCzYhHTjoLSZ8EQeduixnzAQ'} target='_blank' rel="noopener noreferrer"><Image src={YoutubeLogo} width={40} height={40} alt="youtubelogo" /></a>
        </div>
      </div>

      <div className="hidden items-center justify-center gap-y-6 border-t-2 border-dashed pt-10 mx-4 mb-10">
        <div className="max-w-xl flex flex-col  items-center justify-center gap-y-4">
          <h1 className={cn("text-2xl text-center font-mono")}>
            Do you think you can teach Sociology Current Affairs better than us?
          </h1>
          <h1 className="text-xl text-center font-mono inline">Tell us How?</h1>
          <h1 className="bg-yellow-100 text-red-600 p-2 inline rounded-lg">
            Seeking Co-Founders
          </h1>
          <div>
            <Button className="px-6" asChild>
              <a href="mailto:sociocurrents@gmail.com " >Let&apos;s Connect</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
