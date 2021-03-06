import React, {useState} from "react";
import {NavHashLink} from "react-router-hash-link";
import "../assets/scss/elements/navBar.scss";


function NavBar() {
    const [show, setShow] = useState(true);
    return (
        <>
            <div className="login">
                <NavHashLink
                    className='nav_login'
                    to="/Login"
                    activeClassName="login_border"
                >
                    Zaloguj
                </NavHashLink>
                <NavHashLink
                    className='nav_login'
                    activeClassName="login_border"
                    to="/Signup"
                >
                    Załóż Konto
                </NavHashLink>
                <button className="hamburger" onClick={() => setShow(!show)}/>
            </div>
            <nav className="nav">
                <div className="nav_menu">
                    <div className={show ? "menu" : "menu__show"}>
                        <div className="menu_list">
                            <NavHashLink
                                className="list"
                                activeClassName="selected"
                                to="/"
                                onClick={() => setShow(true)}
                            >
                                Start
                            </NavHashLink>
                            <NavHashLink
                                activeClassName="selected"
                                className="list"
                                to="/#simpleStep"
                                onClick={() => setShow(true)}
                            >
                                O co Chodzi?
                            </NavHashLink>
                            <NavHashLink
                                className="list"
                                activeClassName="selected"
                                to="/#aboutAs"
                                onClick={() => setShow(true)}
                            >
                                O nas
                            </NavHashLink>
                            <NavHashLink
                                className="list"
                                activeClassName="selected"
                                to="/#whoweHelp"
                                onClick={() => setShow(true)}
                            >
                                Fundacja i organizacja
                            </NavHashLink>
                            <NavHashLink
                                className="list"
                                activeClassName="selected"
                                to="/#contact"
                                onClick={() => setShow(true)}
                            >
                                Kontakt
                            </NavHashLink>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    );
}

export default NavBar;
