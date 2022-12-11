import React from "react";
import { Link } from "react-router-dom";

const GoBack = () => {
  return (
    <div>
      <Link to="/" className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 border-2 rounded-full border-purple-600 py-1 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </Link>
    </div>
  );
};

export default GoBack;
