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
            <Link
            className="list list_start"
            to="/"
            activeStyle={{border: '1px solid #3C3C3C'}}
            >
              Start
            </Link>
            <Link
            className = "list"
            to = "/simpleStep"
            activeStyle={{border: '1px solid #3C3C3C'}}
            >
              O co Chodzi?
            </Link>
            <Link
            className="list"
            to="/aboutAs"
            activeStyle={{border: '1px solid #3C3C3C'}}
            >
              O nas
            </Link>
            <Link
            className="list"
            to="/"
            activeStyle={{border: '1px solid #3C3C3C'}}
            >
              Fundacja i organizacja
            </Link>
            <Link
            className="list"
            to="/"
            activeStyle={{border: '1px solid #3C3C3C'}}
            >
              Kontakt
            </Link>
          </ul>
        </div>
        <button
        className="hamburger"
        onClick={() => setShow(!show)}
        >
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
