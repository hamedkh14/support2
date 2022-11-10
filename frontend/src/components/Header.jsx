import { alpha, InputBase, Toolbar, useTheme } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";

function Header() {
  const theme = useTheme();
  const styles = {
    toolbar: {
      borderBottom: `1px solid ${theme.palette.border.primary}`,
    },
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.secondary.main, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.secondary.main, 0.25),
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "20ch",
        "&:focus": {
          width: "35ch",
        },
      },
    },
  }));

  return (
    <>
      <Toolbar sx={styles.toolbar}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="جستجو"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Toolbar>
    </>
  );
}

export default Header;
