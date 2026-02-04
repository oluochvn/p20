import { TableOfContentsIcon } from "lucide-react";
import { useState } from "react";

function App(){

          const [open, setOpen] = useState(false);

  return(

    <div className="bg-[#EBF4F6]">
    <div className=" h-screen mr-5 ml-5 sticky top-10 items-start ">
<nav className="relative flex justify-between items-center border-b border-black/10 h-[7vh] px-5">
      <h2 className="font-bold">VIN</h2>

      <ul
        className={`
          absolute top-[7vh] left-0 w-full bg-beige-700 flex flex-col items-center gap-4 py-4
          md:flex md:flex-row md:static md:w-auto md:bg-transparent md:py-0 md:gap-4
          ${open ? "block" : "hidden"} md:block
          font-[Roboto]
        `}
      >
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <TableOfContentsIcon />
      </button>
    </nav>

      <div className="ml-5 mt-50 border-b border-black/10  pb-7 ">
          <h1 className="text-3xl font-bold mb-6 font-[sensation]  "> About</h1>
          <p className="text-[1.1em] font-serif text-left mb-10">
            Hi I'm Vincent I create website and web applications using <span className="text-neutral-900">React</span> <br />
            I turn ideas into sleek, high-performance websites tailored to your vision. I'm available for freelance or remote work. 
            Let's build something we'll be proud of.
          </p>
          <p className="underline hover:text-blue-700"><a href="">View My Work</a></p>
      </div>


      <div className="ml-5 mt-20 border-b border-black/10 pb-20">
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

        <div className="ml-5 mt-5 h-[70vh] font-[Roboto]">
            <h1 className="text-2xl font-bold mb-6 font-[sensation]">Featured Project</h1>
            <div className="border-b border-black/10 pb-10">
                <a href=""><img className="rounded-2xl " src="/paytrack.png" alt="" /></a>
                <h2 className="pt-3 font-bold text-[1.3em]">Pesatrack</h2>
                <p>A budgeting app to help track user spendings</p>
                <nav className="flex list-none gap-6">
                  <button className="bg-green-300 px-3 py-1 rounded-[10px] text-center">React</button>
                  <button className="bg-green-300 px-3 py-1 rounded-[10px] text-center">TailwindCss</button>
                  <button className="bg-green-300 px-3 py-1 rounded-[10px] text-center">Nodejs</button>
                  <button className="bg-green-300 px-3 py-1 rounded-[10px] text-center">MongoDB</button>
                </nav>
                
            </div>
                        <div className="border-b border-black/10 pb-10">
                <a href=""><img className="rounded-2xl " src="/" alt="portfolio" /></a>
                <h2 className="pt-3 font-bold text-[1.3em]">Personal Portfolio</h2>
                <p>Simple clean Portfolio</p>
                <nav className="flex list-none gap-6">
                  <button className="bg-green-300 px-3 py-1 rounded-[10px] text-center">React</button>
                  <button className="bg-green-300 px-3 py-1 rounded-[10px] text-center">TailwindCss</button>
                  <button className="bg-green-300 px-3 py-1 rounded-[10px] text-center">Nodejs</button>
                </nav>
                
            </div>

            <div className="ml-5 mt-10 border-b border-black/10  pb-7 " >
              <h1 className="text-2xl font-bold mb-6 font-[sensation]">Let's work together</h1>
            </div>
        </div>
      



      
    </div>
    </div>
  )
}
export default App;