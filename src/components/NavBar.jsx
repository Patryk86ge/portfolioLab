import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/elements/navBar.scss";

function NavBar() {
  const [show, setShow] = useState(true);
  return (
    <nav className="nav">
      <div className="nav_menu">
        <div className="login">
          <Link to="/login">Zaloguj</Link>
          <Link className='login_border' to="/login">Załóż Konto</Link>
        </div>
        <div className={show ? "menu" : "menu__show"}>
          <ul className="menu_list">
            <Link className="list list_start" to="/">
              Start
            </Link>
            <Link className = "list"
            to = "/simpleStep" >
              O co Chodzi?
            </Link>
            <Link className="list" to="/">
              O nas
            </Link>
            <Link className="list" to="/">
              Fundacja i organizacja
            </Link>
            <Link className="list" to="/">
              Kontakt
            </Link>
          </ul>
        </div>
        <button className="hamburger" onClick={() => setShow(!show)}></button>
      </div>
    </nav>
  );
}

export default NavBar;
