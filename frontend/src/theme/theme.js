import { orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: 'rtl',
  palette: {
    mode: "dark",
    primary: {
      main: '#EC625F'
    },
    secondary: {
      main: orange[500],
    },
    background: {
      bgMain: "#1F1F1F",
      secondary: "#121212",
      
      // bgMain: "#393E46",
      // secondary: "#222831",
    },
    border: {
      primary: '#383838'
    }
  },
});

export default theme;
