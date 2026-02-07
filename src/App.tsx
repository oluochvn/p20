import { useState } from "react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { MenuIcon } from "lucide-react";

function App(){
          const [dark,setDark] = useState(false)
          const [open, setOpen] = useState(false);

  return(
 <div className={`${dark ? "bg-black" : "bg-white"} min-h-screen`}>
  <div className={`${dark ? "bg-red-500" : "bg-green-400"}`}>
    <nav className="flex items-center justify-between p-4 md:p-5 md:justify-around">

      {/* logo */}
      <h1 className="font-bold">VIN</h1>

      {/* menu links */}
      <ul className={`
        ${open ? "flex" : "hidden"} 
        flex-col absolute top-16 left-0 w-[20%] bg-white p-5 gap-4
        md:static md:flex md:flex-row md:bg-transparent md:w-auto md:p-0
      `}>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
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
          <MenuIcon />
        </button>

      </div>
    </nav>
  </div>
</div>

  )
}
export default App;