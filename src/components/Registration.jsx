import React from "react";
import { NavHashLink } from "react-router-hash-link";
import Strip from "./Strip";
import NavBar from "./NavBar";
import InputCustom from "../assets/InputCustom/InputCustom";
import "../assets/scss/elements/login.scss";

const Registration = () => {
  return (
    <>
      <NavBar />
      <div className="login_strip">
        <Strip text="Zaloguj się" />
      </div>
      <section className="login_form">
        <div className="container">
          <p></p>
          <div className="login_box">
            <div className="login_input">
              <InputCustom
                text="Email"
                type = "Email"
                name = "Email"
              />
              <InputCustom text="Hasło" type="password" name='password'/>
              <InputCustom text="Powtórz Hasło" type="password" name="passwordRep "/>
            </div>
            <div className="login_btn">
              <button>
                <NavHashLink
                  to="/Registration"
                  activeClassName="selected"
                  className="list"
                >
                  Załóż konto
                </NavHashLink>
              </button>
              <button>
                <NavHashLink
                  activeClassName="selected"
                  className="list"
                  to="/Login"
                >
                  zaloguj się
                </NavHashLink>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
