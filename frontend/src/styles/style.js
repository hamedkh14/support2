import { Box, styled } from "@mui/material";

export const NavbarStyle = styled(Box)(({ theme }) => ({
  width: "250px",
  [theme.breakpoints.down("md")]: {
    position: "absolute",
    top: 0,
    left: 0,
  },
}));

export const ContentStyle = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.background.secondary,
  width: '100%',
  borderRadius: '30px',
  boxShadow: theme.shadows[2],
  padding: '0 25px'
}));

export const NavbarLogoStyle = styled(Box)(({theme}) => ({
  gap: '10px',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: `1px solid ${theme.palette.border.primary}`,

  // Logo icon
  '& .MuiTypography-body1': {
    backgroundColor: theme.palette.primary.main,
    width: '35px',
    height: '35px',
    color: theme.palette.text.primary,
    fontSize: '35px',
    fontFamily: 'englogo',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    borderRadius: '4px',
  },

  // Logo text
  '& .MuiTypography-body2': {
    color: theme.palette.text.primary,
    fontSize: '25px',
    // fontFamily: 'englogo',
  }
}));
