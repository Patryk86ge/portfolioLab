import React from "react";
import { Link } from "react-router-dom";
import Strip from './Strip'


const card = () => {
  return (
    <>
<Strip text = "Komu pomagamy?" / >
    <section id="whoweHelp" className="WhoweHelp">
      <div className="container">
        <div className="WhoweHelp__btnBox">
          <Link to="/">Fundacjom</Link>
          <Link to = "/Organization" >
            Organizacjom
            <br />
            pozarządowym
          </Link>
          <Link to = "/Collection" >
            Lokalnym
            <br />
            zbiórkom
          </Link>
        </div>
      </div>
    </section>
      </>
  );
};

export default card;
