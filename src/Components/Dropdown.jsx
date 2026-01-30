import React from 'react'
import { Link } from 'react-router-dom'

function Dropdown({ setDrop }) {
  return (
    <div className="fixed top-16 mx-auto w-screen backdrop-blur-md bg-black/50 rounded-md flex flex-col items-center gap-2 popin py-4 audiowide-regular" onClick={() => setDrop(false)}>
      <span
        className="hover:text-[#38bdf8] p-4 hover:rounded-lg"
        onClick={() => window.scrollTo(0, 0)}
      >
        <Link to={"/"}>Home</Link>
      </span>
      <a
        href="#wall-of-fame"
        className="hover:text-[#38bdf8] p-4 hover:rounded-lg"
      >
        Wall of Fame
      </a>
      <a
        href="#skills"
        className="hover:text-[#38bdf8] p-4 hover:rounded-lg"
      >
        Skills
      </a>
      <a
        href="#projects"
        className="hover:text-[#38bdf8] p-4 hover:rounded-lg"
      >
        Projects
      </a>
      <span className="hover:text-[#38bdf8] p-4 hover:rounded-lg">
        <Link to={"/certifications"}>Certifications</Link>
      </span>
      <span className="hover:text-[#38bdf8] p-4 hover:rounded-lg">
        <Link to={"/terminal"}>Terminal</Link>
      </span>
    </div>
  )
}

export default Dropdown