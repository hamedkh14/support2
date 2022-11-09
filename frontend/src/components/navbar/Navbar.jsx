import { List } from "@mui/material";
import React from "react";
import { NavbarStyle } from "../../styles/style";
import NavbarLogo from "./NavbarLogo";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import ContactPhoneTwoToneIcon from "@mui/icons-material/ContactPhoneTwoTone";
import FeaturedPlayListTwoToneIcon from "@mui/icons-material/FeaturedPlayListTwoTone";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <>
      <NavbarStyle>
        <NavbarLogo />
        <List disablePadding>
          <NavbarItem
            icon={DashboardTwoToneIcon}
            text="مدیریت تمدیدها"
            selecting={false}
          />
          <NavbarItem
            icon={ContactPhoneTwoToneIcon}
            text="لیست مشتریان"
            selecting={false}
          />
          <NavbarItem
            icon={FeaturedPlayListTwoToneIcon}
            text="لیست تمدید"
            selecting={false}
          />
        </List>
      </NavbarStyle>
    </>
  );
}

export default Navbar;
