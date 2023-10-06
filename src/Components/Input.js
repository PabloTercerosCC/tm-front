import React from "react";

const Input = ({ text, update }) => {

  return <input type="text" placeholder="Type here" value={text} onChange={(e) => update(e.target.value)}/>;
};

export default Input;
