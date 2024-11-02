import React from "react";

const Button = ({ count, handleClick }) => {
  return (
    <button
      className="border border-black w-[50px] h-[30px] rounded-md bg-grey-500 m-1"
      onClick={handleClick}
    >
      {count}
    </button>
  );
};

export default Button;
