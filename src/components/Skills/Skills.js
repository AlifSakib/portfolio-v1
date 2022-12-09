import { motion } from "framer-motion";
import React from "react";
import { Bounce } from "react-reveal";
import Background from "./Background";
import FeatutedProjects from "./FeatutedProjects";
import OtherProjects from "./OtherProjects";

const Skills = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 space-y-20">
      <Background></Background>
      <div className=" mx-auto md:flex  font-Inconsolata md:space-x-20">
        <Bounce left>
          <div className="w-44 text-xl uppercase text-start md:text-end  font-bold text-[#112D4E]">
            Skills
          </div>
        </Bounce>

        <div className="flex-1 mt-5 md:mt-0">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-10">
            <div>
              <div className="uppercase">
                <h1 className="text-xl text-green font-bold text-purple-600">
                  Languages
                </h1>
              </div>
              <motion.div className="font-normal text-base text-[#112D4E]">
                <ul>
                  <li>JavaScript</li>
                  <li>Html</li>
                  <li>Css</li>
                </ul>
              </motion.div>
            </div>
            <div>
              <div className="uppercase">
                <h1 className="text-xl text-green font-bold text-purple-600">
                  Frameworks
                </h1>
              </div>
              <div className="font-normal text-base text-[#112D4E]">
                <ul>
                  <li>React</li>
                  <li>Node</li>
                  <li>Express</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="uppercase">
                <h1 className="text-xl text-green font-bold text-purple-600">
                  Tools
                </h1>
              </div>
              <div className="font-normal text-base text-[#112D4E]">
                <ul>
                  <li>Mongodb</li>
                  <li>Git & Github</li>
                  <li>Chrome DevTools</li>
                  <li>Postman</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="uppercase">
                <h1 className="text-xl text-green font-bold text-purple-600">
                  Familier
                </h1>
              </div>
              <div className="font-normal text-base text-[#112D4E]">
                <ul>
                  <li>JavaScript</li>
                  <li>Html</li>
                  <li>Css</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeatutedProjects></FeatutedProjects>
      <OtherProjects></OtherProjects>
    </div>
  );
};

export default Skills;
