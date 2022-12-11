import React from "react";
import Day from "../Items/Day";
import Night from "../Items/Night";
import Toggle from "../Items/Toggle";
const Header = () => {
  return (
    <div className="w-9/12 mx-auto py-10 flex justify-between">
      <div className="w-12 flex space-x-3 items-center justify-center">
        <Day></Day>
        <Toggle></Toggle>
        <Night></Night>
      </div>
      {/* <div className="font-Inconsolata font-bold">
        <ul className="flex space-x-10 text-lg">
          <li>Skills</li>
          <li>projects</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Header;
