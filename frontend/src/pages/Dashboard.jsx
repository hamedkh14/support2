import React from "react";
import { Box, Stack, useTheme } from "@mui/material";
import Navbar from "../components/Navbar";
import Content from "../components/Content";

function Dashboard() {
  const theme = useTheme();

  // Styles main
  const styles = {
    box: {
      backgroundColor: theme.palette.background.bgMain,
      width: "100%",
      height: "100vh",
      boxSizing: 'border-box',
      [theme.breakpoints.down("md")]: {
        padding: `${theme.spacing(2)}`,
      },
      [theme.breakpoints.up("md")]: {
        padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
      },
    },
    stack: {
      [theme.breakpoints.down("md")]: {
        height: `calc(100vh - ${theme.spacing(4)})`
      },
      [theme.breakpoints.up("md")]: {
        height: `calc(100vh - ${theme.spacing(4)})`,
      },
    }
  };

  return (
    <>
      <Box sx={styles.box}>
        <Stack direction="row" spacing={2} sx={styles.stack}>
          <Navbar />
          <Content />
        </Stack>
      </Box>
    </>
  );
}

export default Dashboard;
