import { motion } from "framer-motion";
import React from "react";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import learningLaptop from "../../assets/l-learning-l.png";
import lozzeByLaptop from "../../assets/laptop-view-lozzeBy.png";
import sweetLaptop from "../../assets/sweet-l.png";
const FeatutedProjects = () => {
  return (
    <div>
      <div className=" mx-auto lg:flex font-Inconsolata md:space-x-20 w-full">
        <Bounce left>
          <div className="w-44 text-xl uppercase text-start md:text-end  font-bold text-[#112D4E]">
            Featured Projects
          </div>
        </Bounce>
        <div className="flex-1 space-y-32 lg:mt-0 mt-5">
          <Fade bottom>
            <div className="flex space-x-6 flex-col md:flex-row">
              <div className="relative">
                <a href="https://lozzeby.web.app/">
                  <img src={lozzeByLaptop} alt="" />
                </a>
              </div>
              <div className="md:w-44 mt-5 md:mt-0 lg:w-1/3">
                <h1 className="font-bold text-lg text-[#112D4E]">LozzeBy</h1>
                <p className="text-sm text-[#112D4E]">
                  ● Implemented user authentication using firebase <br /> ●
                  Secured dashboard for Buyer, Seller & Admin using jwt
                  authorization. <br /> ● Handled loading states, and used
                  custom hooks and stripe payment gateway.
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="flex space-x-6 flex-col md:flex-row">
              <motion.div className="relative">
                <a href="https://lozzeby.web.app/">
                  <img src={learningLaptop} alt="" />
                </a>
              </motion.div>
              <div className="md:w-44 mt-5 md:mt-0 lg:w-1/3 ">
                <h1 className="font-bold text-lg text-[#112D4E]">
                  Lunox Learning
                </h1>
                <p className="text-sm text-[#112D4E] ">
                  ● Handled premium access using a private route. <br /> ●
                  Implemented dark mode and maintained dynamic data loading.{" "}
                  <br />● Handled form data with react-hook-form, active link
                  added for active routes.
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="flex space-x-6 flex-col md:flex-row">
              <motion.div className="relative">
                <a href="https://lozzeby.web.app/">
                  <img src={sweetLaptop} alt="" />
                </a>
              </motion.div>
              <div className="md:w-44 mt-5 md:mt-0 lg:w-1/3">
                <h1 className="font-bold text-lg text-[#112D4E]">
                  Sweet Manicures
                </h1>
                <p className="text-sm text-[#112D4E]">
                  ● MongoDB CRUD Operation and Operators. <br /> ● Optimized
                  images and used loaders for a better user experience. <br /> ●
                  Sorted the reviews in descending order by review post time.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default FeatutedProjects;
