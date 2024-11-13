import React from "react";
import HeroSection from "../components/Hero/HeroSection";
import Categories from "../components/Categories/Categories";
import MobileApp from "../components/MobileApp/MobileApp";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Categories />
      <MobileApp />
      <Footer />
    </div>
  );
};

export default Home;
