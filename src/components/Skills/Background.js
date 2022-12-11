import React from "react";
import { Bounce } from "react-reveal";

const Background = () => {
  return (
    <div>
      <div className=" mx-auto  md:flex font-Inconsolata md:space-x-20">
        <Bounce left>
          <div className="w-44 text-xl uppercase text-start md:text-end  font-bold text-[#112D4E]">
            Background
          </div>
        </Bounce>

        <div className="flex-1 mt-5 md:mt-0">
          <div>
            <div className="selection:bg-red-500 selection:text-white text-justify text-[#112D4E] space-y-6">
              <p>
                I am Md. Sakib Hossain Alif. I recently graduated from the
                Bangladesh University of Business and Technology.
              </p>
              <p>
                As a front-end web developer, My goal is to build products that
                are scalable, efficient, neat, and clean and also provide the
                best user experience.
              </p>
              <p>
                I spend most of the time in front of my computer screen. When
                I'm not in front of my computer screen I probably enjoy playing
                online games, hanging out with friends, or listening to songs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
