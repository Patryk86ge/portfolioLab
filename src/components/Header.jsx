import React from 'react'
import NavBar from './NavBar'
import { Link } from "react-router-dom";
import imgStyle from "../assets/image/Decoration.svg";
import '../assets/scss/elements/header.scss'


const Header = () => {
  return (
    <>

      <header className="header">
      <NavBar/>
            <div className="header_nav">
              <h1 className="header_nag">
                Zacznij pomagać!
                <br />
                Oddaj niechiane rzeczy w zaufane rece
              </h1>
              <div className="header_line"> <img src={imgStyle} alt="imgStyle" />
              </div>
              <div className="header_box">
                <div className="header_btn">
                  <Link to="/">
                    ODDAJ
                    <br />
                    RZECZY
                  </Link>
                </div>
                <div className="header_btn">
                  <Link to="/">
                    ZORGANIZUJ
                    <br />
                    ZBIURKE
                  </Link>
                </div>
              </div>
            </div>
</header>
    </>
  );
}

export default Header
