import { useState } from "react";
import { Sun, Moon, MenuIcon, X } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("https://contactbck.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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
    <div className={`${dark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} transition-colors duration-500 font-sans min-h-screen`}>
      {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-opacity-70 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold">Oluochvn</h1>
          <ul className={`md:flex md:items-center md:gap-6 ${menuOpen ? "flex flex-col gap-4 mt-4" : "hidden"}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
          <div className="flex items-center gap-4">
            <button onClick={() => setDark(!dark)} className="p-2 rounded-full hover:bg-gray-700/30">
              {dark ? <Sun /> : <Moon />}
            </button>
            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-20">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold">Vincent Oluoch</h1>
          <p className="text-xl md:text-2xl text-yellow-500 font-semibold">Fullstack Developer</p>
          <p className="text-gray-400 md:text-lg max-w-md">
            I create fast, clean, and modern websites and web applications. Simple, elegant, and efficient code is my priority.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://github.com" target="_blank" className="px-4 py-2 bg-yellow-500 text-black rounded-lg font-medium hover:opacity-90">GitHub</a>
            <a href="#contact" className="px-4 py-2 border border-yellow-500 rounded-lg font-medium hover:bg-yellow-500 hover:text-black transition">Contact Me</a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img src="/vnn.jpg" alt="Vincent" className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-yellow-500" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`${dark ? "bg-gray-800" : "bg-gray-100"} py-20 px-6`}>
        <div className="max-w-5xl mx-auto text-center md:text-left md:grid md:grid-cols-2 md:gap-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300 md:text-gray-700">
              I am a Fullstack Developer focused on building responsive, efficient, and user-friendly web applications. I enjoy clean UI/UX design, practical solutions, and maintainable code. Learning and building real projects is my daily drive.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex items-center justify-center">
            <p className="text-gray-400 md:text-gray-700 text-center">
              My goal is to deliver simple and effective solutions while keeping performance and user experience at the highest level.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-gray-400">Some of my work, focusing on performance and clean UI.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition transform">
            <img src="/website.png" alt="Portfolio" className="w-full h-64 object-cover" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold">Portfolio Website</h3>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs">React</span>
                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">Tailwind</span>
              </div>
            </div>
          </div>
          <div className="border rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition transform">
            <img src="/paytrack.png" alt="PayTrack" className="w-full h-64 object-cover" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold">PayTrack</h3>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs">Fullstack</span>
                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">Finance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`${dark ? "bg-gray-800" : "bg-gray-100"} py-20 px-6 flex justify-center`}>
        <div className="max-w-3xl w-full bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg space-y-6">
          <h2 className="text-3xl font-bold text-center">{dark ? "Get in Touch" : "Contact Me"}</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-yellow-500"/>
            <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-yellow-500"/>
            <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-yellow-500"/>
            <button type="submit" className="w-full bg-yellow-500 text-black font-semibold p-3 rounded-xl hover:opacity-90 transition">Send Message</button>
          </form>
          {status && <p className="text-center mt-2">{status}</p>}
        </div>
      </section>
    </div>
  );
}

export default App;