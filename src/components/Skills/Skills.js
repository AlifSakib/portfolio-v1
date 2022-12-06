import { motion } from "framer-motion";
import React from "react";
import Background from "./Background";
import FeatutedProjects from "./FeatutedProjects";
import OtherProjects from "./OtherProjects";

const Skills = () => {
  return (
    <div className="space-y-20 lg:w-1/2 lg:mx-auto mx-14">
      <Background></Background>
      <div className=" mx-auto md:flex  font-Inconsolata md:space-x-20">
        <div className="w-44 text-xl uppercase text-start md:text-end  font-bold text-[#112D4E]">
          Skills
        </div>
        <div className="flex-1 mt-5">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-10">
            <div>
              <div className="uppercase">
                <h1 className="text-xl text-green font-bold text-blue-600">
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
                <h1 className="text-xl text-green font-bold text-blue-600">
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
                <h1 className="text-xl text-green font-bold text-blue-600">
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
                <h1 className="text-xl text-green font-bold text-blue-600">
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
