import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import GetirYemek from "./pages/GetirYemek";
import GetirBüyük from "./pages/GetirBüyük";
import GetirSu from "./pages/GetirSu";
import GetirÇarşı from "./pages/GetirÇarşı";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import ChangeLanguage from "./components/Header/Language/ChangeLanguage";
import Login from "./components/Header/Login/Login";
import Register from "./components/Header/Register/Register";

function App() {
  const { languageHandler, loginHandler, registerHandler } =
    useContext(GlobalContext);
  return (
    <div className="App">
      <Header />
      <div className="mt-[45px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yemek" element={<GetirYemek />} />
          <Route path="/büyük" element={<GetirBüyük />} />
          <Route path="/su" element={<GetirSu />} />
          <Route path="/çarşı" element={<GetirÇarşı />} />
        </Routes>
      </div>
      {languageHandler && <ChangeLanguage />}
      {loginHandler && <Login />}
      {registerHandler && <Register />}
    </div>
  );
}

export default App;
