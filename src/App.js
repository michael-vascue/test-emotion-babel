import React from 'react';
import { ThemeProvider } from "emotion-theming"

const theme = {
  color: {
    primary: 'orange',
    secondary: 'royalblue',
    // other brand colours
  },
  // other properties such font, spacing etc.
};

const App = ({ title }) => (
  <ThemeProvider theme={theme}>
    <div>{title}</div>
  </ThemeProvider>
);

export default App;
