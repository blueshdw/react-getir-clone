import React, { useState, useRef } from "react";

const Input = ({ label, errorMessage }) => {
  const [querySize, setQuerySize] = useState(15);
  const [showError, setShowError] = useState(false); // errorMessage yerine showError

  const inputRef = useRef(null);

  const handleFocus = () => {
    setQuerySize(10);
    inputRef.current.focus();
  };

  const handleBlur = () => {
    setQuerySize(15);
    if (inputRef.current.value.trim() === "") {
      setShowError(true); // errorMessage yerine showError
    } else {
      setShowError(false);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        ref={inputRef}
        onFocus={() => setQuerySize(9)}
        onBlur={handleBlur}
        maxLength={10}
        type="text"
        className={`w-full outline-none border h-11 px-4 duration-200 rounded-md ${
          showError
            ? "border-2 border-red-600"
            : "border-[#C9C9C9] focus:border-2 focus:border-purple-dark"
        }`}
      />
      <span
        onClick={handleFocus}
        className="absolute top-2 left-4 text-gray-text duration-200"
        style={{ fontSize: `${querySize}px` }}
      >
        {label}
      </span>
      {showError && (
        <div className="text-sm text-red-600">{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;
