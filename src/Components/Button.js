import React from "react";

const Button = ({onAdd}) => {
  const buttonStyle = {
    backgroundColor: '#94a3b8',
    color: 'black' // Change this to the color you want for the text
  };

  return (
    <button style={buttonStyle} className="btn btn-square" onClick={() => onAdd()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>
  );
};

export default Button;
