import React, { useContext } from "react";
import ReactFlagsSelect from "react-flags-select";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { GlobalContext } from "../../context/GlobalContext";

const HeroSection = () => {
  const { phones, selected, setSelected } = useContext(GlobalContext);
  return (
    <div className="container-custom h-[500px] flex items-center justify-center md:justify-between w-full bg-purple-light">
      <div className=" gap-10 hidden md:flex md:flex-col">
        <img
          width={180}
          height={180}
          src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
          alt=""
        />
        <h1 className="text-4xl text-white font-semibold">
          Dakikalar içinde kapında
        </h1>
      </div>
      <div className="bg-white w-full md:w-[400px] px-4 py-5 rounded-md flex flex-col items-center">
        <h5 className="text-purple-dark font-semibold">
          Giriş yap veya kayıt ol
        </h5>
        <div className="flex items-start mt-3 gap-2">
          <ReactFlagsSelect
            countries={Object.keys(phones)}
            customLabels={phones}
            onSelect={(code) => setSelected(code)}
            selected={selected}
            selectedSize={15}
            optionsSize={15}
          />
          <Input label={"Telefon Numarası"} errorMessage={"Lütfen telefon numarasını gir"} />
        </div>
        <Button>Telefon numarası ile devam et</Button>
      </div>
    </div>
  );
};

export default HeroSection;
