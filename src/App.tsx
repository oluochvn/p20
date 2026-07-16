import {useState} from "react";
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';


function App(){
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={`${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-800'} transition-colors duration-700 font-jetbrains-mono`}>
    <nav className=" flex justify-between items-center p-4 border-b border-gray-300 ml-5 mr-5">
      <div>
        <h1 className="font-caveat text-2xl">Vincent Oluoch</h1>
      </div>
      <div>
        <ul className="flex space-x-5">
          <li><a href="#home" className="hover:text-blue-500">Home</a></li>
          <li><a href="#About" className="hover:text-blue-500">About</a></li>
          <li><a href="#Projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#Contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
      <button className="mr-3 transition-transform duration-1700" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <Sun /> : <Moon  />}
      </button>
    </nav>
    </div>
  )
}
export default App;