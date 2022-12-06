import { motion } from "framer-motion";
import React from "react";

const Background = () => {
  return (
    <div>
      <div className=" mx-auto flex font-Inconsolata space-x-20">
        <motion.div className="w-44 text-xl uppercase text-end  font-bold text-green text-[#112D4E]">
          Background
        </motion.div>
        <motion.div className="flex-1">
          <div>
            <p className="text-justify text-[#112D4E]">
              I am a Computer Science Student. I completed my graduation from
              Bangladesh University of Business & Technology. Since my childhood
              i was interested and excited about technology. I enjoy exploring
              new technology.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Background;
