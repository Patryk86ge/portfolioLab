import React from 'react'
import '../assets/scss/elements/strip.scss'
import imgStyle from "../assets/image/Decoration.svg";


const Strip = (props) => {
  return (
    <div className="strip container">
      <div className="Decoration">
        <h1>{props.text}</h1>
        <img src={imgStyle} alt="Decoration" />
      </div>
    </div>
  );
}

export default Strip
