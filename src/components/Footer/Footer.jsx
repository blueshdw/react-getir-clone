import React from "react";
import Download from "./Top/Download/Download";
import Explore from "./Top/Explore/Explore";
import Help from "./Top/Help/Help";
import Partner from "./Top/Partner/Partner";
import Qr from "./Top/Qr/Qr";
import Bottom from "./Bottom/Bottom";

const Footer = () => {
  return (
    <div className="container-custom w-full pt-10">
      <div className="flex flex-col md:flex-row justify-between flex-wrap">
        <Download />
        <Explore />
        <Help />
        <Partner />
        <Qr />
      </div>
      <Bottom />
    </div>
  );
};

export default Footer;
