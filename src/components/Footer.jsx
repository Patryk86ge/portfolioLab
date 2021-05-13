import React from "react";
import "../assets/scss/elements/footer.scss";
import facebook from "../assets/image/Facebook.svg";
import Instagram from "../assets/image/Instagram.svg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <p>Copyright by Coders Lab</p>
        <div className="footer_ico">
          <a href="/">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="/">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
