"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from '@/assets/icons/star.svg';
import myPic from "@/assets/images/purple_profile_pic.jpeg";
import magicPic from "@/assets/images/space_contact.png";
import Image from 'next/image';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import GithubIcon from '@/assets/icons/github.svg';
import TailwindIcon from '@/assets/icons/tailwind_icon.svg';
import NextIcon from '@/assets/icons/next_icon.svg';
import LinkedInIcon from "@/assets/icons/bxl-linkedin (1).svg";
import CodePenIcon from "@/assets/icons/bxl-codepen.svg";
import EmailIcon from "@/assets/icons/bx-envelope.svg";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from 'framer-motion';
import { useRef } from 'react';

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType:CssIcon,
  },
  {
    title: 'React',
    iconType:ReactIcon,
  },
  {
    title: 'Tailwind',
    iconType:TailwindIcon,
  },
  {
    title: 'Github',
    iconType:GithubIcon,
  },
  {
    title: 'Next.js',
    iconType:NextIcon,
  },
];

const hobbies = [
  {
    title: 'Creating Ceramics',
    emoji:'🧫',
    left:"-15%",
    top: "25%",
  },
  {
    title: 'Playing Modular Synths',
    emoji:'⚡️',
    left:"-15%",
    top: "50%",
  },
  {
    title: 'Making Music',
    emoji:'🎶',
    left:"50%",
    top: "35%",
  },
  {
    title: 'Appreciating  Art',
    emoji:'🖼️',
    left:"50%",
    top: "65%",
  },
  {
    title: 'Enjoying Films and  Movies',
    emoji:'🎥',
    left:"-35%",
    top: "75%",
  },
  {
    title: 'Constantly Learning',
    emoji:'📚',
    left:"30%",
    top: "90%",
  },
  {
    title: 'Exploring the Outdoors',
    emoji:'🏞️',
    left:"-15%",
    top: "0%",
  },
]



