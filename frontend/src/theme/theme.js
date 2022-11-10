import { orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import yekan from "../fonts/Yekan.woff";

const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: "#EC625F",
    },
    secondary: {
      main: "#94A3B8",
    },
    background: {
      bgMain: "#161b22",
      secondary: "#0D1117",
    },
    border: {
      primary: "#21262d",
    },
    text: {
      secondary: "#94A3B8",
    },
  },
  typography: {
    fontFamily: ["yekan"].join(","),
  },
});

export default theme;
