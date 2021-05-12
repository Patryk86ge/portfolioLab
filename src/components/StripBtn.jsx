import React from 'react'
import { Link } from "react-router-dom";
import "../assets/scss/elements/stripBtn.scss";

const StripBtn = () => {
  return (
    <section className="Strip_btn">
      <div className="btn">
        <Link to="/">
          ODDAJ
          <br />
          RZECZY
        </Link>
      </div>
    </section>
  );
}

export default StripBtn
