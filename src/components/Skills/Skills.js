import { motion } from "framer-motion";
import React from "react";
import { Bounce } from "react-reveal";
import Background from "./Background";
import FeatutedProjects from "./FeatutedProjects";
import OtherProjects from "./OtherProjects";

const Skills = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 space-y-40">
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
                <h1 className="text-xl text-green font-bold text-indigo-600">
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
                <h1 className="text-xl text-green font-bold text-indigo-600">
                  Frameworks
                </h1>
              </div>
              <div className="font-normal text-base text-[#112D4E]">
                <ul>
                  <li>React</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>Tailwind</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="uppercase">
                <h1 className="text-xl text-green font-bold text-indigo-600">
                  Tools
                </h1>
              </div>
              <div className="font-normal text-base text-[#112D4E]">
                <ul>
                  <li>MongoDB</li>
                  <li>Git</li>
                  <li>Vercel</li>
                  <li>Netlify</li>
                  <li>npm</li>
                  <li>postman</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="uppercase">
                <h1 className="text-xl text-green font-bold text-indigo-600">
                  Familier
                </h1>
              </div>
              <div className="font-normal text-base text-[#112D4E]">
                <ul>
                  <li>Axios</li>
                  <li>React Query</li>
                  <li>Framer Motion</li>
                  <li>Netlify</li>
                  <li>Styled-Components</li>
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
