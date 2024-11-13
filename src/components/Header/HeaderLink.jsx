// HeaderLink.js
import React from "react";
import { NavLink } from "react-router-dom";

const HeaderLink = ({ path, title }) => {
  const isSingleTitle = typeof title === "string"; // Title tek kelime mi kontrol ediyoruz

  return (
    <NavLink to={path}>
      {({ isActive }) => (
        <div
          className={
            isActive
              ? "flex items-center font-bold  px-5 pb-2 h-11 mt-2 rounded-t-md bg-purple-light"
              : "flex items-center font-bold  px-5 pb-2 h-11 mt-2 rounded-t-md hover:bg-purple-light"
          }
        >
          {/* Tek kelime title için stil */}
          {isSingleTitle ? (
            <span className={isActive ? "text-orange-text" : "text-white"}>
              {title}
            </span>
          ) : (
            // İki kelime title için stil
            <>
              <span className={isActive ? "text-orange-text" : "text-white"}>
                {title.first}
              </span>
              <span className={isActive ? "text-white" : "text-white"}>
                {title.second}
              </span>
            </>
          )}
        </div>
      )}
    </NavLink>
  );
};

export default HeaderLink;
