import { motion } from "framer-motion";
import React from "react";
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
        <p className="text-justify  font-Inconsolata md:text-2xl text-blue-600">
          {/* A design minded front-end web developer. <br /> As well as I have an
          aim to make functional websites <br /> with beautiful interfaces and
          pixel-perfect <br /> user experiences. */}
          A React Developer, <br /> I have knowledge of building functional{" "}
          <br />
          websites with beautiful interfaces and experiences.
        </p>
        <p className="font-Inconsolata text-sm md:text-xl text-[#112D4E]">
          Get in touch :{" "}
          <motion.button className="underline underline-offset-4 cursor-pointer hover:bg-fontColor hover:text-background px-2 py-1 text-[#112D4E]">
            alifsakib@gmail.com
          </motion.button>
        </p>
        <p className="font-Inconsolata text-sm md:text-xl text-[#112D4E] font-bold">
          <a
            href="https://drive.google.com/file/d/1PdNfguJd3DqqkdeLhEdZ8JfunltuhPgf/view?usp=sharing"
            target="_blank"
            className="flex items-center cursor-pointer hover:bg-fontColor hover:text-background  py-1 text-[#112D4E] hover:text-blue-600"
            rel="noreferrer"
          >
            <div>My Resume</div> <Down></Down>
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default Home;
