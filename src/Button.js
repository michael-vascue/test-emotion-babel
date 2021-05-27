import React from "react";

const Button = () => {
  return (
    <button
      css={{
        backgroundColor: "hotpink",
        "&:hover": {
          color: "lightgreen"
        }
      }}
    ></button>
  );
};

export default Button;
