import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  useTheme,
} from "@mui/material";
import React from "react";

function NavbarItem({ icon: Icon, text, selecting }) {
  const ListItemButtonStyle = styled(ListItemButton)(({ theme }) => ({
    color: theme.palette.text.secondary,
    borderRadius: "5px",
    background: "none",
    marginTop: "5px",
    "&.Mui-selected": {
      backgroundColor: theme.palette.action.selected,
      borderLeft: `3px solid ${theme.palette.primary.main}`,
      color: theme.palette.text.primary,
    },
    "&:hover": {
      backgroundColor: theme.palette.action.selected,
    },
  }));

  const theme = useTheme();
  return (
    <ListItem disablePadding>
      <ListItemButtonStyle selected={selecting}>
        <ListItemIcon>
          <Icon
            sx={{
              color: selecting
                ? theme.palette.text.primary
                : theme.palette.text.secondary,
            }}
          />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButtonStyle>
    </ListItem>
  );
}

export default NavbarItem;
