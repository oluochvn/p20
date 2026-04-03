import { useState } from "react";
import { Sun, Moon, MenuIcon, X } from "lucide-react";
import Snowfall from "react-snowfall";

function App() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("https://contactbck.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        setStatus(data.message || "Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Error sending message");
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error");
    }
  };

  return (
    <div className={`${dark ? "bg-black text-white" : "bg-white text-black"} transition duration-500 ease-out min-h-screen font-[Roboto]`}>
      <div className="fixed inset-0 w-full h-full pointer-events-none z-40">
        <Snowfall color="#34374C" />
      </div>

      <nav className={`${dark ? "bg-neutral-900/80" : "bg-neutral-300/80"} backdrop-blur-md flex items-center justify-between p-4 md:p-5 md:justify-around sticky top-0 z-50`}>
        <h1 className="font-bold">Oluochvn</h1>
        <ul className={`${open ? "flex" : "hidden"} flex-col absolute top-16 left-0 w-full text-center p-8 gap-8 text-lg ${dark ? "bg-neutral-900/95" : "bg-neutral-200/95"} backdrop-blur-md md:static md:flex md:flex-row md:bg-transparent md:w-auto md:p-0 md:text-base md:gap-4`}>
          <li><a href="#" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact me</a></li>
        </ul>
        <div className="flex items-center gap-5">
          <button className="relative w-6 h-6" onClick={() => setDark(!dark)}>
            <Sun className={`absolute inset-0 transition-opacity duration-500 ${dark ? "opacity-100" : "opacity-0"}`} />
            <Moon className={`absolute inset-0 transition-opacity duration-500 ${dark ? "opacity-0" : "opacity-100"}`} />
          </button>
          <button className="md:hidden relative w-6 h-6" onClick={() => setOpen(!open)}>
            <MenuIcon className={`absolute inset-0 transition ${open ? "opacity-0" : "opacity-100"}`} />
            <X className={`absolute inset-0 transition ${open ? "opacity-100" : "opacity-0"}`} />
          </button>
        </div>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen px-6 pt-28 md:pt-0 md:min-h-screen md:pb-45 relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center md:hidden">
          <div className="w-[320px] h-[320px] bg-yellow-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative text-center md:text-left flex flex-col justify-center md:mt-[30%] md:ml-[15%] text-3xl md:text-4xl font-mono font-bold space-y-6">
          <h1>Vincent Oluoch</h1>
          <div className="space-y-3">
            <h1 className="text-yellow-600">FullStack Developer</h1>
            <p className="text-base md:text-[0.7em] md:mt-2 max-w-sm mx-auto md:mx-0">
              I make modern websites that are fast and simple to use.
            </p>
            <button className="mx-auto md:mx-0">
              <img src="/github.svg" alt="GitHub" />
            </button>
          </div>
        </div>

        <div className="hidden md:flex md:justify-center items-center md:mt-[20%]">
          <img className="w-70 rounded-full shadow-4xl border-3 border-yellow-600" src="/vnn.jpg" alt="Vincent" />
        </div>
      </div>

      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className={`max-w-3xl w-full rounded-3xl p-8 shadow-lg space-y-6 ${dark ? "bg-gradient-to-br from-neutral-900 to-black border border-white/10" : "bg-white border border-black/10"}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-center">Contact Me</h2>
          <p className="text-center text-sm md:text-base">
            Got a project, idea, or just want to say hi? Send me a message
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className="w-full p-3 rounded-xl border bg-transparent outline-none focus:ring-2 focus:ring-white/20"/>
            <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} className="w-full p-3 rounded-xl border bg-transparent outline-none focus:ring-2 focus:ring-white/20"/>
            <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} className="w-full p-3 rounded-xl border bg-transparent outline-none focus:ring-2 focus:ring-white/20"></textarea>
            <button type="submit" className="w-full bg-amber-600 font-semibold p-3 rounded-xl hover:opacity-80 transition">
              Send Message
            </button>
          </form>
          {status && <p className="text-center mt-2">{status}</p>}
        </div>
      </section>
    </div>
  );
}

export default App;