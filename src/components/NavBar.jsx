import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Scroll from 'react-scroll';
import "../assets/scss/elements/navBar.scss";



function NavBar() {
  const [show, setShow] = useState(true);
  // let Link = Scroll.Link;
  return (
    <nav className="nav">
      <div className="nav_menu">
        <div className="login">
          <Link to="/login">Zaloguj</Link>
          <Link className='login_border' to="/login">Załóż Konto</Link>
        </div>
        <div className={show ? "menu" : "menu__show"}>
          <div className="menu_list">
            <Scroll.Link
            className="list list_start"
            to="/"
            activeStyle={{border: '1px solid #3C3C3C'}}
            >
              Start
            </Scroll.Link>
            <Scroll.Link
            className = "list"
            to = "simpleStep"
            activeStyle={{border: '1px solid #3C3C3C'}}
            >
              O co Chodzi?
            </Scroll.Link>
            <Scroll.Link
            className="list"
            to = "aboutAs"
            activeStyle={{border: '1px solid #3C3C3C'}}
            >
              O nas
            </Scroll.Link>
            <Scroll.Link
            className="list"
            to = "whoweHelp"
            activeStyle={{border: '1px solid #3C3C3C'}}
            >
              Fundacja i organizacja
            </Scroll.Link>
            <Scroll.Link
            className="list"
            to = "contact"
            activeStyle={{border: '1px solid #3C3C3C'}}
            >
              Kontakt
            </Scroll.Link>
          </div>
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
