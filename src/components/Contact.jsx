import React from "react";
import "../assets/scss/elements/contact.scss";
import Strip from "./Strip";
import InputCustom from "../assets/InputCustom/InputCustom";

import contactForm from "../assets/image/Background-Contact-Form.jpg";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact_img">
          <img src={contactForm} alt="blanket" />
        </div>
        <div className="contact_form">
          <Strip text="Skontaktuj się z nami" />
          <form
            className="form"
            action="mailto:kokot.patryk@gmail.com"
            method="post"
          >
            <div className="form_input">
              <div>
                {" "}
                <InputCustom text="pisz swoje imię" type="text" name="NAME" />
              </div>
              <div>
                <InputCustom text="Wpisz swój email" type="email" name="email" />
              </div>
            </div>
            <label>Wpisz swoją wiadomość</label>
            <textarea rows="3" name="form_textarea" />
            <button className="form_btn">Wyslij</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
