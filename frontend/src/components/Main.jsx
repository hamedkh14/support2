import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";
import { MainStyle } from "../styles/style";
import Contents from "./Contents";
import Header from "./Header";

function Main() {
  const theme = useTheme();
  const styles = {
    main: {
      backgroundColor: theme.palette.background.secondary,
      width: "100%",
      borderRadius: "30px",
      boxShadow: theme.shadows[2],
      padding: "0 25px",
      color: theme.palette.text.primary,
      position: "relative",
      display: "flex",
      flexDirection: "column",
    },
  };
  return (
    <>
      <Box sx={styles.main}>
        <Header />
        <Contents />
      </Box>
    </>
  );
}

export default Main;
