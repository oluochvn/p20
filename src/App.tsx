import { useState } from "react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { MenuIcon } from "lucide-react";
import { X } from "lucide-react";
import Snowfall from "react-snowfall";




function App(){
        const [dark,setDark] = useState(true)
        const [open, setOpen] = useState(false);

  return(
 <div className={`${dark ? "bg-black" : "bg-white"} ${dark ? "text-white" : "text-black"} transition duration-500 ease-out  min-h-screen text-[Roboto]`}>
   <div className="fixed inset-0 w-full h-full pointer-events-none  z-40">
  <Snowfall color="#34374C" />
    </div>
    

    <nav className={`${dark ? "bg-neutral-900" : "bg-neutral-300"} flex items-center justify-between p-4 md:p-5 md:justify-around sticky top-0 z-50 `}>

      <h1 className="font-bold">Oluochvn</h1>

      <ul className={`
        ${open ? "flex" : "hidden"} 
        flex-col absolute top-16 left-0 w-full text-center  p-5 gap-4 -m-1 font-mono font-lighter
        md:static md:flex md:flex-row md:bg-transparent backdrop-blur-[2px] md:w-auto  md:p-0
      `}>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact me</a></li>
      </ul>

      <div className="flex items-center gap-6">

        <button
          className="relative w-6 h-6"
          onClick={() => setDark(!dark)}
        >
          <Sun
            className={`absolute inset-0 transition-opacity duration-500
            ${dark ? "opacity-100" : "opacity-0"}`}
          />
          <Moon
            className={`absolute inset-0 transition-opacity duration-500
            ${dark ? "opacity-0" : "opacity-100"}`}
          />
        </button>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <MenuIcon className={`absolute ${open ? "opacity-0" : "opacity-100"} `} />
          <X className={` ${open ? "opacity-100" : "opacity-0"} `}  />
        </button>

      </div>
    </nav>
              <div className="md:grid md:grid-cols-2 min-h-screen   md:pb-45">
                  <div className="md:mt-[30%] md:ml-[15%] md:text-4xl font-mono font-bold">
                      <h1 className="md:pb-10">Vincent Oluoch</h1>
                      
                      <div>
                        <h1 className="text-yellow-600">FullStack Developer</h1>
                        <p className="md:text-[0.7em]  md:mt-2">I make modern websites that are fast and simple to use.</p>
                        <button><img src="/github.svg" alt="" /></button>
                        </div>
                  </div>
                  <div className="md:flex md:justify-center hidden items-center md:mt-[20%]">
                    <img className="w-70 rounded-full shadow-4xl border-3 border-yellow-600" src="/vnn.jpg" alt="" />
                  </div>
              </div>

              <div id="about" className={` md:grid md:grid-cols-2 h-screen ${dark ? "bg-neutral-900" : "bg-[#e3e4d2]"}`}>
                
                <div className="flex items-center justify-center">
                  <h1 className=" md:items-center md:text-6xl font-[saira]">ABOUT</h1>
                </div>

                <div className={`md:flex items-center justify-center ${dark ? "bg-neutral-800" : "bg-[#d7d8c5]"} p-10`}>
                      <p className="text-[1.4em] max-w-2xl text-left" >I’m a Full-Stack Developer  who builds  Fast, Responsive, 
                        and practical web applications. I enjoy creating clean user experiences and writing efficient, maintainable
                         code on both the Frontend and Backend. <br /> I’m always learning,
                         improving through real projects, and focused on building simple solutions that solve real problems.</p>
                </div>
              </div>

                <div
                  id="projects"
                  className={`min-h-screen ${
                    dark
                      ? "bg-gradient-to-b from-neutral-950 to-neutral-900 text-white"
                      : "bg-[#d7d8c5] text-black"
                  } pb-16`}
                >
                  <div className="text-center pt-24 space-y-4">
                    <h1 className="text-5xl font-[saira] tracking-wide">PROJECTS</h1>
                    <p className={`${dark ? "text-white/50" : "text-black/60"} max-w-xl mx-auto`}>
                      A selection of projects focused on performance, clean UI, and real-world functionality.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-10 mt-14 px-6">
                    <div className="group relative rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 hover:-translate-y-2 transition duration-500">
                      <img
                        className="w-full h-[45vh] object-cover group-hover:scale-105 transition duration-500"
                        src="/website.png"
                        alt="Website Project"
                      />
                      <div className="p-6 space-y-3">
                        <h3 className="text-2xl font-semibold">Portfolio Website</h3>
                        <div className="flex gap-2 flex-wrap">
                          <span className="text-xs px-3 py-1 rounded-full bg-amber-400 text-black">React</span>
                          <span className="text-xs px-3 py-1 rounded-full bg-white/10">Tailwind</span>
                          <span className="text-xs px-3 py-1 rounded-full bg-white/10">UI/UX</span>
                        </div>
                      </div>
                    </div>

                    <div className="group relative rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 hover:-translate-y-2 transition duration-500">
                      <img
                        className="w-full h-[45vh] object-cover group-hover:scale-105 transition duration-500"
                        src="/paytrack.png"
                        alt="Paytrack Project"
                      />
                      <div className="p-6 space-y-3">
                        <h3 className="text-2xl font-semibold">PayTrack</h3>
                        <div className="flex gap-2 flex-wrap">
                          <span className="text-xs px-3 py-1 rounded-full bg-amber-400 text-black">Fullstack</span>
                          <span className="text-xs px-3 py-1 rounded-full bg-white/10">Finance</span>
                          <span className="text-xs px-3 py-1 rounded-full bg-white/10">Dashboard</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center mt-14">
                    <button className="bg-amber-400 px-8 py-3 rounded-full font-semibold text-black hover:scale-105 transition">
                      View More
                    </button>
                  </div>
                </div>



                <section id="contact" className="min-h-screen flex items-center justify-center px-4 ">
              <div className={`max-w-3xl w-full  rounded-2xl p-8 shadow-lg space-y-6 "text-white" : "text-black`}>

                <h2 className="text-3xl font-bold text-center">Contact Me</h2>
                <p className="text-center">
                  Got a project, idea, or just want to say hi? Send me a message
                </p>

                <form className="space-y-4">

                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-xl border outline-none  focus:ring-2 focus:ring-white/20"
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-white/20"
                  />

                  <textarea
                    placeholder="Your Message"
                    
                    className={`w-full p-3 rounded-xl ${dark ? "text-white" : "text-black"} border outline-none focus:ring-2 ${dark ? "focus:ring-white" : " focus:ring-white/20"} `}
                  ></textarea>

                  <button
                    type="submit"
                    className={`w-full ${dark ? "bg-amber-600" : "bg-amber-300"} font-semibold p-3 rounded-xl hover:opacity-80 transition`}
                  >
                    Send Message
                  </button>

                </form>
              </div>
            </section>


</div>

  )
}
export default App;