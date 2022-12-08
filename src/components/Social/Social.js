import React from "react";
import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Social = () => {
  return (
    <div className=" flex items-center space-x-4 rotate-90">
      <div className="-rotate-90 text-2xl text-sky-700">
        <a href="https://www.linkedin.com/in/alifsakib/">
          <FaLinkedin></FaLinkedin>
        </a>
      </div>
      <div className=" -rotate-90 text-2xl text-slate-600">
        <a href="https://github.com/AlifSakib">
          <FaGithub></FaGithub>
        </a>
      </div>
      <div className=" -rotate-90 text-2xl text-blue-600">
        <a href="https://www.facebook.com/alif.sakib.1671/">
          <FaFacebook></FaFacebook>
        </a>
      </div>
      <div className="-rotate-90 text-2xl  text-indigo-500">
        <a href="AlifSakib#6941" title="AlifSakib#6941">
          <FaDiscord></FaDiscord>
        </a>
      </div>
    </div>
  );
};

export default Social;
