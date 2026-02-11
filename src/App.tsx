import { useState } from "react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { MenuIcon } from "lucide-react";
import { X } from "lucide-react";



function App(){
          const [dark,setDark] = useState(true)
          const [open, setOpen] = useState(false);

  return(
 <div className={`${dark ? "bg-black" : "bg-white"} ${dark ? "text-white" : "text-black"} transition duration-500 ease-out  min-h-screen text-[Roboto]`}>
    
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
                <div id="projects" className={`min-h-screen ${dark ? "bg-neutral-700" : "bg-[#d7d8c5]"} pb-5`}>
                                <h1 className="md:text-center md:text-5xl  font-[saira] pt-25">PROJECTS</h1>
                <div className="grid grid-cols-1 max-w-4xl mx-auto gap-8 mt-10 px-4">

                  <div className="bg-neutral-900 rounded-2xl p-4 shadow-lg hover:scale-[1.02] transition space-y-3">
                      <img
                        className="rounded-xl w-full h-[45vh] object-cover"
                        src="/website.png"
                        alt="Website Project"
                      />
                      <h3 className="text-white text-xl font-semibold">Portfolio Website</h3>
                  </div>

                  <div className="bg-neutral-900 rounded-2xl p-4 shadow-lg hover:scale-[1.02] transition space-y-3">
                      <img
                        className="rounded-xl w-full h-[45vh] object-cover"
                        src="/paytrack.png"
                        alt="Paytrack Project"
                      />
                      <h3 className="text-white text-xl font-semibold">PayTrack</h3>
                  </div>
                  
                </div>
                <div className="flex justify-center p-6 ">
                    <button className=" bg-amber-400 px-5 py-2 rounded text-black">view more</button>
                  </div>
                </div>
                 <div id="contact" className={`min-h-screen ${dark ? "bg-neutral-700" : "bg-[#d7d8c5]"} pb-5`}>
                       <h1 className="md:text-center md:text-5xl  font-[saira] pt-25">CONTACT</h1>
                  </div>

</div>

  )
}
export default App;