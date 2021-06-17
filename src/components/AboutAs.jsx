import React from "react";
import "../assets/scss/elements/aboutAs.scss";
import people from "../assets/image/People.jpg";
import Signature from "../assets/image/Signature.svg";
import imgStyle from "../assets/image/Decoration.svg";

const AboutAs = () => {
  return (
    <section
        id="aboutAs"
        className="about_ass">
        <div className="about_box">
          <h1 className="about_nag">O nas</h1>
          <div className="about_line">
            <img src={imgStyle} alt="line" />
          </div>
          <p>
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek
            lentil turnip greens parsnip.
          </p>
          <div className="about_signature">
            <img src={Signature} alt="Signature" />
          </div>
        </div>
        <div className="about_img">
          <img src={people} alt="people" />
        </div>
    </section>
  );
};

export default AboutAs;
