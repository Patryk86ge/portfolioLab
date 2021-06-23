import React from "react";
import Strip from "./Strip";

import imgTshirt from "../assets/image/Icon-1.svg";
import imgBag from "../assets/image/Icon-2.svg";
import imgMagnifier from "../assets/image/Icon-3.svg";
import imgCyrkel from "../assets/image/Icon-4.svg";

import "../assets/scss/elements/simpleStep.scss";

const SimpleStep = () => {
  return (
      <section id="simpleStep" className="simple_Step">
        <Strip text="Wystarczą 4 proste kroki" />
        <div className="grid-container">
          <div className="simple_StepBox">
            <img src={imgTshirt} alt="Bag" />
            <p className="simple_StepText">Wybierz rzeczy</p>
            <div className="simple_StepLine"/>
            <p className="simple_StepText">ubrania, zabawki, sprzęt i inne</p>
          </div>
          <div className="simple_StepBox">
            <img src={imgBag} alt="Bag" />
            <p className="simple_StepText">Spakuj je</p>
            <div className="simple_StepLine"/>
            <p className="simple_StepText">skorzystaj z worków na śmieci</p>
          </div>
          <div className="simple_StepBox">
            <img src={imgMagnifier} alt="Magnifier" />
            <p className="simple_StepText">Zdecyduj komu chcesz pomóc</p>
            <div className="simple_StepLine"/>
            <p className="simple_StepText">wybierz zaufane miejsce</p>
          </div>
          <div className="simple_StepBox">
            <img src={imgCyrkel} alt="cyrkle" />
            <p className="simple_StepText">Zamów kuriera</p>
            <div className="simple_StepLine"></div>
            <p className="simple_StepText">
              kurier przyjedzie w dogodnym terminie
            </p>
          </div>
        </div>
      </section>
  );
};

export default SimpleStep;
