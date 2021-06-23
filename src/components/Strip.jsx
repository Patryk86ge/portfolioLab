import React from 'react'
import '../assets/scss/elements/strip.scss'
import imgStyle from "../assets/image/Decoration.svg";


const Strip = (props) => {
  return (
    <div className="strip">
      <div className="Decoration">
        <h1>{props.text}</h1>
          <h1>{props.txt}</h1>
        <img src={imgStyle} alt="Decoration" />
          <h1>{props.textAdd}</h1>
      </div>
    </div>
  );
}

export default Strip
