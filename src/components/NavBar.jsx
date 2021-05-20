import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import "../assets/scss/elements/navBar.scss";

function NavBar() {
  const [show, setShow] = useState(true);
  return (
    <nav className="nav">
      <div className="nav_menu">
        <div className="login">
          <span></span>
          <NavHashLink
            to="/Login"
            activeClassName="login_border"
          >
            Zaloguj
          </NavHashLink>
          <NavHashLink
            activeClassName="login_border"
            to="/Registration"
          >
            Załóż Konto
          </NavHashLink>
        </div>
        <div className={show ? "menu" : "menu__show"}>
          <div className="menu_list">
            <NavHashLink className="list" activeClassName="selected" to="/">
              Start
            </NavHashLink>
            <NavHashLink
              activeClassName="selected"
              className="list"
              to="/#simpleStep"
            >
              O co Chodzi?
            </NavHashLink>
            <NavHashLink
              className="list"
              activeClassName="selected"
              to="/#aboutAs"
            >
              O nas
            </NavHashLink>
            <NavHashLink
              className="list"
              activeClassName="selected"
              to="/#whoweHelp"
            >
              Fundacja i organizacja
            </NavHashLink>
            <NavHashLink
              className="list"
              activeClassName="selected"
              to="/#contact"
            >
              Kontakt
            </NavHashLink>
          </div>
        </div>
        <button className="hamburger" onClick={() => setShow(!show)}></button>
      </div>
    </nav>
  );
}

export default NavBar;
