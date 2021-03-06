import React from "react";
import "./input.scss";

const InputCustom = (props) => {
  return (
    <>
      <label>{props.text}</label>
      <input
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        id={props.id}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default InputCustom;
