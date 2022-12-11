import { motion } from "framer-motion";
import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import learningLaptop from "../../assets/l-learning-l.png";
import lozzeByLaptop from "../../assets/laptop-view-lozzeBy.png";
import sweetLaptop from "../../assets/sweet-l.png";
import Redirect from "../Items/Redirect";
import ViewDetails from "../Items/ViewDetails";
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
                <div className="flex mt-2 items-center">
                  <h1 className="font-bold text-lg text-[#112D4E]">LozzeBy</h1>
                  <a
                    href="https://github.com/AlifSakib/lozzeby-client-side"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithubAlt className="w-5 h-5  ml-2 text-[#112D4E] "></FaGithubAlt>
                  </a>
                  <a
                    href="https://lozzeby.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Redirect></Redirect>
                  </a>
                </div>
                <div className="text-sm text-[#112D4E]">
                  <p>● Implemented user authentication using firebase</p>
                  <p>
                    ● Secured dashboard for Buyer, Seller & Admin using jwt
                    authorization.
                  </p>
                  <p className="md:hidden lg:block">
                    ● Handled loading states, and used custom hooks and stripe
                    payment gateway.
                  </p>
                  <div className="mt-2 flex flex-col">
                    <Link to="/project-1">
                      <ViewDetails></ViewDetails>
                    </Link>
                  </div>
                </div>
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
                <div className="flex my-1 items-center">
                  <h1 className="font-bold text-lg text-[#112D4E]">
                    Sweet Manicures
                  </h1>
                  <a
                    href="https://github.com/AlifSakib/sweet-manicures-client-side"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithubAlt className="w-5 h-5  ml-2 text-[#112D4E] "></FaGithubAlt>
                  </a>
                  <a
                    href="https://dlux-inc.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Redirect></Redirect>
                  </a>
                </div>
                <div className="text-sm text-[#112D4E]">
                  <p>● MongoDB CRUD Operation and Operators. </p>
                  <p>
                    ● Optimized images and used loaders for a better user
                    experience.
                  </p>
                  <p className="md:hidden lg:block">
                    ● Sorted the reviews in descending order by review post
                    time.
                  </p>
                  <div className="mt-2 flex flex-col">
                    <Link to="/project-3">
                      <ViewDetails></ViewDetails>
                    </Link>
                  </div>
                </div>
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
                <div className="flex my-1 items-center">
                  <h1 className="font-bold text-lg text-[#112D4E]">
                    Lunox Learning
                  </h1>
                  <a
                    href="https://github.com/AlifSakib/lunox-learning-client-side"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithubAlt className="w-5 h-5  ml-2 text-[#112D4E] "></FaGithubAlt>
                  </a>
                  <a
                    href="https://lunox-learning.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Redirect></Redirect>
                  </a>
                </div>
                <div className="text-sm text-[#112D4E]">
                  <p>● Handled premium access using a private route.</p>
                  <p>
                    ● Implemented dark mode and maintained dynamic data loading.
                  </p>
                  <p className="md:hidden lg:block">
                    ● Handled form data with react-hook-form, active link added
                    for active routes.
                  </p>
                  <div className="mt-2 flex flex-col">
                    <Link to="/project-2">
                      <ViewDetails></ViewDetails>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default FeatutedProjects;
