import LinkedInIcon from "@/assets/icons/bxl-linkedin (1).svg";
import GitHubIcon from "@/assets/icons/github.svg";
import CodePenIcon from "@/assets/icons/bxl-codepen.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

// Footer links with actual URLs
const footerLinks = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hirerachelglasgow/', 
    icon: <LinkedInIcon className="h-5 w-5 text-white" />, 
  },
  {
    title: 'GitHub',
    href: 'https://github.com/AR20-4', 
    icon: <GitHubIcon className="h-5 w-5 text-white  hover:fill-purple-400/50" />, 
  },
  {
    title: 'CodePen',
    href: 'https://codepen.io/AR20-4', 
    icon: <CodePenIcon className="h-5 w-5 text-white" />, 
  },
  {
    title: 'Email',
    href: 'mailto:buildthewebwithrachel@gmail.com', 
    icon: <ArrowUpRightIcon className="h-5 w-5 hover:fill-purple-400/50" />, 
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
    
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-rose-200/70 -z-10 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>

      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center md:flex-row md:justify-between gap-4">
          <div className="text-white/40">&copy; 2024 Rachel Glasgow All rights reserved</div>
          
      
          <nav className="flex flex-col md:flex-row items-center gap-4">
            {footerLinks.map((link) => (
              <a
                href={link.href} 
                key={link.title}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-white hover:text-purple-400/80 transition duration-200"
              >
              
                <span className="fill-white hover:fill-purple-400/50">{link.icon}</span>

             
                <span className="font-semibold">{link.title}</span>
                

              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
