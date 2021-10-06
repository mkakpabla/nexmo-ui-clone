import React from "react";
import "./Input.scss";

type InputProps = {
  type: string;
  name: string;
  label: string;
};

export const Input: React.FC<InputProps> = ({ type = "text", name, label }) => {
  

  return (
    <div  className="input__container">
      <input
        className="input__control"
        type={type}
        id={name}
        name={name}
        placeholder={label}
      />
      <label className="input__label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};
