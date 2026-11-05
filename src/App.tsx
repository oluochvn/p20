import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

function App() {
  const [open, setOpen] = useState(false);
  const lenisRef = useRef(null);

  const close = () => setOpen(false);

  // Smooth mouse-wheel / trackpad / touch scrolling
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    // lerp = how much of the remaining distance is covered each frame.
    // Lower = more glide/lag (0.05 floaty, 0.1 default, 0.2 snappy).
    const lenis = new Lenis({
      lerp: 0.07,
      wheelMultiplier: 1,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const navigateTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const wasOpen = open;
    close();

    const scroll = () => {
      const NAV_OFFSET = 120; // matches scroll-mt-24
      const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

      if (lenisRef.current) {
        lenisRef.current.scrollTo(Math.max(top, 0), { duration: 1.2 });
      } else {
        window.scrollTo({ top: Math.max(top, 0), behavior: "auto" });
      }
    };

    // If the mobile menu was open, wait for its 300ms collapse
    // so the layout is stable before scrolling.
    wasOpen ? setTimeout(scroll, 920) : scroll();
  };

  return (
    <div className="bg-black/97 min-h-screen text-white px-0 pt-0 pb-0">
      <div className="min-h-screen border-x border-white/10 overflow-x-clip">

        <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/5 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-5 sm:px-10">
            <div className="flex justify-between items-center py-4 md:py-5">

              <h1 className="font-bold text-2xl text-white">
                vincent oluoch
                <span className="inline-block w-2 h-2 bg-[#4A4A4A] ml-1"></span>
              </h1>

              <ul className="hidden md:flex gap-8 text-sm text-white/80">
                <li><button onClick={() => navigateTo("home")} className="hover:text-white transition-colors">01. Home</button></li>
                <li><button onClick={() => navigateTo("about")} className="hover:text-white transition-colors">02. About</button></li>
                <li><button onClick={() => navigateTo("projects")} className="hover:text-white transition-colors">03. Projects</button></li>
                <li><button onClick={() => navigateTo("contact")} className="hover:text-white transition-colors">04. Contact</button></li>
              </ul>

              <div className="hidden lg:flex items-center gap-3">
                <a href="/cv.pdf" download className="border bg-white border-white/20 text-black px-6 py-2 text-sm rounded-full hover:bg-white/75 transition">
                  Download CV
                </a>

                <div className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full text-sm text-white/70">
                  Available for projects
                </div>
              </div>

              <button
                onClick={() => setOpen(!open)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-menu"
                className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 -mr-2 items-end"
              >
                <span className={`block h-px bg-white transition-all duration-300 ${open ? "w-5 translate-y-[3px] rotate-45" : "w-6"}`}></span>
                <span className={`block h-px bg-white transition-all duration-300 ${open ? "w-5 -translate-y-[3px] -rotate-45" : "w-4"}`}></span>
              </button>

            </div>

            <div id="mobile-menu" className={`md:hidden grid transition-all duration-300 ${open ? "grid-rows-[1fr] border-t border-white/10" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <ul className="py-3 text-base text-white/80">
                  <li className="border-b border-white/5">
                    <button onClick={() => navigateTo("home")} className="block w-full text-left py-3.5 hover:text-[#4A4A4A] transition-colors">01. Home</button>
                  </li>
                  <li className="border-b border-white/5">
                    <button onClick={() => navigateTo("about")} className="block w-full text-left py-3.5 hover:text-[#4A4A4A] transition-colors">02. About</button>
                  </li>
                  <li className="border-b border-white/5">
                    <button onClick={() => navigateTo("projects")} className="block w-full text-left py-3.5 hover:text-[#4A4A4A] transition-colors">03. Projects</button>
                  </li>
                  <li>
                    <button onClick={() => navigateTo("contact")} className="block w-full text-left py-3.5 hover:text-[#4A4A4A] transition-colors">04. Contact</button>
                  </li>
                </ul>

                <div className="pb-6 flex flex-wrap items-center gap-3">
                  <a href="/cv.pdf" download onClick={close} className="border border-white/20 text-white px-5 py-2.5 text-sm rounded-full hover:border-[#4A4A4A] transition">
                    Download CV
                  </a>

                  <div className="flex items-center gap-2 border border-white/10 px-4 py-2.5 rounded-full text-sm text-white/70">
                    Available for projects
                  </div>
                </div>
              </div>
            </div>

          </div>
        </nav>

        <section id="home" className="scroll-mt-24 max-w-7xl mx-auto px-5 sm:px-10 pt-12 pb-16 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
          <div className="flex-1 w-full">
            <p className="text-[#DBDBDB] tracking-[3px] md:tracking-[4px] text-xs mb-6 md:mb-8">
              HELLO, I'M VINCENT
            </p>

            <h1 className="text-[2.75rem] text-white/80 sm:text-6xl md:text-7xl font-semibold leading-[1.08] tracking-tight">
              Full-Stack
              <br />
              Developer
              <span className="inline-block w-3 h-3 bg-white/60"></span>
            </h1>

            <p className="text-white/40 mt-6 md:mt-8 text-[15px] md:text-base max-w-lg leading-7 md:leading-8">
              I build modern web applications, combining thoughtful design with functional and scalable solutions.
            </p>

            <div className="flex items-center gap-4 mt-8 md:mt-10">
              <a href="https://github.com/oluochvn" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="border border-white/20 p-2.5 md:p-2 bg-black hover:border-white/40 rounded-full">
                <img src="/github.svg" alt="GitHub" className="w-5 h-5 invert" />
              </a>

              <a href="mailto:theevinceke@gmail.com" aria-label="Email" className="border border-white/20 p-2.5 md:p-2 rounded-full hover:border-white/40 transition">
                <img src="/email.svg" alt="Email" className="w-5 h-5 invert" />
              </a>

              <a href="https://www.linkedin.com/in/oluochvn/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="border border-white/20 p-2.5 md:p-2 rounded-full hover:border-white/40 transition">
                <img src="/linkedin1.svg" alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center w-full">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border border-white/30 scale-110"></div>
              <img src="/vbg.jpeg" alt="Vincent Oluoch" className="w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover rounded-full border border-white/10 grayscale-[20%]" />
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 max-w-7xl mx-auto px-5 sm:px-10 py-16 md:py-28 border-t border-white/10">
          <div className="flex items-center gap-3 mb-10 md:mb-14">
            <span className="text-[#DBDBDB] text-xs tracking-[3px] md:tracking-[4px]">01 / ABOUT ME</span>
            <div className="h-px w-12 md:w-16 bg-[#DBDBDB]/40"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-[2rem] sm:text-4xl text-[#4A4A4A] md:text-5xl font-semibold tracking-tight leading-tight">
                Turning ideas into
                <span className="text-white font-playful text-5xl sm:text-6xl"> digital</span>
                <br />
                <span className="text-white font-playful text-5xl sm:text-6xl">experiences<span className="inline-block w-2 h-2 bg-white ml-2"></span></span>
              </h2>

              <p className="text-white/50 text-[15px] md:text-base leading-7 md:leading-8 mt-6 md:mt-8 max-w-xl">
                I'm Vincent Oluoch, a developer passionate about building modern,
                functional, and user-focused web applications. I enjoy turning
                complex problems into simple and practical digital solutions.
              </p>

              <p className="text-white/50 text-[15px] md:text-base leading-7 md:leading-8 mt-4 md:mt-5 max-w-xl">
                My experience spans frontend and backend development, working
                with technologies like React, JavaScript, Node.js, and databases.
                I'm always exploring new technologies, improving my skills,
                and challenging myself through real-world projects.
              </p>

              <div className="flex flex-wrap gap-2.5 md:gap-3 mt-7 md:mt-8">
                {["Problem Solving", "Clean Code", "Continuous Learning"].map((item) => (
                  <span key={item} className="border border-white/10 bg-white/[0.03] px-4 py-2 rounded text-xs text-white/60 hover:border-[#4A4A4A]/50 hover:text-[#4A4A4A] transition">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative border border-white/10 bg-white/[0.025] rounded p-6 sm:p-8">
                <div className="flex justify-between items-center border-b border-white/10 pb-5 md:pb-6">
                  <span className="text-xs tracking-widest text-white/40">PROFILE OVERVIEW</span>
                  <span className="text-xs">01.001</span>
                </div>

                <div className="py-6 md:py-8">
                  <p className="text-white/40 text-xs tracking-widest mb-3">CURRENT FOCUS</p>
                  <h3 className="text-xl sm:text-2xl font-semibold">Full-Stack Development</h3>
                  <p className="text-white/40 text-sm mt-3 leading-7">
                    Building scalable applications with intuitive interfaces
                    and reliable backend systems.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6 grid grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <p className="text-white/40 text-xs tracking-widest mb-3">FRONTEND</p>
                    <p className="text-sm text-white/80 leading-7">
                      React<br />
                      JavaScript<br />
                      Tailwind CSS
                    </p>
                  </div>

                  <div>
                    <p className="text-white/40 text-xs tracking-widest mb-3">BACKEND</p>
                    <p className="text-sm text-white/80 leading-7">
                      Node.js<br />
                      Express<br />
                      SQL / MongoDB
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/10 mt-6 md:mt-7 pt-5 md:pt-6 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-white/40 text-xs">BASED IN KENYA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 max-w-7xl mx-auto px-5 sm:px-10 py-16 md:py-20 border-t border-white/10">
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <span className="text-[#DBDBDB] text-xs tracking-[3px] md:tracking-[4px]">02 / MY WORK</span>
            <div className="h-px w-12 bg-[#DBDBDB]/40"></div>
          </div>

          <div className="flex justify-between items-end gap-4 mb-8 md:mb-10">
            <div>
              <h2 className="text-[1.75rem] sm:text-3xl md:text-4xl font-semibold tracking-tight">
                Selected Projects<span className="inline-block w-2 h-2 ml-2 bg-[#4A4A4A]"></span>
              </h2>
              <p className="text-white/40 text-sm mt-3">
                A few things I've been <span className="font-playful text-white text-lg">building.</span>
              </p>
            </div>

            <a href="https://github.com/oluochvn" target="_blank" rel="noopener noreferrer" className="shrink-0 py-2 text-xs text-white/50 hover:text-[#4A4A4A] transition">
              GitHub
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <div className="group border border-white/10 bg-white/[0.02] rounded overflow-hidden hover:border-white/20 transition">
              <div className="relative h-32 md:h-36 bg-[#101010] flex items-center justify-center">
                <p className="text-[1.65rem] md:text-3xl font-bold tracking-tight">pesatrak</p>
                <span className="absolute top-4 left-4 text-[10px] text-white/30">01 / 02</span>
                <span className="absolute top-4 right-4 text-[10px]">FINTECH</span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold">Pesatrak</h3>
                <p className="text-white/40 text-[13px] md:text-xs leading-6 mt-2">
                  A personal finance application for tracking transactions,
                  managing expenses, and monitoring savings goals.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["React", "Node.js", "MongoDB", "Tailwind"].map((tech) => (
                    <span key={tech} className="text-[10px] text-white/50 border border-white/10 rounded px-3 py-1">{tech}</span>
                  ))}
                </div>

                <div className="flex gap-6 mt-5 pt-2 border-t border-white/10">
                  <a href="https://trak-gilt.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-xs text-white/60 py-2.5 transition hover:text-white">Live Preview</a>
                  <a href="https://github.com/oluochvn" target="_blank" rel="noopener noreferrer" className="text-xs text-white/60 py-2.5 transition hover:text-white">GitHub</a>
                </div>
              </div>
            </div>

            <div className="group border border-white/10 bg-white/[0.02] rounded overflow-hidden hover:border-white/20 transition">
              <div className="relative h-32 md:h-36 bg-[#101010] flex items-center justify-center">
                <p className="text-[1.65rem] md:text-3xl font-bold tracking-tight">smartseason</p>
                <span className="absolute top-4 left-4 text-[10px] text-white/30">02 / 02</span>
                <span className="absolute top-4 right-4 text-[10px]">WEB APP</span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold">SmartSeason</h3>
                <p className="text-white/40 text-[13px] md:text-xs leading-6 mt-2">
                  A field management application with role-based access,
                  field tracking, and assessment records.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["React", "Supabase", "JavaScript", "Tailwind"].map((tech) => (
                    <span key={tech} className="text-[10px] text-white/50 border border-white/10 rounded px-3 py-1">{tech}</span>
                  ))}
                </div>

                <div className="flex gap-6 mt-5 pt-2 border-t border-white/10">
                  <a href="https://smart-season-lilac.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-xs text-white/60 py-2.5 transition hover:text-white">Live Preview</a>
                  <a href="https://github.com/oluochvn/smartSeason" target="_blank" rel="noopener noreferrer" className="text-xs text-white/60 py-2.5 transition hover:text-white">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 max-w-7xl mx-auto px-5 sm:px-10 py-16 md:py-28 border-t border-white/10">
          <div className="flex items-center gap-3 mb-10 md:mb-14">
            <span className="text-[#DBDBDB] text-xs tracking-[3px] md:tracking-[4px]">03 / GET IN TOUCH</span>
            <div className="h-px w-12 md:w-16 bg-[#DBDBDB]/40"></div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-white/65 text-xs tracking-[3px] md:tracking-[4px] mb-5 md:mb-6">
              HAVE A PROJECT IN MIND?
            </p>

            <h2 className="text-[2.25rem] text-[#4A4A4A] sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
              Let's build something
              <span className="text-white font-playful text-5xl sm:text-6xl md:text-7xl font-medium"> meaningful<span className="inline-block w-2 h-2 ml-2 bg-white"></span></span>
            </h2>

            <p className="text-white/40 text-sm md:text-base leading-7 md:leading-8 max-w-xl mx-auto mt-6 md:mt-7">
              I'm always open to discussing new projects, creative ideas,
              and opportunities to contribute to interesting work.
            </p>

            <a href="mailto:theevinceke@gmail.com" className="inline-flex items-center justify-center gap-3 bg-white/[0.02] text-white px-7 py-3.5 md:py-3 rounded border border-white/20 text-sm font-medium mt-9 md:mt-10 hover:bg-white/10 transition duration-300">
              Let's Talk
              <img src="/email2.svg" alt="email" className="w-5 h-5 invert" />
            </a>

            <div className="flex justify-center items-center gap-8 mt-12 md:mt-14">
              <a href="mailto:theevinceke@gmail.com" className="py-2 text-xs text-white/40 hover:text-white transition">Email</a>
              <a href="https://github.com/oluochvn" target="_blank" rel="noopener noreferrer" className="py-2 text-xs text-white/40 hover:text-white transition">GitHub</a>
              <a href="https://www.linkedin.com/in/oluochvn/" target="_blank" rel="noopener noreferrer" className="py-2 text-xs text-white/40 hover:text-white transition">LinkedIn</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/10 mt-16 md:mt-24 pt-6 md:pt-7">
            <p className="text-xs text-white/30 text-center">
              © 2026 Vincent Oluoch. All rights reserved.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;