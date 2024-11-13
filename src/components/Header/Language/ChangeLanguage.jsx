import Button from "../../Button/Button";
import React, { useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GlobalContext } from "../../../context/GlobalContext";

const ChangeLanguage = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [selectedLanguage, setSelectedLanguage] = useState("tr");
  const [initialLanguage, setInitialLanguage] = useState("tr");
  const { languageHandler, setLanguageHandler } = useContext(GlobalContext);

  const handleSelect = (language) => {
    setSelectedLanguage(language);
  };

  const isButtonDisabled = selectedLanguage === initialLanguage;

  const closeModal = () => {
    setLanguageHandler(false);
  };

  return (
    <div
      className="w-full h-screen z-50 bg-black bg-opacity-50 fixed top-0 left-0"
      onClick={closeModal}
    >
      <div
        className="bg-white py-10 px-5 max-w-[400px] w-full mx-auto sm:mx-0 rounded-lg absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="w-full text-center text-purple-dark font-semibold">
          Dil Değiştir
        </h2>
        <ul className="flex flex-col mt-4">
          <li
            className="flex items-center gap-3 border py-3 px-5 rounded-t-lg cursor-pointer"
            onClick={() => handleSelect("tr")}
          >
            <span>
              <input
                className="w-[22px] h-[22px] accent-purple-light"
                type="radio"
                name="language"
                checked={selectedLanguage === "tr"}
                onChange={() => handleSelect("tr")}
              />
            </span>
            <span className="flex items-center justify-between w-full">
              <p>Türkçe</p>
              <img
                width={18}
                height={13}
                src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/tr.svg"
                alt=""
              />
            </span>
          </li>
          <li
            className="flex items-center gap-3 border py-3 px-5 rounded-b-lg cursor-pointer"
            onClick={() => handleSelect("en")}
          >
            <span>
              <input
                className="w-[22px] h-[22px] accent-purple-light"
                type="radio"
                name="language"
                checked={selectedLanguage === "en"}
                onChange={() => handleSelect("en")}
                label={"Telefon Numarası"}
                errorMessage={"Lütfen telefon numarasını gir."}
              />
            </span>
            <span className="flex items-center justify-between w-full">
              <p>English</p>
              <img
                width={18}
                height={13}
                src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/gb.svg"
                alt=""
              />
            </span>
          </li>
        </ul>
        <Button disabled={isButtonDisabled}>Güncelle</Button>
        <div
          onClick={() => setLanguageHandler(!languageHandler)}
          className="bg-[#f3f3f4] p-2 rounded-lg cursor-pointer absolute top-5 right-3"
        >
          <IoMdClose className=" text-xl" />
        </div>
      </div>
    </div>
  );
};

export default ChangeLanguage;
