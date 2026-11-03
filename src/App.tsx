function App() {
  return (
    <div className="bg-black/95 min-h-screen text-white pt-7">
      <nav className="sticky top-0 z-50 flex justify-between items-center border-b border-white/10 backdrop-blur-md px-10 py-5">
        <div>
          <h1 className="font-bold text-white tracking-wide">
            vincent oluoch
            <span className="inline-block w-2 h-2 rounded-full bg-[#FF8F00] ml-1"></span>
          </h1>
        </div>

        <ul className="flex gap-8 text-sm text-white/80">
          <li>
            <a href="#home" className="hover:text-[#FF8F00] transition-colors">01. Home</a>
          </li>
          <li>
            <a href="#stack" className="hover:text-[#FF8F00] transition-colors">02. Stack</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#FF8F00] transition-colors">03. Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#FF8F00] transition-colors">04. Contact</a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <a href="/cv.pdf" download className="border border-white/20 text-white px-6 py-2 text-sm rounded-full hover:border-[#FF8F00] hover:text-[#FF8F00] transition">
            Download CV
          </a>

          <div className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full text-sm text-white/70">
            <span className="w-2 h-2 rounded-full bg-[#FF8F00]"></span>
            Available for projects
          </div>
        </div>
      </nav>

      <section id="home" className="max-w-7xl mx-auto px-10 py-32 flex items-center justify-between gap-16">
        <div className="flex-1">
          <p className="text-[#FF8F00] tracking-[4px] text-xs mb-8">
            HELLO, I'M VINCENT
          </p>

          <h1 className="text-7xl font-semibold leading-[1.1] tracking-tight">
            Full-Stack
            <br />
            Developer<span className="text-[#FF8F00]">.</span>
          </h1>

          <p className="text-white/40 mt-8 text-base max-w-lg leading-8">
            I build modern web applications, combining thoughtful design with functional and scalable solutions.
          </p>

          <div className="flex items-center gap-4 mt-10">
            <a href="https://github.com/oluochvn" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="border border-white/20 p-3 rounded-full hover:border-[#FF8F00] hover:bg-white/5 transition">
              <img src="/github.svg" alt="GitHub" className="w-5 h-5 invert" />
            </a>

            <a href="mailto:theevinceke@gmail.com" aria-label="Email" className="border border-white/20 p-3 rounded-full hover:border-[#FF8F00] hover:bg-white/5 transition">
              <img src="/email.svg" alt="Email" className="w-5 h-5 invert" />
            </a>

            <a href="https://www.linkedin.com/in/oluochvn/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="border border-white/20 p-3 rounded-full hover:border-[#FF8F00] hover:bg-white/5 transition">
              <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5 invert" />
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full border border-[#FF8F00]/20 scale-110"></div>
            <img src="/vbg.jpeg" alt="Vincent Oluoch" className="w-72 h-72 object-cover rounded-full border border-white/10 grayscale-[20%]" />
          </div>
        </div>
      </section>

      <section id="stack" className="max-w-7xl mx-auto px-10 py-20 border-t border-white/10">
        <h2 className="text-2xl font-semibold">Tech Stack<span className="text-[#FF8F00]">.</span></h2>
      </section>

      <section id="projects" className="max-w-7xl mx-auto px-10 py-20 border-t border-white/10">
        <h2 className="text-2xl font-semibold">Selected Projects<span className="text-[#FF8F00]">.</span></h2>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-10 py-20 border-t border-white/10">
        <h2 className="text-2xl font-semibold">Get In Touch<span className="text-[#FF8F00]">.</span></h2>
        <a href="mailto:theevinceke@gmail.com" className="text-white/60 hover:text-[#FF8F00] transition mt-4 inline-block">
          theevinceke@gmail.com
        </a>
      </section>
    </div>
  );
}

export default App;