// Header.js
import React, { useContext } from "react";
import headerData from "../../api/HeaderData.json";
import HeaderLink from "./HeaderLink";
import { TbWorld } from "react-icons/tb";
import { FaUser } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { GlobalContext } from "../../context/GlobalContext";

const Header = () => {
  const { languageHandler, setLanguageHandler, loginHandler, setLoginHandler, registerHandler, setRegisterHandler } = useContext(GlobalContext);

  return (
    <div className="container-custom h-[45px] flex items-center justify-between overflow-hidden w-full bg-purple-dark fixed top-0 left-0 z-50">
      <nav className="flex">
        {headerData.map((link) => (
          <HeaderLink key={link.id} path={link.path} title={link.title} />
        ))}
      </nav>
      <nav className="flex items-center gap-10">
        <button
          onClick={() => setLanguageHandler(!languageHandler)}
          className="flex items-center gap-3"
        >
          <TbWorld className="text-white hidden md:flex" />
          <span className="text-white hidden lg:flex">Türkçe (TR)</span>
        </button>
        <button
          onClick={() => setLoginHandler(!loginHandler)}
          className="flex items-center gap-3"
        >
          <FaUser className="text-white hidden md:flex" />
          <span className="text-white hidden lg:flex">Giriş yap</span>
        </button>
        <button onClick={() => setRegisterHandler(!registerHandler)} className="flex items-center gap-3">
          <FaUserPlus className="text-white hidden md:flex" />
          <span className="text-white hidden lg:flex">Kayıt ol</span>
        </button>
      </nav>
    </div>
  );
};

export default Header;
