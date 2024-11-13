import Button from "../../Button/Button";
import React, { useContext, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { GlobalContext } from "../../../context/GlobalContext";
import ReactFlagsSelect from "react-flags-select";
import Input from "../../Input/Input";

const Login = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const closeModal = () => {
    setLoginHandler(false);
  };

  const { setLoginHandler, loginHandler, phones, selected, setSelected } =
    useContext(GlobalContext);

  return (
    <div
      onClick={() => closeModal()}
      className="w-full h-screen z-50 bg-black bg-opacity-50 fixed top-0 left-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full md:w-[400px] px-4 py-5 rounded-md flex flex-col items-center absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
      >
        <h5 className="text-purple-dark font-semibold">
          Giriş yap veya kayıt ol
        </h5>
        <div className="flex items-start mt-5 gap-2">
          <ReactFlagsSelect
            countries={Object.keys(phones)}
            customLabels={phones}
            onSelect={(code) => setSelected(code)}
            selected={selected}
            selectedSize={15}
            optionsSize={15}
          />
          <Input label={"Telefon Numarası"} errorMessage={"Lütfen telefon numarasını gir."} />
        </div>
        <Button>Telefon numarası ile devam et</Button>
        <p className="text-[14px] text-gray-text mt-4">
          Kişisel verilerine dair Aydınlatma Metni için{" "}
          <a
            href=""
            target="_blank"
            className="text-purple-light underline font-bold"
          >
            tıklayınız
          </a>
        </p>
        <p className="text-[12px] text-gray-text mt-10">
          Hala kayıt olmadın mı?{" "}
          <span className="text-purple-dark font-bold cursor-pointer">
            Kayıt Ol
          </span>
        </p>
        <div
          onClick={() => setLoginHandler(!loginHandler)}
          className="bg-[#f3f3f4] p-2 rounded-lg cursor-pointer absolute top-5 right-3"
        >
          <IoMdClose className=" text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Login;
