import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import React from "react";
import YoutubeLogo from "../../../public/youtube.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 w-full pt-10 py-4 border-0 border-red-500">
      <div className="flex lg:w-[80vw] lg:mx-auto flex-col md:flex-row text-white  justify-between border-0 border-green-500 px-4 lg:px-0">
        <div className="lg:w-1/3 flex-1 pr-4 border-0 border-red-500">
          <div className="border-b border-0 border-white mb-4 mt-4 pb-2 lg:pb-0">
            <h1>Quick Links</h1>
          </div>

          <div className="flex flex-col space-y-4">
            <Link href={"/about"}>
              <h1>About Socio Currents </h1>
            </Link>
            <Link href={"/contact-us"}>
              <h1>Contact Us </h1>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/3 min-h-[120px] pr-4 flex flex-col border-0 border-red-500">
          <div className="border-b border-0 border-white items-start justify-start pt-4 pb-2 lg:pb-0">
            <h1>Connect</h1>
          </div>
          <div className="flex flex-1 space-x-4 pt-4 border-0 border-red-500">
            <div className="border-[1px] rounded-full w-10 h-10 flex justify-center items-center p-2 hover:text-black hover:bg-white">
            <a href={'https://www.linkedin.com/company/sociocurrents/about/'} target='_blank' rel="noopener noreferrer"><Linkedin className="w-8 h-8 p-1 " /></a>
            </div>
            <div className="border-[1px] rounded-full w-10 h-10 flex justify-center items-center p-2 hover:text-black hover:bg-white">
            <a href={'https://www.instagram.com/sociocurrents/'} target='_blank' rel="noopener noreferrer"><Instagram className="w-8 h-8 p-1 " /></a>
            </div>
            <div className="border-[1px] rounded-full w-10 h-10 flex justify-center items-center p-2 hover:text-black hover:bg-white">
            <a href={'https://www.youtube.com/channel/UCzYhHTjoLSZ8EQeduixnzAQ'} target='_blank' rel="noopener noreferrer"><Youtube className="w-8 h-8 p-1 " /></a>
            </div>
            
            
            {/* <Instagram className="w-8 h-8 border-[1px] rounded-full p-[4px] hover:text-black hover:bg-white" />
            <Youtube className="w-8 h-8 border-[1px] rounded-full p-[4px] hover:text-black hover:bg-white" /> */}
            {/* <div className='mx-4'>
                    <Image src={YoutubeLogo} alt='youtubeLogo'
                    width={32}
                    height={32}
                    className='border-[1px] rounded-full border-white p-1'/>

                    </div> */}

            {/* <h1>FB</h1>
                    <h1>FB</h1>
                    <h1>FB</h1> */}
          </div>
        </div>
        <div className="lg:w-1/3 border-0 flex-1 border-red-500">
          <div className="border-b border-0 border-white pt-4 pb-2 lg:pb-0">
            <h1>About Social Currents</h1>
          </div>

          <div className="flex-1 pt-1">
            {/* <h1>
              &quot;Socio Currents&quot; is an innovative initiative designed to
              cater specifically to the needs of aspirants preparing for the
              Union Public Service Commission Civil Services Examination (UPSC
              CSE), with a focus on the Sociology optional subject.
            </h1> */}
            <h1>
              Socio Currents assists students in preparing for the UPSC CSE exam
              with Sociology as an optional subject. Our team of accomplished
              sociology teachers offers expert resources and guidance to help
              you realize your dream of becoming an IAS officer.
            </h1>
          </div>
        </div>
      </div>
      <div className="border-t border-white lg:w-[80vw] lg:mx-auto text-white flex flex-col lg:flex-row items-center justify-between pt-4 pb-0 mt-4 mx-4 px-4 lg:px-0">
        <h1 className="text-lg">Socio Currents</h1>
        <h1 className="text-normal">Copyright Ⓒ 2024. All Rights Reserved.</h1>
      </div>
      <div className="border-0 hidden border-white lg:w-[80vw] lg:mx-auto text-white flex-col lg:flex-row items-center justify-center py-0 mt-4 mx-4 px-4 lg:px-0">
        <h1 className="text-lg text-center">
          Made with ❤️ in India | Revolution in Society
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