export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
  <div id="about" className="pb-20 pt-10  bg-violet-300/50  relative overflow-x-clip">
     <div className="absolute h-[600px] w-[1600px] top-16 left-1/2 -translate-x-1/2 bg-rose-300/50 -z-10 [mask-image:radial-gradient(50%_50%_at_top_center,black,transparent)]"></div>
    <div className="container">
    <SectionHeader 
    title= "Learn More"
    subtitle="Glimpse into my life"
    description="Discover who I am, what I do, and what inspires me."  
    />

    <div className="mt-8 flex flex-col gap-6">
      <div className="md:grid  md:grid-cols-10 ">

      <Card className="h-[550px] md:h-[450px] md:col-span-6 md:-mt-1 lg:h-[440px] relative overflow-x-clip overflow-y-clip"> 
      <div className="absolute h-[550px] w-[450px] top-0 left-1/2 -translate-x-1/2 bg-rose-200/50 -z-10 [mask-image:radial-gradient(50%_50%_at_top_center,black,transparent)]"></div>
      <div className="absolute h-[550px] w-[450px] bottom-0 left-1/2 -translate-x-1/2 bg-rose-200/50 -z-10 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>

        <div className="flex flex-col">
          <div className="inline-flex items-center gap-2 md:ml-8 lg:-ml-1 lg:mt-2 ">
          <StarIcon className="size-9 text-amber-300/80 animate-spin [animation-duration:8s]"/>
          <h3 className="font-serif text-3xl lg:tracking-wide">Rachel Glasgow</h3>
          </div>


          <div className="flex flex-col items-center lg:grid lg:grid-cols-2">
     
          <Image 
            src={myPic} 
            className="z-20  p-4 rounded-3xl md:size-3/4 lg:ml-1  lg:mt-2  lg:size-full lg:h-[300px]"
            alt="Photo of Rachel who is for hire, for all your web dev needs" />
       <div className="h-40 overflow-scroll lg:h-[340px] lg:-mt-8">
          <p className="text-sm text-white/70 text-left tracking-wider font-semibold ml-4 mr-1 lg:ml-6 "> <span >Hi there! I&apos;m a committed front-end web developer with a knack for transforming code into visually captivating and highly functional websites.</span>
          <br></br> <br></br>
          <span>My focus is on crafting seamless, interactive experiences that captivate visitors and foster meaningful engagement. I prioritize close collaboration with clients to deeply understand the essence of their brand. This insight enables me to design tailored solutions that resonate with their target audience, ultimately driving customer loyalty.</span></p>
        </div>
          </div>
        </div>
      </Card>

      <Card className="h-[320px] md:h-[360px] lg:h-[350px] p-4 mt-6 md:col-span-4 md:ml-4  md:-mt-0.5 relative overflow-x-clip overflow-y-clip"> 
      <div className="absolute h-[400px] w-[300px] top-0 left-1/2 -translate-x-1/2 bg-rose-200/50 -z-10 [mask-image:radial-gradient(50%_50%_at_top_center,black,transparent)]"></div>
      <div className="absolute h-[400px] w-[300px] bottom-0 left-1/2 -translate-x-1/2 bg-rose-200/50 -z-10 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
        <div className="inline-flex items-center gap-2 mt-2 ml-6 md:ml-3">
          <StarIcon className="size-9 text-white/85 animate-pulse [animation-duration:3s]"/>
          <h3 className="font-serif text-3xl md:text-2xl lg:text-3xl lg:tracking-wide"> My Tool Box </h3>
        </div>
        <p className="text-sm text-white/70 text-left tracking-wider font-semibold ml-6 ">Explore the core technologies I utilize to craft expectional digital experiences</p>

       <ToolboxItems items={toolboxItems} className="mt-8" itemsWrapperClassName= "animate-move-left [animation-duration:30s]"/>
       <ToolboxItems items={toolboxItems} className="mt-6"
       itemsWrapperClassName="animate-move-right [animation-duration:15s]"/>
      </Card>
      </div>

     <div className="md:grid md:grid-cols-10">
      <Card className="h-[370px] md:h-[360px] md:mt-2 flex flex-col md:col-span-6 relative overflow-x-clip overflow-y-clip"> 
      <div className="absolute h-[550px] w-[450px] top-0 left-1/2 -translate-x-1/2 bg-rose-200/50 -z-10 [mask-image:radial-gradient(50%_50%_at_top_center,black,transparent)]"></div>
      <div className="absolute h-[550px] w-[450px] bottom-0 left-1/2 -translate-x-1/2 bg-rose-200/50 -z-10 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
        <div>
          <div className="inline-flex items-center gap-2 md:ml-8">
          <StarIcon className="size-9 text-rose-200/85 animate-pulse [animation-duration:3s]"/>
          <h3  className="font-serif text-3xl  md:text-2xl lg:text-3xl lg:tracking-wide ">Beyond the Code </h3>
          </div>
          <p className="text-sm text-white/70 text-left tracking-wider font-semibold ml-6 mb-2 md:ml-8 ">I am a multi-fascinated individual with many interests and hobbies. Other than coding I enjoy...</p>
        </div>
        <div className="relative flex-1" ref={constraintRef}>
            {hobbies.map(hobby => (
              <motion.div
               key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-rose-300 to-amber-300/60 rounded-full py-1.5 absolute text-nowrap border border-white-3"
              style={{
                left: hobby.left,
                top: hobby.top,
              }}
              drag
              dragConstraints={constraintRef}
              >
                <span className="font-medium">{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </motion.div>
            ))}
        </div>
      </Card>

      <Card  className="h-[400px] mt-6 md:col-span-4  md:h-[450px] md:ml-4 md:-mt-20 relative overflow-x-clip overflow-y-clip"> 
      <div className="absolute h-[550px] w-[450px] top-0 left-1/2 -translate-x-1/2 bg-rose-200/50 -z-10 [mask-image:radial-gradient(50%_50%_at_top_center,black,transparent)]"></div>
      <div className="absolute h-[550px] w-[450px] bottom-0 left-1/2 -translate-x-1/2 bg-rose-200/50 -z-10 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
        <div>

          <div className="inline-flex items-center gap-2 ml-5 md:-ml-1 lg:ml-5">
          <StarIcon className="size-9 text-teal-200/70 animate-pulse [animation-duration:2s]"/>
          <h3  className="font-serif text-nowrap text-3xl  md:text-2xl lg:text-3xl lg:tracking-wide">Let&apos;s Connect </h3>
          </div>

          <Image 
            src={magicPic} 
            className="z-20 md:-ml-2 md:mt-2 "
            alt="space image" />

           
          <div className="flex flex-row  items-center gap-6 ml-1 mt-6 md:grid md:grid-cols-2 md:ml-7 md:mt-8 lg:flex lg:flex-row  lg:mt-4 ">
     
          <a
            href="https://www.linkedin.com/in/hirerachelglasgow/" 
            target="_blank"
            rel="noopener noreferrer"
            className="fill-white"
          >
            <LinkedInIcon className="h-12 w-12 fill-white hover:fill-purple-400/50 hover:bg-white transition duration-300 border border-white-3 p-1 rounded-3xl" />
          </a>

        
          <a
            href="https://github.com/AR20-4" 
            target="_blank"
            rel="noopener noreferrer"
            className="fill-white"
          >
            <GithubIcon className="h-12 w-12 fill-white hover:fill-purple-400/50 hover:bg-white transition duration-300 border border-white-3 p-1 rounded-3xl" />
          </a>

        
          <a
            href="https://codepen.io/AR20-4'" 
            target="_blank"
            rel="noopener noreferrer"
            className="fill-white"
          >
            <CodePenIcon className="h-12 w-12 fill-white hover:fill-purple-400/50 hover:bg-white transition duration-300 border border-white-3 p-1 rounded-3xl" />
          </a>

          <a
            href="mailto:buildthewebwithrachel@gmail.com" 
            className="fill-white"
          >
            <EmailIcon className="h-12 w-12 fill-white hover:fill-purple-400/50 hover:bg-white transition duration-300 border border-white-3 p-1 rounded-3xl" />
          </a>
        </div>
        </div>  
       
      </Card>
      </div>
    </div>
  </div>
 </div>
  );
};
