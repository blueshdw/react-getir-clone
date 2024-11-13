import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {} from "react-icons/fa";

const Bottom = () => {
  return (
    <div className="p-6 flex flex-col md:flex-row border-t mt-6 justify-between">
      <div className="text-center md:text-left">
        <span>© 2024 Getir</span>
        <a className="text-purple-dark ml-2" href="#">
          Bilgi Toplumu Hizmetleri
        </a>
      </div>
      <div className="flex gap-2">
        <FaFacebook className="text-2xl cursor-pointer text-gray-text" />
        <FaTwitter className="text-2xl cursor-pointer text-gray-text"/>
        <FaInstagram className="text-2xl cursor-pointer text-gray-text"/>
      </div>
    </div>
  );
};

export default Bottom;
