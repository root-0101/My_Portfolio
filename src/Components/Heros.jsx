import React from "react";
import { Github, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";
import profilePic from "../assets/images/profilePic.jpg";
import profilePicBack from "../assets/images/profilePicBack.png";
import resume from "../assets/Rajveer_CyberSecurity_Analyst.pdf";


const Hero = () => {
  const gradientTextClass =
    "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300";

  return (
    <div className="lg:mt-14 min-h-screen text-white flex flex-col items-center justify-center relative overflow-hidden px-4 audiowide-regular">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </motion.div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-4xl w-full space-y-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Profile Section */}
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Profile Image with Spinning Effect */}
          <motion.div
            className="relative group bottom-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <div className="absolute -inset-0.5 rounded-full opacity-75 group-hover:opacity-100 transition duration-500 blur"></div>

            <div className="relative h-40 w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 mx-auto rounded-full overflow-hidden border-4 border-white/10 transform transition-transform duration-700 group-hover:rotate-[360deg]">
              <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                <img
                  src={profilePic}
                  alt="Front"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <img
                  src={profilePicBack}
                  alt="Back"
                  className="w-full h-full object-cover self-center"
                />
              </div>
            </div>
          </motion.div>

          {/* Main Text */}
          <motion.div
            className="space-y-7 cursor-default"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <motion.h1
              className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#38bdf1] leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="">HEY👋, I AM RAJVEER</span>
            </motion.h1>
          </motion.div>

          {/* Description with Animations */}
          <motion.div
            className="space-y-5 text-gray-400 cursor-default w-[95%] mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.p
              className="text-xs sm:text-sm md:text-base lg:text-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              I do <span className="text-[#38bdf8]">ctf</span> and dig into the websites to uncover the vulnerabilities.
            </motion.p>

            <motion.p
              className="text-xs sm:text-sm md:text-base lg:text-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              I'm a <span className="text-[#38bdf8]">Security</span> professional with expertise in <span className="text-[#38bdf8]">penetration testing</span>, vulnerability assessment & <span className="text-[#38bdf8]">API testing</span>           </motion.p>

            <motion.p
              className="text-xs sm:text-sm md:text-base lg:text-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              I'm focused to learn new stuff and currently <span className="text-[#38bdf8]">open to work</span>
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <a
            href={resume}
            target="_self"
            download={false}
            rel="noopener noreferrer"
            className="group font-courier font-semibold flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            <FileText className="w-5 h-5 text-blue-400" />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 group-hover:text-white transition-colors">
              Resume
            </span>
          </a>
          <a
            href="mailto:sl3uth@wearehackerone.com"
            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48"><path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path></svg>
            <span className="text-xs font-courier font-semibold sm:text-sm md:text-base lg:text-lg text-gray-300 group-hover:text-white transition-colors">
              Gmail
            </span>
          </a>

        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-0 -translate-x-1/2 w-full flex justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
      </motion.div>
    </div>

  );
};

export default Hero;