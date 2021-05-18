import React from 'react'
import { Link } from "react-router-dom";
import "./stripBtn.scss";

const StripBtn = (props) => {
  return (
    <div className="Strip_btn">
      <div className="btn">
        <Link to = {props.path} >
          {props.text}<br/>{props.txt}
        </Link>
      </div>
    </div>
  );
}

export default StripBtn
