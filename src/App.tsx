import {useState} from "react";
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react'
import { SquareTerminal } from 'lucide-react';
import { MapPin } from 'lucide-react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { DottedGlowBackground } from "./component/dotted-glow-background";
//import { BackgroundRippleEffect } from "./component/background-ripple-effect";



function App(){
  const [darkMode, setDarkMode] = useState(true);
  const[open,setOpen] = useState(false);
  
  return (
    <div className={`${darkMode ? 'bg-gray-950 text-white' : ' text-gray-800'} z-10  min-h-screen  w-full transition-colors duration-3500 font-jetbrains-mono`}>
    <nav className=" flex justify-between items-center p-4 ml-5 mr-5 h-[100px] top-0 sticky z-10 backdrop-blur-sm">
      <div className="flex items-center space-x-2">
        <h1 className=" flex font-caveat text-2xl"><SquareTerminal /></h1>
        <h1>vnn</h1>
      </div>
      <div className=" lg:flex hidden space-x-5 ">
        <ul className="lg:flex hidden space-x-5">
          <li><a href="#home" className="hover:text-green-600 hover transition-transform duration-600">Home</a></li>
          <li><a href="#About" className="hover:text-green-600 hover:transition-transform duration-600">About</a></li>
          <li><a href="#Projects" className="hover:text-green-600 hover:transition-transform duration-600">Projects</a></li>
          <li><a href="#Contact" className="hover:text-green-600 hover:transition-transform duration-600">Contact</a></li>
        </ul>
      </div>
      <div className="flex items-center">
         <button className="mr-3 transition-transform duration-1700" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <Sun/> : <Moon  />}
      </button>
      
      <div className="flex">
       <button className=" lg:hidden transition-transform duration-1800"
  onClick={() => setOpen(!open)}
>
  {open ? <X className="text-[#16C47F] font-bold" /> : <Menu />}
</button>

      </div>
      </div>
    </nav>
    <div className={`lg:hidden absolute ${open ? 'block' : 'hidden'} p-4 text-center transition-transform duration-700 top-20 fixed  w-full backdrop-blur-sm`}>
      <ul className="space-y-2  ">
        <li><a href="#home" className="hover:text-green-600 hover: pb-7">Home</a></li>
        <li><a href="#About" className="hover:text-green-600 pb-7">About</a></li>
        <li><a href="#Projects" className="hover:text-green-600 pb-7">Projects</a></li>
        <li><a href="#Contact" className="hover:text-green-600 pb-7">Contact</a></li>
      </ul>
    </div>

    <div className="lg:pl-15 lg:pr15 grid grid-cols-2  ml-15 mr-15 mt-20 text-align-center justify-items-center h-[320px] mb-7">
  <div className="">
    <h4 className="text-2xl ml-2 uppercase">hi, i'm</h4>
    <h1 className="text-5xl font-bold uppercase">
      vincent Oluoch
    </h1>
    <h4 className="text-green-600 font-bold text-2xl  ">Fullstack Developer</h4> 
    <p className="pt-4">I solve design problems, create intuitive user interfaces, and craft engaging web experiences and modern web applications.</p>
    
     <div className="flex items-center space-x-2 mt-4 font-bold hover:text-green-600 "><MapPin /><h2>KENYA</h2></div>
  </div>

  <div className="flex  items-center  lg:pr20 sm:ml-7">
    <img
      className="rounded-full sm:w-70 sm:h-70 lg:w-70 lg:h-70 p-4 bg-white object-cover border-2 border-green-600 transition-transform duration-700 hover:scale-110"
      src="/vbg.jpeg"
      alt="Vincent Oluoch"
    />
  </div>
</div>

      <div  className={`${darkMode ? 'bg-[#00000F] text-white' : ' bg-[#EAEFEF]'} h-[520px] lg:pt-10 lg:pl-30 sm:block sm:h-full sm:pl-15 sm:pt-5 transition-colors duration-3500 h-[520px] `}>
        <h1 className="text-3xl font-bold "><span>.01</span> Skills & Tools</h1>
        <div className="lg:flex flex-col lg:flex-row justify-center items-center mt-10 gap-5">

        <div  className={`${darkMode ? 'hover:bg-[#F0F0F0] hover:text-gray-800' : 'hover:bg-[#1A1A2E] hover:text-white'} mt-5 w-full max-w-md rounded-2xl border border-gray-700 p-6`} >
          <h2 className="mb-3 text-lg font-semibold tracking-wide">
            Frontend
          </h2>
          <p className=" leading-relaxed">
            HTML / TypeScript / React / React Native/ CSS / Tailwind CSS.
          </p>
        </div>
        <div className={`${darkMode ? 'hover:bg-[#F0F0F0] hover:text-gray-800' : 'hover:bg-[#1A1A2E] hover:text-white'} mt-5 w-full max-w-md rounded-2xl border border-gray-700 p-6`} >
          <h2 className="mb-3 text-lg font-semibold tracking-wide">
            Backend
          </h2>
          <p className=" leading-relaxed">
            Nodejs/ Express / REST APIs 
            MongoDB / Supabase / MySQL / Postgre
          </p>
        </div>
        </div>
              <p className="lg:text-center text-lg sm:text-base p-15 sm:pl-2 sm:pt-5 sm:block  tracking-wide ">
                I believe great software comes from continuous learning and attention to detail. <br />
                I'm always improving my skills.
              </p>
    </div>

    <div className={`${darkMode ? 'bg-[#081c15] text-white border-t-2 border-gray-600' : 'bg-[#EAEFEF] border-t-2 border-gray-200'} h-[40px] transition-colors duration-3500 pl-30 pt-10 h-[520px] sm:pl-15 border-t-2 border-gray-300`}>
      <h1 className="text-3xl font-bold "><span>.02</span>Projects</h1>
    </div>

  </div>
  )
}
export default App;