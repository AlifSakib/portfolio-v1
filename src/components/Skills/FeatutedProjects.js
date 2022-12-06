import { motion } from "framer-motion";
import React from "react";

import learningLaptop from "../../assets/l-learning-l.png";
import learningMobile from "../../assets/l-learning-m.png";
import lozzeByLaptop from "../../assets/laptop-view-lozzeBy.png";
import sweetMobile from "../../assets/swee-m.png";
import sweetLaptop from "../../assets/sweet-l.png";

const FeatutedProjects = () => {
  return (
    <div>
      <div className=" mx-auto md:flex font-Inconsolata md:space-x-20">
        <div className="w-44 text-xl uppercase text-end  font-bold text-[#112D4E]">
          Featured Projects
        </div>
        <div className="flex-1 space-y-32 md:mt-0 mt-5">
          <div className="flex space-x-6 flex-col md:flex-row">
            <motion.div className="relative">
              <a href="https://lozzeby.web.app/">
                <img src={lozzeByLaptop} alt="" />
                {/* <div className="absolute right-10 top-8 md:block hidden">
                  <img className="lg:h-64 h-52" src={lozzeByMobile} alt="" />
                </div> */}
              </a>
            </motion.div>
            <div className="md:w-44 mt-5 md:mt-0">
              <h1 className="font-bold text-lg text-[#112D4E]">LozzeBy</h1>
              <p className="text-sm text-[#112D4E]">
                Implemented user authentication using firebase.Secured dashboard
                for Buyer, Seller & Admin using jwt authorization.Handled
                loading states, and used custom hooks and stripe payment
                gateway.
              </p>
            </div>
          </div>
          <div className="flex space-x-6 flex-col md:flex-row">
            <motion.div className="relative">
              <a href="https://lozzeby.web.app/">
                <img src={sweetLaptop} alt="" />
                <div className="absolute right-10 top-8 md:block hidden">
                  <img className="lg:h-64 h-52" src={sweetMobile} alt="" />
                </div>
              </a>
            </motion.div>
            <div className="md:w-44 mt-5 md:mt-0">
              <h1 className="font-bold text-lg text-[#112D4E]">LozzeBy</h1>
              <p className="text-sm text-[#112D4E]">
                Implemented user authentication using firebase.Secured dashboard
                for Buyer, Seller & Admin using jwt authorization.Handled
                loading states, and used custom hooks and stripe payment
                gateway.
              </p>
            </div>
          </div>
          <div className="flex space-x-6 flex-col md:flex-row">
            <motion.div className="relative">
              <a href="https://lozzeby.web.app/">
                <img src={learningLaptop} alt="" />
                <div className="absolute right-10 top-8 md:block hidden">
                  <img className="lg:h-64 h-52" src={learningMobile} alt="" />
                </div>
              </a>
            </motion.div>
            <div className="md:w-44 mt-5 md:mt-0">
              <h1 className="font-bold text-lg text-[#112D4E]">LozzeBy</h1>
              <p className="text-sm text-[#112D4E]">
                Implemented user authentication using firebase.Secured dashboard
                for Buyer, Seller & Admin using jwt authorization.Handled
                loading states, and used custom hooks and stripe payment
                gateway.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatutedProjects;
