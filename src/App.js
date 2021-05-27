import React from 'react';
import { ThemeProvider } from "emotion-theming"

export const theme = {
  color: {
    primary: 'orange',
    secondary: 'royalblue',
  },
  'lightgreen': 'green'
};

const App = ({ title }) => (
  <ThemeProvider theme={theme}>
    <div>{title}</div>
  </ThemeProvider>
);

export default App;
