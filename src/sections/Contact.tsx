import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";


export const ContactSection = () => {
  return ( 
  <div id="contact" className="py-10">
    <div className="container">
      <div className="bg-gradient-to-r from-rose-300/70 to-violet-200/70  text-whtie/80 py-8 px-10 rounded-3xl text-center">
   <div className="flex flex-col md:flex-row md:gap-8 items-center">
    <div>
    <h2 className="font-serif text-2xl tracking-wide">Let&apos;s Create Something Magical Together?</h2>
    <p className="text-sm mt-2">
     Ready to bring your next project to life? Let&apos;s connect and brainstorm how I can help you achieve your goals.
    </p>
    </div>

    <div className="flex flew-row">
    <a href="mailto:buildthewebwithrachel@gmail.com"
   className="text-white bg-violet-300/70 inline-flex items-center px-8 h-12 rounded-xl border border-white/50 gap-2 mt-8 md:-mt-1 hover:bg-white  hover:text-violet-300">
   
      <span className="font-semibold text-nowrap">Contact Me</span>
      <ArrowUpRightIcon className="size-4" />
      </a>
     
      </div>
      </div>
    </div>
   </div>
  </div>
  );
};
