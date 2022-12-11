import React from "react";

const ContactMe = ({ handleContact }) => {
  return (
    <div>
      <button
        onClick={handleContact}
        href="#_"
        className="px-5 ml-2 py-px relative rounded font-Inconsolata text-sm md:text-lg group overflow-hidden text-indigo-600 inline-block border-b-4 border-indigo-600"
      >
        <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-indigo-600 group-hover:h-full opacity-90"></span>
        <span className="relative group-hover:text-white">
          alifsakib@gmail.com
        </span>
      </button>
    </div>
  );
};

export default ContactMe;
