import { TableOfContentsIcon } from "lucide-react";
import { Moon } from "lucide-react";
import { Mail } from "lucide-react";
import { Terminal } from "lucide-react";
import { Sun } from "lucide-react";
import { LucidePhoneOutgoing } from "lucide-react";
import { useState } from "react";

function App(){
          const [dark,setDark] = useState(false)
          const [open, setOpen] = useState(false);

  return(

    <div className={`bg-[#EBF4F6] md:text-[1.3em] transition-all duration-600 ease-out ${dark ? "bg-[#d0e9ef]": "bg-black"}  ${dark ? "text-black" : "text-white"}`}>
    <div className="">
<nav className={`relative md:pl-[20%] md:pr-[20%] flex justify-between md:sticky top-0 backdrop-blur-[7px] items-center border-b border-gray-700 h-[10vh] md:p-10 px-5`}>
      <h2 className="items-center flex font-bold font-mono"><Terminal/>Oluochvn</h2>

      <ul
        className={`
          absolute top-[7vh] left-0 w-full bg-beige-700 flex flex-col items-center gap-4 py-4
          md:flex md:flex-row md:static md:w-auto md:bg-transparent md:py-0 md:gap-4
          ${open ? "block" : "hidden"} md:block
          font-[roboto]
        `}
      >
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
          <div>
            <button
            className="transition duration-1000 ease-out"
            onClick={() => setDark(!dark)}
          >
            <div className={`flex ${dark ? "border": "border"} px-2 py-1 rounded-2xl`}>
              <Moon className={`transition duration-1000 ease-out ${dark ? "opacity-0" : "opacity-100"}`} />
              <Sun className={`transition duration-1000 ease-out ${dark ? "opacity-100" : "opacity-0"}`} />
            </div>
          </button>
                  <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
         <TableOfContentsIcon/>
      </button>
          </div>
    </nav>

      <div className="ml-5 mt-50 border-b border-gray-700   pb-7 ">
          <h1 className="text-3xl font-bold mb-6 font-[sensation]  "> About</h1>
          <p className="text-[1.1em] font-serif text-left mb-10">
            Hi I'm Vincent I create website and web applications using React <br />
            I turn ideas into sleek, high-performance websites tailored to your vision. I'm available for freelance or remote work. 
            Let's build something we'll be proud of.
          </p>
          <p className="underline hover:text-blue-700 transition-all duration-500 ease-out"><a href="">View My Work</a></p>
      </div>


      <div className="ml-5 mt-20 border-b border-gray-700  pb-20">
        <h1 className="text-2xl font-bold mb-6 font-[sensation]">Skills</h1>
        <div className="grid grid-cols-2 list-none font-[Roboto]">
          <nav>
           
          <li>Javascript</li>
          <li>React</li>
          <li>Typescript</li>
          <li>C++</li>
          <li>TailwindCss</li>
          </nav>
          <nav>
          <li>Html</li>
          <li>Python</li>
          <li>C</li>
          <li></li>
          </nav>
        </div>
      </div>

        <div className="ml-5 mt-5  font-[Roboto]">
            <h1 className="text-2xl font-bold mb-6 font-[sensation]">Featured Project</h1>
            <div className="border-b border-neutral-900  hover:border-neutral-600 transition-all duration-1000 ease-out border rounded-2xl mt-5 p-10 pl-7">
                
                <h2 className="pt-3 font-sans text-3xl font-bold tracking-tight  text-[1.3em]">Pesatrack</h2>
                <p>A budgeting app to help track user spendings</p>
                <nav className="flex list-none gap-6 text-blue-100 pt-3">
                  <button className="bg-blue-500 px-3 py-1 rounded-[10px] text-center">React</button>
                  <button className="bg-blue-500 px-3 py-1 rounded-[10px] text-center">TailwindCss</button>
                  <button className="bg-blue-500 px-3 py-1 rounded-[10px] text-center">Nodejs</button>
                  <button className="bg-blue-500 px-3 py-1 rounded-[10px] text-center">MongoDB</button>
                </nav>
                
            </div>
                        <div className="border-b border-neutral-900 hover:border-neutral-600 transition-all duration-1000 ease-out border rounded-2xl mt-5 p-10 pl-7">
                <h2 className="pt-3 font-bold text-[1.3em]">Personal Portfolio</h2>
                <p className="">A clean and minimal portfolio showcasing my work and projects. Built with modern web technologies.</p>
                <nav className="flex list-none gap-6 text-blue-100 pt-3">
                  <button className="bg-blue-500 px-3 py-1 rounded-[10px] text-center">React</button>
                  <button className="bg-blue-500 px-3 py-1 rounded-[10px] text-center">TailwindCss</button>
                  <button className="bg-blue-500 px-3 py-1 rounded-[10px] text-center">Nodejs</button>
                </nav>
                
            </div>
            <div className="mt-10 text-center p-10" >
              <h1 className="text-4xl font-bold pb-5">Let's work together</h1>
              <div className="pb-6">
                  <p>Have a project in mind? I'd love to hear about it. Get in touch and let's create something amazing together.</p>
              </div>
              <div className="gap-4 flex justify-center">
                <button className="px-5 py-2 text-black bg-amber-200 hover:bg-amber-300 transition-all duration-500 ease-in rounded flex gap-2"> <Mail /> send me an email</button>
                <button className="group flex px-5 py-2 hover:bg-green-600 rounded gap-2 transition-all duration-1000 ease-in">Schedule a call <LucidePhoneOutgoing className="opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-in" /></button>
              </div>
            </div>
        </div>
    </div>
    </div>
  )
}
export default App;