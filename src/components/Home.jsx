import React from "react";
import Header from "./Header";
import ThreeColumns from "./ThreeColumns";
import SimpleStep from "./SimpleStep";
import StripBtn from "../assets/button/StripBtn";
import AboutAs from "./AboutAs";
import WhoWeHelp from "./WhoWeHelp";
import Contact from "./Contact";
import Footer from "./Footer";
import logout from './Logout'
import {useAuth} from "../contexts/AuthContext";


const Home = () => {
    const {currentUser} = useAuth();
  return (
    <>
      <Header />
      <ThreeColumns />
      <SimpleStep />
        {currentUser ?  <StripBtn
            text="ODDAJ"
            txt="RZECZY"
            path="/oddaj-rzeczy"
        /> :  <StripBtn
            text="ODDAJ"
            txt="RZECZY"
            path="/login"
        /> }
      <AboutAs />
      <WhoWeHelp />
      <Contact />
      <Footer />
        <logout/>
    </>
  );
};

export default Home;
