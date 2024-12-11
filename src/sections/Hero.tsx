import memojiImage from '@/assets/images/rachel_head.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { HeroOrbit } from '@/components/HeroOrbit';



export const HeroSection = () => {
  return(
    <div id="home" className="py-5 md:py-15 relative z-0 overflow-x-clip">

  <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">

    <div className="absolute inset-0 -mt-10 -mb-6 -z-30 opacity-5" style={{
      backgroundImage: `url(${grainImage.src})`,
    }}></div>
  <div className="size-[620px] z-0 -mt-5 md:mt-5 hero-ring"></div>
  <div className="size-[820px] z-0 -mt-5 md:mt-5 hero-ring"></div>
  <div className="size-[1020px] z-0 -mt-5 md:mt-5 hero-ring"></div>
  <div className="size-[1220px] z-0 -mt-5 md:mt-5 hero-ring"></div>
  
  <HeroOrbit size={500} rotation={-40}>
    <StarIcon className=" size-16 -z-10 text-teal-300/50 animate-pulse [animation-duration:5s]"/>
   </HeroOrbit>

   <HeroOrbit size={500} rotation={75}>
    <StarIcon className=" size-12 -z-10 text-white/50 animate-pulse [animation-duration:7s]"/>
   </HeroOrbit>

   <HeroOrbit size={200} rotation={55}>
    <StarIcon className=" size-6 -z-10 text-amber-300/50 animate-pulse [animation-duration:5s]"/>
   </HeroOrbit>

   <HeroOrbit size={580} rotation={100}>
    <StarIcon className=" size-10 -z-10 text-teal-300/50 animate-pulse [animation-duration:8s]"/>
   </HeroOrbit>

   <HeroOrbit size={558} rotation={5}>
    <StarIcon className=" size-16 -z-10 text-amber-300/50 animate-pulse [animation-duration:3s]"/>
   </HeroOrbit>

   <HeroOrbit size={544} rotation={185}>
    <StarIcon className=" size-8 -z-10 text-white/50 animate-pulse [animation-duration:5s]"/>
   </HeroOrbit>

   <HeroOrbit size={420} rotation={150}>
    <SparkleIcon className=" size-10 -z-10 text-amber-300 animate-pulse [animation-duration:5s]"/>
   </HeroOrbit>

   <HeroOrbit size={304} rotation={-22}>
    <SparkleIcon className=" size-4 -z-10 text-amber-300 animate-pulse [animation-duration:5s]"/>
   </HeroOrbit>

   <HeroOrbit size={450} rotation={125}>
    <SparkleIcon className=" size-4 -z-10 text-white/50 animate-pulse [animation-duration:5s]"/>
   </HeroOrbit>

   <HeroOrbit size={450} rotation={-80}>
    <SparkleIcon className=" size-8 -z-10 text-white animate-pulse [animation-duration:5s]"/>
   </HeroOrbit>
 </div>

    <div className="container">
      <div className="flex flex-col items-center">

      <Image 
      src={memojiImage} 
      className=" z-20 size-[200px] md:size-[250px]"
      alt="wizard dev" />

      <div className="bg-gradient-to-r from-rose-300/70 to-amber-200/70 border-gray-800 px-4 py-1.5 inline-flex items-center gap-2 rounded-lg mb-2 ">

        <div className="bg-teal-300 size-3  rounded-full z-10 relative  ">
          <div className="bg-teal-300 size-3 border border-2-white absolute inset-0 rounded-full animate-ping">
             </div>
        </div>

        <div className="text-sm text-white font-semibold drop-shadow-lg tracking-widest">Looking for a Digital Wizard? </div>
      </div>
      </div>

<div className="max-w-lg mx-auto">
      <h1 className="font-serif text-xl tracking-wider  text-center mt-2 max-w-md mx-auto">👋🏻 Hello! I&apos;m a passionate full-stack web developer who specializes in transforming complex code into sleek, user-friendly websites. </h1>
      <p className="mt-1 text-justify font-sm tracking-wider  text-white/70 max-w-md mx-auto font-semibold">
      I thrive at the intersection of digital design and development. My passion lies in crafting seamless user experiences and visually compelling designs that resonate with audiences to drive engagement. 
      </p>
</div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-4 gap-4 pb-12">

      
      <button className="inline-flex items-center z-40 gap-2 border border-white bg-white text-violet-300 h-12 px-6 rounded-xl hover:bg-violet-300 hover:text-white">
      <a href="#projects">
          <span className="size-6">👩🏼‍💻</span>
          <span className=" font-semibold px-2 tracking-wider">Explore My Work</span>
          </a>
        </button>
        
        
        <button className="inline-flex items-center gap-2 border border-2-white/15 px-6 h-12 rounded-xl z-20 hover:bg-white/80 hover:text-violet-300">
  <a 
    href="/rachel_glasgow_resume_2025.pdf"  // Link to your PDF file in the public folder
    download="rachel_glasgow_resume_2025.pdf"  // Optionally, specify a custom name for the downloaded file
    className="flex items-center gap-2"
  >
    <span className="font-semibold tracking-wider">Download My CV</span>
    <ArrowDown className="size-4" />
  </a>
</button>
      </div>
    </div>
  </div>

  );
};
