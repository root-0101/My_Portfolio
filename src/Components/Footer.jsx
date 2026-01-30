import { HeartIcon, GlobeIcon } from "@radix-ui/react-icons";
import { Github, Linkedin, X as XIcon, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Links Section */}
        <div className="hidden md:block">
          <p className="font-bold text-lg mb-4 text-[#38bdf8]">Quick Links</p>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <li><a className="text-gray-400 hover:text-white transition-colors" href="#projects">Projects</a></li>
            <li><a className="text-gray-400 hover:text-white transition-colors" href="/certifications">Certifications</a></li>
            <li><a className="text-gray-400 hover:text-white transition-colors" href="#wall-of-fame">Wall of Fame</a></li>
            <li><a className="text-gray-400 hover:text-white transition-colors" href="/terminal">Terminal</a></li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="flex flex-col items-center gap-4">
          <p className="font-bold text-lg text-[#38bdf8] md:hidden">Connect</p>
          <div className="flex gap-6">
            <a href="https://github.com/root-0101" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-[#38bdf8]/10 hover:text-[#38bdf8] transition-all duration-300">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/r4jv33r/" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-[#38bdf8]/10 hover:text-[#38bdf8] transition-all duration-300">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/rajveer_0101" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-[#38bdf8]/10 hover:text-[#38bdf8] transition-all duration-300">
              <XIcon size={20} />
            </a>
            <a href="https://medium.com/@rajveer_0101" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-[#38bdf8]/10 hover:text-[#38bdf8] transition-all duration-300">
              <FileText size={20} />
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="text-center text-sm">
          <div className="items-center justify-center space-x-6">
            <div className="flex items-center space-x-2">
              <span>Made with</span>
              <HeartIcon className="text-red-600 h-5 w-5" />
              <span>and deployed on</span>
              <GlobeIcon className="text-blue-600 h-5 w-5" />
            </div>
          </div>
          <p className="text-sm mt-4">© 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
