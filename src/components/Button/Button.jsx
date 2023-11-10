import React from "react";

import "./button.scss";

const Button = ({ name, type, className, onClick, disable }) => (
  <button type={type} className={`${type} ${className}`} onClick={onClick} disable={disable}>
    {name}
  </button>
);

export default Button;
