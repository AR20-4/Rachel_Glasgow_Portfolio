import tuscanTableMock from "@/assets/images/tuscan_mock.png";
import blackbirdMock from "@/assets/images/blackbird_mock.png";
import realestateMock from "@/assets/images/real_estate_mock.png";
import yogaMock from "@/assets/images/yoga_mock.png";
import Image from 'next/image';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";


const portfolioProjects = [
  {
    company: "The Tuscan Table",
    year: "2024",
    title: "Resturant Site",
    results: [
      { title: "HTML,CSS,JS" },
      { title: "Image Slider, Reponsive Design" },
      { title: "Contact Form, Light and Dark Mode" },
    ],
    link: "https://tuscantableristorante.com/",
    image: tuscanTableMock,
  },
  {
    company: "Blackbird Perfume",
    year: "2021",
    title: "E-commerce site",
    results: [
      { title: "HTML,CSS,JS" },
      { title: "Flex and Grid, BEM Model" },
      { title: "Clean Modern Design" },
    ],
    link: "https://ar20-4.github.io/Blackbird/",
    image: blackbirdMock,
  },
  {
    company: "Homaway",
    year: "2020",
    title: "Real estate site",
    results: [
      { title: "HTML,CSS,JS" },
      { title: "Accordion, Image Slider" },
      { title: "Light and Dark Model" },
    ],
    link: "https://ar20-4.github.io/Real-estate-site/",
    image: realestateMock,
  },
  {
    company: "OmYoga",
    year: "2020",
    title: "Yoga Studio",
    results: [
      { title: "HTML,CSS,JS" },
      { title: "Light and Dark Mode, Accordion FAQ" },
      { title: "Responsive, Smooth Scroll Action" },
    ],
    link: "https://ar20-4.github.io/OmYoga/",
    image: yogaMock,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 pt-20">
      <div className="container">
        <SectionHeader 
          title="Portfolio" 
          subtitle="Recently Built Projects" 
          description="My passion is to deliver seamless interactive experiences that captivate visitors and encourage engagement"
        />
        
        <div className="flex flex-col mt-10 gap-16 relative overflow-x-clip">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title} 
              className="px-8 pt-4 pb-0 md:pt-12 lg:pt-8 lg:px-20 md:px-10 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="absolute h-[400px] w-[1600px] top-0 left-1/2 -translate-x-1/2 bg-rose-200/70 -z-10 [mask-image:radial-gradient(50%_50%_at_top_center,black,transparent)]"></div>

              {/* Use Flexbox for smaller screens, Grid for large screens */}
              <div className="flex flex-col ">
                
                {/* Text Section */}
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-amber-300 to-rose-200 inline-flex gap-1 font-bold uppercase tracking-wider text-md text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>  
                  </div>
                  <hr className="border-t-2 border-white/50 mt-1" />

             
                <div className="flex flex-col lg:flex-row lg:gap-4 ">
                  <div className="">
                  <Image 
                    src={project.image} 
                    alt={project.title}  
                    className="h-[220px] md:h-[450px] mt-4 -mb-4 rounded-xl md:-mb-0 lg:mt-8 lg:-ml-5 lg:h-full "
                  />
                </div>

                  <div className="lg:items-center lg:mt-10">
                  <h3 className="font-serif text-md mt-6 tracking-wider md:text-xl md:mt-5">{project.title}</h3>
                  <hr className="border-t-2 border-white/50 mt-1" />
                  <ul className="flex flex-col gap-4 mt-2">
                    {project.results.map(result => (
                      <li className="flex gap-2 text-sm md:text-base lg:text-nowrap text-white/60" key={result.title}>
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-violet-400 h-12 px-8 w-full md:w-auto rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-6 mb-8 hover:bg-rose-300/30 hover:border border-white-3 hover:text-white lg:text-nowrap">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                </div>
                </div>
                </div>
               
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
