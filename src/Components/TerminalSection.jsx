import React from "react";
import { Link } from "react-router-dom";
import FunTerminal from "./FunTerminal";

function Terminal() {
  return (
    <>
      <div className="fixed z-50 top-0 left-0 backdrop-blur-sm bg-black/50 h-screen w-screen flex flex-col justify-center items-center">
        <div className="relative mt-0 flex justify-around">
        <Link
            to="/"
            className="absolute z-10 top-[3.5px] left-[3px] h-5 w-5"
          >
          </Link>
          <FunTerminal />
        </div>
      </div>
    </>
  );
}

export default Terminal;