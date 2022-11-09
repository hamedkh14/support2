import React from "react";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import Navbar from "../components/Navbar";
import Content from "../components/Content";

function Dashboard() {
  const theme = useTheme();

  console.log(useMediaQuery(theme.breakpoints.up("lg")));
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.bgMain,
          width: "100%",
          height: "100vh",
          [theme.breakpoints.down("md")]: {
            padding: `${theme.spacing(2)}`,
          },
          [theme.breakpoints.up("md")]: {
            padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
          },
        }}
      >
        <Stack direction="row" spacing={2}>
          <Navbar />
          <Content />
        </Stack>
      </Box>
    </>
  );
}

export default Dashboard;
