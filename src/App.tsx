import {useState} from "react";
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react'
import { SquareTerminal } from 'lucide-react';
import { MapPin } from 'lucide-react';
import CIcon from '@coreui/icons-react';
import { cibReact } from '@coreui/icons';
import { cibCss3Shiled } from "@coreui/icons";


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

    <div className="lg:pl-15 lg:pr15 grid grid-cols-2  ml-15 mr-15 mt-20 text-align-center justify-items-center h-[420px] mb-7">
  <div className="">
    <h4 className="text-2xl ml-2 uppercase">hi, i'm</h4>
    <h1 className="text-5xl font-bold uppercase">
      vincent Oluoch
    </h1>
    <h4 className="text-green-600 font-bold text-2xl  ">Fullstack Developer</h4> 
    <p className="pt-4">Full-stack developer specializing in React, TypeScript and Node.js. I build fast, scalable web applications with modern UI and clean backend architecture.</p>
    
     <div className="flex items-center space-x-2 mt-4 font-bold hover:text-green-600 "><MapPin /><h2>KENYA</h2></div>
     <div className="mt-5 flex gap-4 ">
        <img src="/github.svg" alt=""
     className="w-10 h-10 bg-white rounded-full" />
       <img src="/GitHub.svg" alt=""
     className="w-10 h-10 inline-block text-white" />
      <img src="/GitHub.svg" alt=""
     className="w-10 h-10 inline-block text-white" />
      <img src="/GitHub.svg" alt=""
     className="w-10 h-10 inline-block text-white" />
     </div>
  </div>

  <div className="flex  items-center  lg:pr20 sm:ml-7">
    <img
      className="rounded-full sm:w-70 sm:h-70 lg:w-70 lg:h-70 p-4 bg-white object-cover border-2 border-green-600 transition-transform duration-700 hover:scale-110"
      src="/vbg.jpeg"
      alt="Vincent Oluoch"
    />
  </div>
</div>

      <div  className={`${darkMode ? 'bg-[#00000F] text-white' : ' bg-[#EAEFEF]'} lg:pt-10 lg:pl-30 sm:block sm:h-full lg:h-[520px] sm:pl-15 sm:pt-5 transition-colors duration-3500`}>
        <h1 className="text-3xl font-bold "><span>.01</span> Skills & Tools</h1>
        <div className="lg:flex flex-col lg:flex-row justify-center items-center mt-10 gap-5">

        <div  className={`${darkMode ? 'bg-[#F0F0F0]' : ' bg-[#F0F0F0] '} text-gray-800 mt-5 w-full max-w-md rounded-2xl border border-gray-700 p-6`} >
          <h2 className="m-3 text-lg font-semibold tracking-wide text-green-600">
            Frontend
          </h2>
          <p className=" leading-relaxed m-3 h-20">
             <img src="Skillsntools/HTML5.svg"
              alt="HTML svg" className="w-7 h-7 inline-block" /> HTML    |
            <img src="Skillsntools/TypeScript.svg"
              alt="typescript icon"
              className="w-7 h-7 inline-block" /> Typescript    |
              <CIcon icon={cibReact}       className="w-7 h-7 inline-block" /> React    |
             <CIcon icon={cibCss3Shiled}  className="w-7 h-7 inline-block" /> CSS    |
            <img src="Skillsntools/Tailwind CSS.svg"
              alt="typescript icon"
              className="w-7 h-7 inline-block" />  Tailwind CSS.
          </p>
        </div>
        <div  className={`${darkMode ? 'bg-[#F0F0F0]' : ' bg-[#F0F0F0] '} text-gray-800 mt-5 w-full max-w-md rounded-2xl border border-gray-700 p-6`} >
          <h2 className="m-3 text-lg font-semibold tracking-wide text-green-600">
            Backend and Databases
          </h2>
          <p className=" leading-relaxed m-3 h-20">
            <img src="Skillsntools/Node.js.svg"
             alt="Nodejs svg"
              className="w-7 h-7 inline-block" /> Nodejs  |  
            <img src="Skillsntools/Express.svg"
             alt="Express"
            className="w-7 h-7 inline-block" />   Express   |
            <img src="Skillsntools/rest.svg"
             alt="Nodejs svg"
              className="w-7 h-7 inline-block" /> REST APIs <br /> 
            <img src="Skillsntools/MongoDB.svg"
             alt="MongoDB ICON"
              className="w-7 h-7 inline-block" />MongoDB   |
            <img src="Skillsntools/supabase.svg"
             alt="supabase"
              className="w-7 h-7 inline-block" />Supabase   |
            <img src="Skillsntools/mysql.svg"
             alt="MySQL.svg"
              className="w-7 h-7 inline-block" />MySQL   | <br />      
            <img src="Skillsntools/PostgresSQL.svg"
             alt="PostgresSql"
              className="w-7 h-7 inline-block" />   
              Postgress
          </p>
        </div>
        </div>
              <p className="lg:text-center  sm:text-base lg:mt-15 sm:pl-2 sm:pt-5 sm:block  tracking-wide">
                I believe great software comes from continuous learning and attention to detail. <br />
                I'm always improving my skills.
              </p>
    </div>
<div>
  <h1 className="text-3xl font-bold "><span>.01</span> Skills & Tools</h1>
<div className="flex items-center justify-between mx-40 gap-8 p-20">
  
  <div className="w-1/2 h-[40vh] rounded-2xl border border-gray-700/50 p-7">
    <h1 className="text-2xl font-semibold text-center">
      Shamba Records
    </h1>
  </div>

  <div className="w-1/2 h-[40vh] rounded-2xl border border-gray-700/50 p-7">
    <h1 className="text-2xl font-semibold text-center">
      Pesatrak
    </h1>
  </div>
</div>
</div>
  </div>
  )
}
export default App;