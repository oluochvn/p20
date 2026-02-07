import { useState } from "react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { MenuIcon } from "lucide-react";
import { X } from "lucide-react";


function App(){
          const [dark,setDark] = useState(false)
          const [open, setOpen] = useState(false);

  return(
 <div className={`${dark ? "bg-black" : "bg-white"} ${dark ? "text-white" : "text-black"} transition-all duration-800 ease-in  min-h-screen text-[Roboto]`}>
  <div className={`${dark ? "bg-neutral-900" : "bg-neutral-300"}`}>
    <nav className="flex items-center justify-between p-4 md:p-5 md:justify-around sticky top-10">

      <h1 className="font-bold">Oluochvn</h1>

      <ul className={`
        ${open ? "flex" : "hidden"} 
        flex-col absolute top-16 left-0 w-full text-center  p-5 gap-4 -m-1 font-mono font-lighter
        md:static md:flex md:flex-row md:bg-transparent backdrop-blur-[2px] md:w-auto  md:p-0
      `}>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact me</li>
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
  </div>
              <div className="md:grid md:grid-cols-2   md:pb-45">
                  <div className="md:mt-[30%] md:ml-[15%] md:text-4xl font-mono font-bold">
                      <h1 className="md:pb-10">Vincent Oluoch</h1>
                      <div>
                        <h1 className="text-yellow-600">FullStack Developer</h1>
                        <p className="md:text-[0.7em]  md:mt-2">I make modern websites that are fast and simple to use.</p>
                        </div>
                  </div>
                  <div className="md:flex md:justify-center hidden items-center md:mt-[20%]">
                    <img className="w-70 rounded-full shadow-4xl border-3 border-yellow-600" src="/vnn.jpg" alt="" />
                  </div>
              </div>

              <div className="">
                <h1>about</h1>
              </div>
</div>

  )
}
export default App;