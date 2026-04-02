import { useState, useRef, useEffect } from "react";
import { Loader2, CheckCircle2, AlertCircle, ArrowUpRight, Github } from "lucide-react";

const validators = {
  name: (v) => (v.trim().length < 2 ? "Name must be at least 2 characters." : ""),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Please enter a valid email."),
  message: (v) => (v.trim().length < 10 ? "Message must be at least 10 characters." : ""),
};

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("revealed")),
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState("idle");
  const [serverError, setServerError] = useState("");
  const timeoutRef = useRef(null);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    let valid = true;
    for (const [field, fn] of Object.entries(validators)) {
      const msg = fn(form[field]);
      if (msg) { newErrors[field] = msg; valid = false; }
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitState("loading");
    setServerError("");
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    try {
      const res = await fetch("https://contactbck.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name.trim(), email: form.email.trim(), message: form.message.trim() }),
        signal: AbortSignal.timeout(10_000),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || `Server responded with ${res.status}.`);
      setSubmitState("success");
      setForm({ name: "", email: "", message: "" });
      timeoutRef.current = setTimeout(() => setSubmitState("idle"), 6000);
    } catch (err) {
      const isTimeout = err.name === "TimeoutError" || err.name === "AbortError";
      setServerError(isTimeout ? "Request timed out. Please try again." : err.message || "Something went wrong.");
      setSubmitState("error");
      timeoutRef.current = setTimeout(() => setSubmitState("idle"), 8000);
    }
  };

  const isLoading = submitState === "loading";
  const isSuccess = submitState === "success";

  const fieldClass = (field) =>
    `w-full bg-transparent border-b py-3 text-sm outline-none transition-colors duration-200 placeholder:text-[#555] focus:placeholder:text-[#777] ${
      errors[field] ? "border-red-500/70 focus:border-red-400" : "border-[#333] focus:border-[#d97706]"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {["name", "email", "message"].map((field) => (
        <div key={field} className="space-y-1">
          {field === "message" ? (
            <textarea
              placeholder={field === "message" ? "Your message" : `Your ${field}`}
              rows={4}
              className={`${fieldClass(field)} resize-none`}
              value={form[field]}
              onChange={handleChange(field)}
              disabled={isLoading || isSuccess}
            />
          ) : (
            <input
              type={field === "email" ? "email" : "text"}
              placeholder={`Your ${field}`}
              className={fieldClass(field)}
              value={form[field]}
              onChange={handleChange(field)}
              disabled={isLoading || isSuccess}
            />
          )}
          {errors[field] && (
            <p className="text-red-400 text-xs flex items-center gap-1">
              <AlertCircle size={11} /> {errors[field]}
            </p>
          )}
        </div>
      ))}

      {submitState === "error" && serverError && (
        <div className="flex items-start gap-2 text-red-400 border border-red-500/20 bg-red-500/5 px-4 py-3 text-xs">
          <AlertCircle size={14} className="mt-0.5 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {isSuccess && (
        <div className="flex items-center gap-2 text-emerald-400 border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-xs">
          <CheckCircle2 size={14} className="shrink-0" />
          <span>Message sent — I'll be in touch soon.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading || isSuccess}
        className="group relative overflow-hidden border border-[#d97706] px-8 py-3 text-sm font-medium tracking-widest uppercase text-[#d97706] transition-all duration-300 hover:text-black disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
      >
        <span className="absolute inset-0 bg-[#d97706] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
        <span className="relative flex items-center gap-2">
          {isLoading ? <><Loader2 size={14} className="animate-spin" /> Sending</> :
           isSuccess ? <><CheckCircle2 size={14} /> Sent</> : "Send Message"}
        </span>
      </button>
    </form>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useScrollReveal();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --ink: #0a0a0a;
          --paper: #f2f0eb;
          --amber: #d97706;
          --amber-dim: #92400e;
          --muted: #555;
          --border: #222;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--ink);
          color: var(--paper);
          font-family: 'DM Mono', monospace;
          cursor: crosshair;
        }

        ::selection { background: var(--amber); color: var(--ink); }

        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }

        .nav-link {
          position: relative;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #888;
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--amber);
          transition: width 0.3s ease;
        }
        .nav-link:hover { color: var(--paper); }
        .nav-link:hover::after { width: 100%; }

        .display-text {
          font-family: 'DM Serif Display', serif;
          font-style: italic;
        }

        .noise-overlay::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 9999;
          opacity: 0.4;
        }

        .tag {
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 3px 10px;
          border: 1px solid #333;
          color: #666;
        }
        .tag-amber {
          border-color: var(--amber-dim);
          color: var(--amber);
        }

        .project-card {
          border: 1px solid #1a1a1a;
          overflow: hidden;
          transition: border-color 0.3s;
        }
        .project-card:hover {
          border-color: #333;
        }
        .project-card img {
          transition: transform 0.6s ease, filter 0.3s;
          filter: grayscale(40%);
        }
        .project-card:hover img {
          transform: scale(1.03);
          filter: grayscale(0%);
        }

        .ticker {
          display: flex;
          gap: 3rem;
          animation: tick 18s linear infinite;
          white-space: nowrap;
        }
        @keyframes tick {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .hero-number {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(7rem, 18vw, 16rem);
          line-height: 0.85;
          color: transparent;
          -webkit-text-stroke: 1px #1e1e1e;
          position: absolute;
          right: -0.02em;
          top: 50%;
          transform: translateY(-50%);
          user-select: none;
          pointer-events: none;
        }
      `}</style>

      <div className="noise-overlay">

        {/* NAV */}
        <nav style={{ borderBottom: '1px solid #161616' }}
          className="sticky top-0 z-50 backdrop-blur-sm"
          style={{ background: 'rgba(10,10,10,0.92)', borderBottom: '1px solid #161616' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
            <span className="text-xs tracking-[0.3em] uppercase text-[#d97706]">Oluochvn</span>

            <ul className="hidden md:flex items-center gap-8">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a href={item === "Home" ? "#" : `#${item.toLowerCase()}`} className="nav-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-1"
              aria-label="Menu"
            >
              <span style={{ background: menuOpen ? '#d97706' : '#888', width: 22, height: 1, display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none' }} />
              <span style={{ background: menuOpen ? '#d97706' : '#888', width: 14, height: 1, display: 'block', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ background: menuOpen ? '#d97706' : '#888', width: 22, height: 1, display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none' }} />
            </button>
          </div>

          {menuOpen && (
            <div style={{ borderTop: '1px solid #161616', background: '#0a0a0a' }} className="md:hidden px-6 py-8 space-y-6">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-2xl display-text text-[#f2f0eb] hover:text-[#d97706] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </nav>

        {/* HERO */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-12 max-w-7xl mx-auto">
          <span className="hero-number">01</span>

          <div className="max-w-2xl relative z-10">
            <p className="reveal text-xs tracking-[0.3em] uppercase text-[#d97706] mb-8">
              Available for work — 2025
            </p>

            <h1 className="reveal reveal-delay-1 display-text text-[#f2f0eb] leading-[0.9]"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}>
              Vincent<br />Oluoch
            </h1>

            <div className="reveal reveal-delay-2 flex items-center gap-4 mt-6 mb-8">
              <span style={{ width: 40, height: 1, background: '#d97706', display: 'block' }} />
              <span className="text-xs tracking-widest uppercase text-[#888]">Fullstack Developer</span>
            </div>

            <p className="reveal reveal-delay-3 text-sm text-[#666] leading-relaxed max-w-sm">
              I build fast, responsive web applications — clean on the surface, solid underneath.
            </p>

            <div className="reveal reveal-delay-4 flex items-center gap-4 mt-10">
              <a href="#contact"
                className="group relative overflow-hidden border border-[#d97706] px-7 py-2.5 text-xs tracking-widest uppercase text-[#d97706] transition-all hover:text-black flex items-center gap-2">
                <span className="absolute inset-0 bg-[#d97706] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative">Get in touch</span>
              </a>

              <a href="https://github.com" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#555] hover:text-[#888] transition-colors">
                <Github size={14} />
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* TICKER */}
        <div style={{ borderTop: '1px solid #161616', borderBottom: '1px solid #161616' }}
          className="overflow-hidden py-4">
          <div className="ticker">
            {Array(2).fill(["React", "Node.js", "TypeScript", "Tailwind", "REST APIs", "PostgreSQL", "MongoDB", "Git"]).flat().map((s, i) => (
              <span key={i} className="text-xs tracking-[0.25em] uppercase text-[#333]">
                {s} <span style={{ color: '#d97706', marginLeft: '1.5rem' }}>✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section id="about" style={{ borderBottom: '1px solid #161616' }}
          className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="md:grid md:grid-cols-12 md:gap-12">
            <div className="md:col-span-4 mb-10 md:mb-0">
              <p className="reveal text-xs tracking-[0.3em] uppercase text-[#d97706] mb-4">02 — About</p>
              <h2 className="reveal reveal-delay-1 display-text text-[#f2f0eb]"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 0.95 }}>
                Who<br /><em>I am</em>
              </h2>
            </div>

            <div className="md:col-span-8 md:pt-14">
              <p className="reveal reveal-delay-2 text-[#999] leading-relaxed mb-8"
                style={{ fontSize: '1.05rem' }}>
                I'm a Full-Stack Developer who builds fast, responsive, and practical web applications.
                I enjoy creating clean user experiences and writing efficient, maintainable code on both
                the frontend and backend.
              </p>
              <p className="reveal reveal-delay-3 text-[#555] leading-relaxed text-sm">
                Always learning, improving through real projects, and focused on building simple solutions
                that solve real problems. I care about the details — in code and in design.
              </p>

              <div className="reveal reveal-delay-4 grid grid-cols-2 md:grid-cols-4 gap-px mt-14"
                style={{ border: '1px solid #1a1a1a' }}>
                {[["2+", "Years exp."], ["10+", "Projects"], ["5+", "Clients"], ["∞", "Coffee"]].map(([num, label]) => (
                  <div key={label} className="px-5 py-6 text-center" style={{ border: '1px solid #1a1a1a' }}>
                    <p className="display-text text-[#d97706] text-3xl">{num}</p>
                    <p className="text-[#555] text-xs tracking-widest uppercase mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="reveal text-xs tracking-[0.3em] uppercase text-[#d97706] mb-4">03 — Work</p>
              <h2 className="reveal reveal-delay-1 display-text text-[#f2f0eb]"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 0.95 }}>
                Selected<br /><em>Projects</em>
              </h2>
            </div>
            <button className="reveal hidden md:flex items-center gap-2 text-xs tracking-widest uppercase text-[#555] hover:text-[#888] transition-colors">
              View all <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="space-y-px">
            {[
              {
                num: "01",
                title: "Portfolio Website",
                desc: "Personal portfolio built with React and Tailwind — fast, minimal, focused.",
                tags: ["React", "Tailwind", "UI/UX"],
                img: "/website.png",
                year: "2024"
              },
              {
                num: "02",
                title: "PayTrack",
                desc: "A fullstack finance dashboard for tracking payments and managing expenses.",
                tags: ["Fullstack", "Finance", "Dashboard"],
                img: "/paytrack.png",
                year: "2024"
              }
            ].map((p, i) => (
              <div key={p.num}
                className={`reveal project-card reveal-delay-${i + 1} md:grid md:grid-cols-12 md:gap-0 group cursor-pointer`}>
                <div className="md:col-span-5 overflow-hidden" style={{ maxHeight: 300 }}>
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" style={{ minHeight: 200 }} />
                </div>
                <div className="md:col-span-7 flex flex-col justify-between p-8 md:p-10"
                  style={{ borderLeft: '1px solid #1a1a1a' }}>
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <span className="display-text text-[#222] text-5xl">{p.num}</span>
                      <span className="text-xs tracking-widest text-[#444]">{p.year}</span>
                    </div>
                    <h3 className="display-text text-[#f2f0eb] text-2xl md:text-3xl mb-3 group-hover:text-[#d97706] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-[#555] text-sm leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <div className="flex gap-2 flex-wrap">
                      {p.tags.map((t) => (
                        <span key={t} className={`tag ${t === p.tags[0] ? "tag-amber" : ""}`}>{t}</span>
                      ))}
                    </div>
                    <ArrowUpRight size={18} className="text-[#333] group-hover:text-[#d97706] transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10 md:hidden">
            <button className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#555] hover:text-[#888] transition-colors">
              View all <ArrowUpRight size={14} />
            </button>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ borderTop: '1px solid #161616' }}
          className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="md:grid md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5 mb-14 md:mb-0">
              <p className="reveal text-xs tracking-[0.3em] uppercase text-[#d97706] mb-4">04 — Contact</p>
              <h2 className="reveal reveal-delay-1 display-text text-[#f2f0eb] mb-6"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 0.95 }}>
                Let's<br /><em>talk</em>
              </h2>
              <p className="reveal reveal-delay-2 text-[#555] text-sm leading-relaxed max-w-xs">
                Got a project, idea, or just want to say hi? I'm always open to a good conversation.
              </p>

              <div className="reveal reveal-delay-3 mt-10 space-y-3">
                <p className="text-xs tracking-widest uppercase text-[#444]">Direct contact</p>
                <a href="mailto:vincent@example.com"
                  className="block text-sm text-[#888] hover:text-[#d97706] transition-colors">
                  vincent@example.com
                </a>
              </div>
            </div>

            <div className="reveal reveal-delay-2 md:col-span-7 md:pt-14">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ borderTop: '1px solid #161616' }}
          className="px-6 md:px-12 py-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs tracking-[0.3em] uppercase text-[#d97706]">Oluochvn</span>
          <span className="text-xs text-[#333]">© 2025 — All rights reserved</span>
          <a href="https://github.com" target="_blank" rel="noreferrer"
            className="text-xs tracking-widest uppercase text-[#444] hover:text-[#888] transition-colors flex items-center gap-1">
            <Github size={12} /> GitHub
          </a>
        </footer>
      </div>
    </>
  );
}
