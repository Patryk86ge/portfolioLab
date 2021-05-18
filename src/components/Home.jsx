import React from "react";
import Header from "./Header";
import ThreeColumns from "./ThreeColumns";
import SimpleStep from "./SimpleStep";
import StripBtn from "../assets/button/StripBtn";
import AboutAs from "./AboutAs";
import WhoWeHelp from "./WhoWeHelp";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <ThreeColumns />
      <SimpleStep />
      <StripBtn
      text="ODDAJ"
      txt="RZECZY"
      path="/login" />
      <AboutAs />
      <WhoWeHelp />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
