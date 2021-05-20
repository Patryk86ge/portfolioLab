import React from 'react'
import { NavHashLink } from "react-router-hash-link";
import "./stripBtn.scss";

const StripBtn = (props) => {
  return (
    <div className="Strip_btn">
      <div className="btn">
        <NavHashLink to={props.path}>
          <p>{props.text}</p>
          <p>{props.txt}</p>
        </NavHashLink>
      </div>
    </div>
  );
}

export default StripBtn
