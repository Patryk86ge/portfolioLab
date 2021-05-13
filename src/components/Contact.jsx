import React from 'react'
import "../assets/scss/elements/contact.scss";
import Strip from "./Strip";

import contactForm from '../assets/image/Background-Contact-Form.jpg'

const Contact = () => {
  return (
    <section className="contact">
      <div class="grid-container">
        <div className="contact_img">
          <img src={contactForm} alt="blanket" />
        </div>
        <div className="contact_form">
          <Strip text="Skontaktuj się z nami" />
          <form className="contact_form" action="">
            <input type="text" />
            <input type="email" />
            <textarea />
            <button></button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact
