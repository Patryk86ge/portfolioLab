import React from "react";
import NavBar from "./NavBar";
import StripBtn from "../assets/button/StripBtn";
import imgStyle from "../assets/image/Decoration.svg";
import bgHeader from "../assets/image/Home-Hero-Image.jpg";
import "../assets/scss/elements/header.scss";
import SEO from './SEO'

const Header = () => {
  return (
    <>
      <SEO title = 'home page'/>
      <header className="header">
        <NavBar />
        <div className="header_nav">
          <h1 className="header_nag">
            Zacznij pomagać!
            <br />
            Oddaj niechiane rzeczy w zaufane rece
          </h1>
          <div className="header_line">
            {" "}
            <img src={imgStyle} alt="imgStyle" />
          </div>
          <div className="header_box">
            <StripBtn
            text="ODDAJ"
            txt="RZECZY"
            path="/login" />
            <StripBtn
            text="ZORGANIZUJ"
            txt="ZBIÓRKĘ"
            path="/login" />
          </div>
        </div>
        <img className='bgHeader' src={bgHeader}/>
      </header>
    </>
  );
};

export default Header;
