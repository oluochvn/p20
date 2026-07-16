import {useState} from "react";
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react'



function App(){
  const [darkMode, setDarkMode] = useState(true);
  const[open,setOpen] = useState(false);
  
  return (
    <div className={`${darkMode ? 'bg-gray-950 text-white' : 'bg-neutral-200 text-gray-800'} h-screen  w-full h-[300px] overflow-hidden transition-colors duration-700 font-jetbrains-mono`}>
    <nav className=" flex justify-between items-center p-4 border-b border-gray-300 ml-5 mr-5">
      <div>
        <h1 className="font-caveat text-2xl">Vincent Oluoch</h1>
      </div>
      <div className=" lg:flex hidden space-x-5 ">
        <ul className="lg:flex hidden space-x-5">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#About" className="hover:text-blue-500">About</a></li>
          <li><a href="#Projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#Contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
      <div>
         <button className="mr-3 transition-transform duration-1700" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <Sun/> : <Moon  />}
      </button>
      </div>
      <div className="flex">
       <button className=" lg:hidden transition-all duration-800"
  onClick={() => setOpen(!open)}
>
  {open ? <X /> : <Menu />}
</button>
         
      </div>
    </nav>
    <div className={`lg:hidden ${open ? 'block' : 'hidden'} p-4 text-center transition-transform duration-700`}>
      <ul className="space-y-2">
        <li><a href="#home" className="hover:text-blue-500">Home</a></li>
        <li><a href="#About" className="hover:text-blue-500">About</a></li>
        <li><a href="#Projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#Contact" className="hover:text-blue-500">Contact</a></li>
      </ul>
    </div>
  </div>
  )
}
export default App;