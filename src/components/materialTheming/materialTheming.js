import { createMuiTheme } from "@material-ui/core";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#42FB81"
    },
    typography: {
      fontFamily: '"Poppins", sans-serif',
      color: "white"
    },
    text: {
      primary: "#fff",
      hint: "#434F5B"
    },
    background: {
      paper: "#192128"
    }
  }
});

export { darkTheme };
