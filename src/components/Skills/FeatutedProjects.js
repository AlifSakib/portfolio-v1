import { motion } from "framer-motion";
import React from "react";
import learningLaptop from "../../assets/l-learning-l.png";
import sweetLaptop from "../../assets/sweet-l.png";

const FeatutedProjects = () => {
  return (
    <div>
      <div className=" mx-auto lg:flex font-Inconsolata md:space-x-20 w-full">
        <div className="w-44 text-xl uppercase text-end  font-bold text-[#112D4E]">
          Featured Projects
        </div>
        <div className="flex-1 space-y-32 lg:mt-0 mt-5">
          <div className="flex space-x-6 flex-col md:flex-row">
            <motion.div className="relative">
              <a href="https://lozzeby.web.app/">
                <img src={sweetLaptop} alt="" />
                {/* <div className="absolute right-10 top-8 md:block hidden">
                  <img className="lg:h-64 h-52" src={sweetMobile} alt="" />
                </div> */}
              </a>
            </motion.div>
            <div className="md:w-44 mt-5 md:mt-0 lg:w-1/3">
              <h1 className="font-bold text-lg text-[#112D4E]">
                Sweet Manicures
              </h1>
              <p className="text-sm text-[#112D4E]">
                MongoDB CRUD Operation and Operators. Optimized images and used
                loaders for a better user experience. Sorted the reviews in
                descending order by review post time.
              </p>
            </div>
          </div>
          <div className="flex space-x-6 flex-col md:flex-row">
            <motion.div className="relative">
              <a href="https://lozzeby.web.app/">
                <img src={learningLaptop} alt="" />
                {/* <div className="absolute right-10 top-8 md:block hidden">
                  <img className="lg:h-64 h-52" src={learningMobile} alt="" />
                </div> */}
              </a>
            </motion.div>
            <div className="md:w-44 mt-5 md:mt-0 lg:w-1/3">
              <h1 className="font-bold text-lg text-[#112D4E]">
                Lunox Learning
              </h1>
              <p className="text-sm text-[#112D4E] ">
                Handled premium access using a private route. Implemented dark
                mode and maintained dynamic data loading. Handled form data with
                react-hook-form, active link added for active routes.
              </p>
            </div>
          </div>
          <div className="flex space-x-6 flex-col md:flex-row">
            <motion.div className="relative">
              <a href="https://lozzeby.web.app/">
                <img src={sweetLaptop} alt="" />
                {/* <div className="absolute right-10 top-8 md:block hidden">
                  <img className="lg:h-64 h-52" src={sweetMobile} alt="" />
                </div> */}
              </a>
            </motion.div>
            <div className="md:w-44 mt-5 md:mt-0 lg:w-1/3">
              <h1 className="font-bold text-lg text-[#112D4E]">
                Sweet Manicures
              </h1>
              <p className="text-sm text-[#112D4E]">
                MongoDB CRUD Operation and Operators. Optimized images and used
                loaders for a better user experience. Sorted the reviews in
                descending order by review post time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatutedProjects;
