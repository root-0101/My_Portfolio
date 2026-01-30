import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { X, Home, Briefcase, Award, Shield, Terminal, BookOpen } from 'lucide-react'

function Dropdown({ isVisible, onClose }) {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={18} />, type: "link" },
    { name: "Projects", path: "#projects", icon: <Briefcase size={18} />, type: "anchor" },
    { name: "Wall of Fame", path: "#wall-of-fame", icon: <Shield size={18} />, type: "anchor" },
    { name: "Skills", path: "#skills", icon: <BookOpen size={18} />, type: "anchor" },
    { name: "Certifications", path: "/certifications", icon: <Award size={18} />, type: "link" },
    { name: "Terminal", path: "/terminal", icon: <Terminal size={18} />, type: "link" },
  ];

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[280px] bg-[#040711]/95 backdrop-blur-2xl border-l border-white/10 z-[60] shadow-2xl transition-transform duration-500 ease-in-out ${isVisible ? "translate-x-0" : "translate-x-full"
        }`}
    >
      <div className="flex flex-col h-full p-6">
        <div className="flex justify-end mb-8">
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            link.type === "link" ? (
              <Link
                key={link.name}
                to={link.path}
                onClick={onClose}
                className={`flex items-center gap-4 p-4 rounded-xl text-lg font-medium transition-all duration-300 ${location.pathname === link.path
                    ? "bg-[#38bdf8]/10 text-[#38bdf8]"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={location.pathname === "/" ? link.path : `/${link.path}`}
                onClick={onClose}
                className="flex items-center gap-4 p-4 rounded-xl text-lg font-medium text-gray-300 transition-all duration-300 hover:bg-white/5 hover:text-white"
              >
                {link.icon}
                {link.name}
              </a>
            )
          ))}
        </div>

        <div className="mt-auto pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm text-center audiowide-regular">
            &copy; 2026 sl3uth
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dropdown