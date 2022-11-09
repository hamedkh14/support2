import { Box, styled } from "@mui/material";

export const NavbarStyle = styled(Box)(({ theme }) => ({
  width: "200px",
  [theme.breakpoints.down("md")]: {
    height: `100vh`,
    position: "absolute",
    top: 0,
    left: 0,
  },
  [theme.breakpoints.up("md")]: {
    height: `calc(100vh - ${theme.spacing(4)})`,
  },
  backgroundColor: "red",
}));
