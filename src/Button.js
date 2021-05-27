import React from "react";

const Button = () => {
  return (
    <button
      css={(theme)=> ({
        color: "royalblue",
        '&:hover': {
          color: theme['lightgreen']
        },
      })}
    ></button>
  );
};

export default Button;
