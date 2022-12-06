import { motion } from "framer-motion";
import React from "react";

import learningLaptop from "../../assets/l-learning-l.png";
import learningMobile from "../../assets/l-learning-m.png";
import lozzeByLaptop from "../../assets/laptop-view-lozzeBy.png";
import lozzeByMobile from "../../assets/mobile-view-lozzeBy.png";
import sweetMobile from "../../assets/swee-m.png";
import sweetLaptop from "../../assets/sweet-l.png";

const FeatutedProjects = () => {
  return (
    <div>
      <div className=" mx-auto flex font-Inconsolata space-x-20">
        <div className="w-44 text-xl uppercase text-end  font-bold text-[#112D4E]">
          Featured Projects
        </div>
        <div className="flex-1 space-y-32">
          <div className="flex space-x-6 ">
            <motion.div className="relative">
              <a href="https://lozzeby.web.app/">
                <img src={lozzeByLaptop} alt="" />
                <div className="absolute right-10 top-8">
                  <img className="lg:h-64 h-52" src={lozzeByMobile} alt="" />
                </div>
              </a>
            </motion.div>
            <div className="w-44">
              <h1 className="font-bold text-lg text-[#112D4E]">LozzeBy</h1>
              <p className="text-sm text-[#112D4E]">
                An used product resale website , Where buyer call buy used
                product posted by sellers , There is an option to create account
                as a seller and also have seller, buyer and admin dashboard.
              </p>
            </div>
          </div>
          <div className="flex space-x-6 mt-6">
            <div className="relative">
              <a href="https://lozzeby.web.app/">
                <img src={sweetLaptop} alt="" />
                <div className="absolute right-10 top-8">
                  <img className="lg:h-64 h-56" src={sweetMobile} alt="" />
                </div>
              </a>
            </div>
            <div className="w-44">
              <h1 className="font-bold text-lg text-[#112D4E]">
                Lunox Learning
              </h1>
              <p className="text-sm text-[#112D4E]">
                I am a Computer Science Student. I completed my graduation from
                Bangladesh University of Business & Technology. Since my
                childhood i was interested and excited about technology. I enjoy
                exploring new technology.
              </p>
            </div>
          </div>
          <div className="flex space-x-6 mt-6">
            <div className="relative">
              <a href="https://lozzeby.web.app/">
                <img src={learningLaptop} alt="" />
                <div className="absolute right-10 top-8">
                  <img className="lg:h-64 h-56" src={learningMobile} alt="" />
                </div>
              </a>
            </div>
            <div className="w-44">
              <h1 className="font-bold text-lg text-[#112D4E]">
                Lunox Learning
              </h1>
              <p className="text-sm text-[#112D4E]">
                I am a Computer Science Student. I completed my graduation from
                Bangladesh University of Business & Technology. Since my
                childhood i was interested and excited about technology. I enjoy
                exploring new technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatutedProjects;
