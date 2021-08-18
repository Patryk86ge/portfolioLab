
import React from "react";
import { NavHashLink } from "react-router-hash-link";
import Strip from './Strip'


const card = () => {
  return (
    <>
      <Strip text="Komu pomagamy?" />
      <section
          id="whoweHelp"
          className="WhoweHelp">
        <div className="container">
          <div className="WhoweHelp__btnBox">
            <NavHashLink
                to="/"
                activeClassName="selected">
              Fundacjom
            </NavHashLink>
            <NavHashLink
                to="/Organization"
                activeClassName="selected">
              <p>Organizacjom</p>
              <p>pozarządowym</p>
            </NavHashLink>
            <NavHashLink
                to="/Collection"
                activeClassName="selected">
              <p>Lokalnym</p>
              <p>zbiórkom</p>
            </NavHashLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default card;
