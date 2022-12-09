import React from "react";
import Down from "./Down";

const Resume = () => {
  return (
    <div>
      <div className="font-Inconsolata text-sm md:text-xl text-[#112D4E] font-bold">
        <a
          href="https://drive.google.com/file/d/1PdNfguJd3DqqkdeLhEdZ8JfunltuhPgf/view?usp=sharing"
          target="_blank"
          className=" relative inline-block text-lg group"
          rel="noreferrer"
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#112D4E] rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#112D4E] group-hover:-rotate-180 ease"></span>
            <span className="relative flex text-sm md:text-base">
              <div>My Resume</div> <Down></Down>
            </span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#112D4E] rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
    </div>
  );
};

export default Resume;
