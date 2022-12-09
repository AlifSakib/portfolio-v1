import { motion } from "framer-motion";
import React from "react";
import ContactMe from "../Items/ContactMe";
import Down from "../Items/Down";
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="h-screen w-full flex items-center"
    >
      <div className="space-y-14 w-9/12 mx-auto ">
        <motion.h1
          className="font-Sacramento text-[#112D4E] text-fontColor text-7xl md:text-8xl font-bold "
          initial={{ y: -250 }}
          animate={{ y: 10 }}
          transition={{
            delay: 0.2,
            duration: 1,
            type: "spring",
            stiffness: 120,
          }}
        >
          I'm Alif
        </motion.h1>

        <p className="text-justify  font-Inconsolata md:text-2xl text-purple-600">
          {/* A design minded front-end web developer. <br /> As well as I have an
          aim to make functional websites <br /> with beautiful interfaces and
          pixel-perfect <br /> user experiences. */}
          I am a front-end web developer , <br /> I have knowledge of building
          functional <br />
          websites with beautiful interfaces and experiences.
        </p>

        <div className="font-Inconsolata text-sm md:text-xl text-[#112D4E] flex items-center">
          <p>Get in touch :</p>
          {/* <motion.button className="underline underline-offset-4 cursor-pointer hover:bg-fontColor hover:text-background px-2 py-1 text-[#112D4E]">
            alifsakib@gmail.com
          </motion.button> */}
          <ContactMe></ContactMe>
        </div>
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
    </motion.div>
  );
};

export default Home;
