import React from 'react'
import './input.scss'

const Input = (props) => {
  return (
    <>
      <label>{props.text}</label>
      <input type={props.type} name={props.name} style={{backgroundColor:{props}}} />
    </>
  );
}

export default Input
