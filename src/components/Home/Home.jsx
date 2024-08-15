import React from "react";
import HeroSection from "../../SubComponents/HeroSection";
import TopVillas from "../../SubComponents/TopVillas";
import Regions from "../../SubComponents/Regions";
import Host from "../../SubComponents/Host";
import About from "../../SubComponents/About";
import Contact from "../../SubComponents/Contact";


const Home = () => {
  return (
    <>
      <article className="page">
        <HeroSection/>
        <TopVillas/>
        <Regions/>
        <Host/>
        <About/>
        <Contact/>
      </article>
    </>
  );
};

export default Home;
