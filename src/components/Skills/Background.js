import React from "react";
import { Bounce } from "react-reveal";

const Background = () => {
  return (
    <div>
      <div className=" mx-auto  md:flex font-Inconsolata md:space-x-20">
        <Bounce left>
          <div className="w-44 text-xl uppercase text-end  font-bold text-[#112D4E]">
            Background
          </div>
        </Bounce>

        <div className="flex-1 mt-5 md:mt-0">
          <div>
            <p className="text-justify text-[#112D4E]">
              I am a Computer Science Student. I completed my graduation from
              Bangladesh University of Business & Technology. Since my childhood
              i was interested and excited about technology. I enjoy exploring
              new technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
