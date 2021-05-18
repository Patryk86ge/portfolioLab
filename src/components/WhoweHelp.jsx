import React from "react";
import { Link } from "react-router-dom";
import Strip from "./Strip";
import "../assets/scss/elements/whoweHelp.scss";

const WhoWeHelp = () => {
  return (
    <section
    id="whoweHelp"
    className="WhoweHelp">
      <Strip text="Komu pomagamy?" />
      <div className="container">
        <div
        className="WhoweHelp__btnBox">
          <Link
          to="/"
          // activeStyle={{ border: "1px solid #3C3C3C" }}
          >
            Fundacjom
          </Link>
          <Link
          to="/"
          // activeStyle={{ border: "1px solid #3C3C3C" }}
          >
            Organizacjom
            <br />
            pozarządowym
          </Link>
          <Link
          to="/"
          // activeStyle={{ border: "1px solid #3C3C3C" }}
          >
            Lokalnym
            <br />
            zbiórkom
          </Link>
        </div>
        <p className="WhoweHelp_text">
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
          współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
          czego potrzebują.
        </p>
        <div className="WhoweHelp_box">
          <div className="WhoweHelp_boxText">
            <p>
              Fundacja “Dbam o Zdrowie”
              <br />
              Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
              życiowej.
            </p>
            <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
          </div>
          <div className="WhoweHelp_boxText">
            <p>
              Fundacja “Dla dzieci”
              <br />
              Cel i misja: Pomoc dzieciom z ubogich rodzin.
            </p>
            <p>ubrania, meble, zabawki</p>
          </div>
          <div className="WhoweHelp_boxText">
            <p>
              Fundacja “Bez domu”
              <br />
              Cel i misja: Pomoc dla osób nie posiadających miejsca
              zamieszkania.
            </p>
            <p>ubrania, jedzenie, ciepłe koce</p>
          </div>
        </div>
        <div className="WhoweHelp_link">
          <Link to="/" activeStyle={{ border: "1px solid #3C3C3C" }}>
            1
          </Link>
          <Link to="/" activeStyle={{ border: "1px solid #3C3C3C" }}>
            2
          </Link>
          <Link to="/" activeStyle={{ border: "1px solid #3C3C3C" }}>
            3
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
