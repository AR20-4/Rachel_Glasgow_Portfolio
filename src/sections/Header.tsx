export const Header = () => {
  return <div className="flex justify-center items-center relative top-3">
    <nav className="flex flex-row items-center gap-1 p-0.5 border border-white/25 rounded-full bg-white/20 backdrop-blur z-20">
      <a href="#home" className="nav-item  text-rose-100">Home</a>
      <a href="#about" className="nav-item  text-rose-100" >About</a>
      <a href="#projects" className="nav-item  text-rose-100" >Projects</a>
      <a href="#contact" className="nav-item bg-white/70 text-violet-300 hover:bg-rose-300/70 hover:text-white text-nowrap" >Hire Me</a>
    </nav>
  </div>;
};
