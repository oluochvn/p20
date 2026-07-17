import {useState} from "react";
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react'
import { SquareTerminal } from 'lucide-react';
//import { DottedGlowBackground } from "./component/dotted-glow-background";
//import { BackgroundRippleEffect } from "./component/background-ripple-effect";



function App(){
  const [darkMode, setDarkMode] = useState(true);
  const[open,setOpen] = useState(false);
  
  return (
    <div className={`${darkMode ? 'bg-gray-950 text-white' : ' text-gray-800'} z-10  min-h-screen  w-full transition-colors duration-3500 font-jetbrains-mono`}>
    <nav className=" flex justify-between items-center p-4 ml-5 mr-5 h-[100px]">
      <div className="flex items-center space-x-2">
        <h1 className=" flex font-caveat text-2xl"><SquareTerminal /></h1>
        <h1>vnn</h1>
      </div>
      <div className=" lg:flex hidden space-x-5 ">
        <ul className="lg:flex hidden space-x-5">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#About" className="hover:text-blue-500">About</a></li>
          <li><a href="#Projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#Contact" className="hover:text-blue-500">Contact</a></li>
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
  {open ? <X /> : <Menu />}
</button>
         
      </div>
      </div>
    </nav>
    <div className={`lg:hidden absolute ${open ? 'block' : 'hidden'} p-4 text-center transition-transform duration-700 bg-gray-600 w-full text-white`}>
      <ul className="space-y-2  ">
        <li><a href="#home" className="hover:text-blue-900 hover: pb-7">Home</a></li>
        <li><a href="#About" className="hover:text-blue-900 pb-7">About</a></li>
        <li><a href="#Projects" className="hover:text-blue-900 pb-7">Projects</a></li>
        <li><a href="#Contact" className="hover:text-blue-900 pb-7">Contact</a></li>
      </ul>
    </div>

    <div className="grid grid-cols-2  ml-15 mr-15 mt-20 text-align-center items-center">
  <div className="ml-2">
    <h4 className="text-2xl ml-2">HI, I'M</h4>
    <h1 className="text-7xl font-bold">
      VINCENT <br />
      OLUOCH
    </h1>
    <h4 className="text-green-600 font-bold text-2xl pt-5 ">Fullstack Developer</h4>
  </div>

  <div className="flex justify-center items-center">
    <img
      className="rounded-full md:w-50 md:h-50 lg:w-70 lg:h-70 object-cover"
      src="/vbg.jpeg"
      alt="Vincent Oluoch"
    />
  </div>
</div>

      <div className="block m-10 h-[300px]">
      <div>
        <h2>About</h2>
      </div>
      <div></div>
    </div>

      <div className="block m-10 h-[300px]">
      <div>
        <h2>About</h2>
      </div>
      <div></div>
    </div>
  </div>
  )
}
export default App;