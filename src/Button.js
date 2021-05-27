import React from "react";

const Button = () => {
  return (
    <button
      css={(theme)=> ({
        backgroundColor: 'hotpink',
        '&:hover': {
          color: theme.secondary,
        },
      })}
    ></button>
  );
};

export default Button;
