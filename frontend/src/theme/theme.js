import { orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: orange[500],
    },
    background: {
      bgMain: "#393E46",
      secondary: "#222831",
    },
  },
});

export default theme;
