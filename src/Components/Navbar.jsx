import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import profilePicture from "../assets/images/profilePic.jpg";
import { Github, Linkedin, X as XIcon, FileText, SquareTerminal } from "lucide-react";
import Dropdown from "./Dropdown";

function Navbar() {
  const [drop, setDrop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", type: "link" },
    { name: "Projects", path: "#projects", type: "anchor" },
    { name: "Wall of Fame", path: "#wall-of-fame", type: "anchor" },
    { name: "Skills", path: "#skills", type: "anchor" },
    { name: "Certifications", path: "/certifications", type: "link" },
    { name: "Terminal", path: "/terminal", type: "link" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full h-20 px-6 md:px-12 flex items-center justify-between z-50 transition-all duration-300 ${scrolled ? "bg-[#040711]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(56,189,241,0.1)]" : "bg-transparent"
        }`}>
        {/* Left Section: Branding */}
        <div className="flex items-center gap-3">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#38bdf8] to-blue-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
            <img
              src={profilePicture}
              alt="profile"
              className="relative h-10 w-10 rounded-full border border-white/20 object-cover"
            />
          </div>
          <span className="hidden sm:block">
            <Link to="/">
              <img
                src="https://readme-typing-svg.demolab.com?font=Orbitron&weight=500&size=20&duration=3000&pause=1000&color=FFFFFF&vCenter=true&width=150&lines=sl3uth"
                alt="branding"
                className="h-8"
              />
            </Link>
          </span>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            link.type === "link" ? (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#38bdf8]/10 hover:text-[#38bdf8] ${location.pathname === link.path ? "text-[#38bdf8]" : "text-gray-300"
                  }`}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.path}
                className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-[#38bdf8]/10 hover:text-[#38bdf8]"
              >
                {link.name}
              </a>
            )
          ))}
        </div>

        {/* Right Section: Socials & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/root-0101" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/r4jv33r/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/rajveer_0101" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <XIcon size={18} />
            </a>
            <a href="https://medium.com/@rajveer_0101" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FileText size={20} />
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
            onClick={() => setDrop(!drop)}
          >
            <SquareTerminal size={28} className={drop ? "text-[#38bdf8]" : ""} />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {drop && <Dropdown setDrop={setDrop} />}
      </nav>
    </>
  );
}

export default Navbar;