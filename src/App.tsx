
function App() {
  return (
    <div className="bg-black min-h-screen text-white pr-30 pl-30 pt-7">

      <nav className="sticky top-0 z-50 flex justify-between items-center border-b border-white/10 backdrop-blur-md px-10 py-5">
        <div>
          <h1 className="font-bold text-white tracking-wide">
            vincent oluoch
            <span className="inline-block w-2 h-2 rounded-full bg-[#FF8F00] ml-1"></span>
          </h1>
        </div>

        <ul className="hidden md:flex gap-8 text-sm text-white/80">
          <li><a href="#home" className="hover:text-[#FF8F00] transition-colors">01. Home</a></li>
          <li><a href="#about" className="hover:text-[#FF8F00] transition-colors">02. About</a></li>
          <li><a href="#stack" className="hover:text-[#FF8F00] transition-colors">03. Stack</a></li>
          <li><a href="#projects" className="hover:text-[#FF8F00] transition-colors">04. Projects</a></li>
          <li><a href="#contact" className="hover:text-[#FF8F00] transition-colors">05. Contact</a></li>
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href="/cv.pdf" download className="border border-white/20 text-white px-6 py-2 text-sm rounded-full hover:border-[#FF8F00] hover:text-[#FF8F00] transition">
            Download CV
          </a>

          <div className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full text-sm text-white/70">
            <span className="w-2 h-2 rounded-full bg-[#FF8F00]"></span>
            Available for projects
          </div>
        </div>
      </nav>

      <section id="home" className="max-w-7xl mx-auto px-10 py-32 flex flex-col md:flex-row items-center justify-between gap-16">

        <div className="flex-1">
          <p className="text-[#FF8F00] tracking-[4px] text-xs mb-8">
            HELLO, I'M VINCENT
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.1] tracking-tight">
            Full-Stack
            <br />
            Developer<span className="text-[#FF8F00]">.</span>
          </h1>

          <p className="text-white/40 mt-8 text-base max-w-lg leading-8">
            I build modern web applications, combining thoughtful design with functional and scalable solutions.
          </p>

          <div className="flex items-center gap-4 mt-10">
            <a href="https://github.com/oluochvn" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="border border-white/20 p-2 bg-black rounded-full">
              <img src="/github.svg" alt="GitHub" className="w-5 h-5 invert" />
            </a>

            <a href="mailto:theevinceke@gmail.com" aria-label="Email" className="border border-white/20 p-2 rounded-full hover:border-[#FF8F00] hover:bg-white/5 transition">
              <img src="/email.svg" alt="Email" className="w-5 h-5 invert" />
            </a>

            <a href="https://www.linkedin.com/in/oluochvn/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="border border-white/20 p-2 rounded-full hover:border-[#FF8F00] hover:bg-white/5 transition">
              <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5 invert" />
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full border border-[#FF8F00]/20 scale-110"></div>
            <img src="/vbg.jpeg" alt="Vincent Oluoch" className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border border-white/10 grayscale-[20%]" />
          </div>
        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto px-10 py-28 border-t border-white/10">

        <div className="flex items-center gap-3 mb-14">
          <span className="text-[#FF8F00] text-xs tracking-[4px]">01 / ABOUT ME</span>
          <div className="h-px w-16 bg-[#FF8F00]/40"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-center">


          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Turning ideas into
              <span className="text-white/40"> digital</span>
              <br />
              <span className="text-[#FF8F00]">experiences.</span>
            </h2>

            <p className="text-white/50 leading-8 mt-8 max-w-xl">
              I'm Vincent Oluoch, a developer passionate about building modern,
              functional, and user-focused web applications. I enjoy turning
              complex problems into simple and practical digital solutions.
            </p>

            <p className="text-white/50 leading-8 mt-5 max-w-xl">
              My experience spans frontend and backend development, working
              with technologies like React, JavaScript, Node.js, and databases.
              I'm always exploring new technologies, improving my skills,
              and challenging myself through real-world projects.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {["Problem Solving", "Clean Code", "Continuous Learning"].map((item) => (
                <span
                  key={item}
                  className="border border-white/10 bg-white/[0.03] px-4 py-2 rounded-full text-xs text-white/60 hover:border-[#FF8F00]/50 hover:text-[#FF8F00] transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">

            <div className="absolute"></div>

            <div className="relative border border-white/10 bg-white/[0.025]  rounded-2xl p-8">

              <div className="flex justify-between items-center border-b border-white/10 pb-6">
                <span className="text-xs tracking-widest text-white/40">
                  PROFILE OVERVIEW
                </span>
                <span className="text-[#FF8F00] text-xs">01.001</span>
              </div>

              <div className="py-8">
                <p className="text-white/40 text-xs tracking-widest mb-3">
                  CURRENT FOCUS
                </p>

                <h3 className="text-2xl font-semibold">
                  Full-Stack Development
                </h3>

                <p className="text-white/40 text-sm mt-3 leading-7">
                  Building scalable applications with intuitive interfaces
                  and reliable backend systems.
                </p>
              </div>

              <div className="border-t border-white/10 pt-6 grid grid-cols-2 gap-8">

                <div>
                  <p className="text-white/40 text-xs tracking-widest mb-3">
                    FRONTEND
                  </p>
                  <p className="text-sm text-white/80 leading-7">
                    React<br />
                    JavaScript<br />
                    Tailwind CSS
                  </p>
                </div>

                <div>
                  <p className="text-white/40 text-xs tracking-widest mb-3">
                    BACKEND
                  </p>
                  <p className="text-sm text-white/80 leading-7">
                    Node.js<br />
                    Express<br />
                    SQL / MongoDB
                  </p>
                </div>

              </div>

              <div className="border-t border-white/10 mt-7 pt-6 flex flex-wrap items-center justify-between gap-3">
                <span className="text-white/40 text-xs">
                  BASED IN KENYA
                </span>

              </div>

            </div>
          </div>

        </div>
      </section>

      

<section id="projects" className="max-w-7xl mx-auto px-10 py-20 border-t border-white/10">

  <div className="flex items-center gap-3 mb-10">
    <span className="text-[#FF8F00] text-xs tracking-[4px]">02 / MY WORK</span>
    <div className="h-px w-12 bg-[#FF8F00]/40"></div>
  </div>

  <div className="flex justify-between items-end mb-10">
    <div>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
        Selected Projects<span className="text-[#FF8F00]">.</span>
      </h2>
      <p className="text-white/40 text-sm mt-3">
        A few things I've been building.
      </p>
    </div>

    <a href="https://github.com/oluochvn" target="_blank" rel="noopener noreferrer"
      className="text-xs text-white/50 hover:text-[#FF8F00] transition">
      GitHub ↗
    </a>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


    <div className="group border border-white/10 bg-white/[0.02] rounded-xl overflow-hidden hover:border-white/20 transition">

      <div className="relative h-36 bg-[#101010] flex items-center justify-center">
        <p className="text-3xl font-bold tracking-tight">
          pesa<span className="text-[#FF8F00]">trak</span>
        </p>
        <span className="absolute top-4 left-4 text-[10px] text-white/30">01 / 02</span>
        <span className="absolute top-4 right-4 text-[10px] text-[#FF8F00]">FINTECH</span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold  transition">
          Pesatrak
        </h3>

        <p className="text-white/40 text-xs leading-6 mt-2">
          A personal finance application for tracking transactions,
          managing expenses, and monitoring savings goals.
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {["React", "Node.js", "MongoDB", "Tailwind"].map((tech) => (
            <span key={tech} className="text-[10px] text-white/50 border border-white/10 rounded-full px-3 py-1">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-5 mt-5 pt-4 border-t border-white/10">
          <a href="https://trak-gilt.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-xs text-white/60  transition">
            Live Preview ↗
          </a>
          <a href="https://github.com/oluochvn" target="_blank" rel="noopener noreferrer" className="text-xs text-white/60  transition">
            GitHub ↗
          </a>
        </div>
      </div>
    </div>

    <div className="group border border-white/10 bg-white/[0.02] rounded-xl overflow-hidden hover:border-white/20  transition">

      <div className="relative h-36 bg-[#101010] flex items-center justify-center">
        <p className="text-3xl font-bold tracking-tight">
          smart<span className="text-[#FF8F00]">season</span>
        </p>
        <span className="absolute top-4 left-4 text-[10px] text-white/30">02 / 02</span>
        <span className="absolute top-4 right-4 text-[10px] text-[#FF8F00]">WEB APP</span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold transition">
          SmartSeason
        </h3>

        <p className="text-white/40 text-xs leading-6 mt-2">
          A field management application with role-based access,
          field tracking, and assessment records.
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {["React", "Supabase", "JavaScript", "Tailwind"].map((tech) => (
            <span key={tech} className="text-[10px] text-white/50 border border-white/10 rounded-full px-3 py-1">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-5 mt-5 pt-4 border-t border-white/10">
          <a href="https://smart-season-lilac.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-xs text-white/60  transition">
            Live Preview ↗
          </a>
          <a href="https://github.com/oluochvn/smartSeason" target="_blank" rel="noopener noreferrer" className="text-xs text-white/60  transition">
            GitHub ↗
          </a>
        </div>
      </div>
    </div>

  </div>
</section>



<section id="contact" className="max-w-7xl mx-auto px-10 py-28 border-t border-white/10">

  <div className="flex items-center gap-3 mb-14">
    <span className="text-[#FF8F00] text-xs tracking-[4px]">03 / GET IN TOUCH</span>
    <div className="h-px w-16 bg-[#FF8F00]/40"></div>
  </div>

  <div className="max-w-3xl mx-auto text-center">

    <p className="text-[#FF8F00] text-xs tracking-[4px] mb-6">
      HAVE A PROJECT IN MIND?
    </p>

    <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
      Let's build something
      <span className="text-[#FF8F00]"> meaningful.</span>
    </h2>

    <p className="text-white/40 text-sm md:text-base leading-8 max-w-xl mx-auto mt-7">
      I'm always open to discussing new projects, creative ideas,
      and opportunities to contribute to interesting work.
    </p>

    <a
      href="mailto:theevinceke@gmail.com"
      className="inline-flex items-center gap-3 bg-black text-white px-7 py-3 rounded-full border border-white/40 text-sm font-medium mt-10 hover:bg-white/10 transition duration-300"
    >
      Let's Talk
      <img src="/email2.svg" alt="email" className="w-5 h-5 invert" />
      
    </a>

    <div className="flex justify-center items-center gap-7 mt-14">

      <a href="mailto:theevinceke@gmail.com" className="text-xs text-white/40 hover:text-[#FF8F00] transition">
        Email
      </a>

      <a href="https://github.com/oluochvn" target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:text-[#FF8F00] transition">
        GitHub
      </a>

      <a href="https://www.linkedin.com/in/oluochvn/" target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:text-[#FF8F00] transition">
        LinkedIn
      </a>

    </div>

  </div>

  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/10 mt-24 pt-7">

    <p className="text-xs text-white/30">
      © 2026 Vincent Oluoch. All rights reserved.
    </p>
  </div>

</section>
      

    </div>
  );
}

export default App;
