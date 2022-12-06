import React from "react";

const OtherProjects = () => {
  return (
    <div>
      <div className=" mx-auto flex font-Inconsolata space-x-20">
        <div className="w-44 text-xl uppercase text-end  font-bold text-[#ADE792]">
          Other Projects
        </div>
        <div className="flex-1">
          <div className="space-y-2">
            <h1 className="font-bold text-lg text-white">Quiz Bet</h1>
            <p className="text-sm text-[#D3EBCD]">
              An simple online quiz website where user can select topic and
              start quiz and for right answer a tost will show and give him
              alert that answer is right if wrong then wrong .
            </p>
            <div className="flex flex-wrap text-white">
              <div className="border py-px border-[#ADE792] rounded-md text-sm mr-4 mb-4">
                <p className="px-4">React</p>
              </div>
              <div className="border py-px border-[#ADE792] rounded-md text-sm mr-4 mb-4">
                <p className="px-4">React Router Dom</p>
              </div>
              <div className="border py-px border-[#ADE792] rounded-md text-sm mr-4 mb-4">
                <p className="px-4">Tailwind</p>
              </div>
              <div className="border py-px border-[#ADE792] rounded-md text-sm mr-4 mb-4">
                <p className="px-4">Firebase</p>
              </div>
              <div className="border py-px border-[#ADE792] rounded-md text-sm mr-4 mb-4">
                <p className="px-4">Private Routes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProjects;
