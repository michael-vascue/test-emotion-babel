import React from "react";
import { withTheme } from "emotion-theming";

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

export default withTheme(Button);
