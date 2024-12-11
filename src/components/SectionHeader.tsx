export const SectionHeader = ({
    title,
    subtitle,
    description,
   }:{
    title: string;
    subtitle: string;
    description: string;
   }) => {
    return (
        <>
      <div className="flex justify-center bg-white/60 p-2 rounded-lg max-w-md mx-auto">
      <p className=" text-3xl md:text-5xl uppercase font-bold tracking-widest bg-gradient-to-r from-rose-300 to-teal-400  text-transparent bg-clip-text drop-shadow-lg"> {title}</p>
      </div>

      <h2 className="font-serif text-2xl md:text-4xl text-center tracking-wide mt-6"> {subtitle}</h2>
      <p className=" text-center text-white/80 mt-4 max-w-md mx-auto "> {description}</p>
        </>
    );
};
