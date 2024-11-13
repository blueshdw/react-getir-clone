import React from "react";

const Button = ({ children, disabled }) => {
  return (
    <button
      className={`max-w-[352px] w-full h-[52px] mt-3 bg-orange-button text-purple-text  duration-200 font-bold rounded-lg ${
        disabled
          ? "opacity-50 cursor-not-allowed bg-black bg-opacity-50"
          : "hover:bg-purple-text hover:text-orange-text"
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
