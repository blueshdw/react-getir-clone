import React from "react";

const Download = () => {
  return (
    <div>
      <h3 className="text-purple-dark font-semibold text-[18px] mb-4 text-center md:text-left">
        Getir'i indir!
      </h3>
      <ul className="flex flex-col items-center md:items-start gap-3">
        <li>
          <a
            href="https://apps.apple.com/us/app/getir-groceries-food-beyond/id995280265"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              alt=""
            />
          </a>
        </li>
        <li>
          <a
            href="https://play.google.com/store/apps/details?id=com.getir&pli=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              alt=""
            />
          </a>
        </li>
        <li>
          <a
            href="https://appgallery.huawei.com/#/app/C100954039"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              alt=""
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Download;
