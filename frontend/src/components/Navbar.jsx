import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { NavbarStyle } from "../styles/style";
import NavbarLogo from "./NavbarLogo";

function Navbar() {
  return (
    <>
      <NavbarStyle>
        <NavbarLogo />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </NavbarStyle>
    </>
  );
}

export default Navbar;
