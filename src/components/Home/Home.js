import { motion } from "framer-motion";
import React from "react";
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
          A design minded front-end web developer. <br /> As well as I have an
          aim to make functional websites <br /> with beautiful interfaces and
          pixel-perfect <br /> user experiences.
        </p>
        <p className="font-Inconsolata md:text-xl text-[#112D4E]">
          Get in touch :{" "}
          <motion.button className="underline underline-offset-4 cursor-pointer hover:bg-fontColor hover:text-background px-2 py-1 text-[#112D4E]">
            alifsakib@gmail.com
          </motion.button>
        </p>
      </div>
    </motion.div>
  );
};

export default Home;
