import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";

const drawerWidth = 240;

type NavBarProps = {
  handleDrawerToggle: () => void;
};
const NavBar: React.FC<NavBarProps> = ({ handleDrawerToggle }) => (
  <AppBar
    position="fixed"
    sx={{
      width: { sm: `calc(100% - ${drawerWidth}px)` },
      ml: { sm: `${drawerWidth}px` },
      backgroundColor: "#F9F9F9",
      color: "black",
    }}
  >
    <Toolbar>
      <IconButton
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon color="disabled" fontSize="large" />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        Dashboard
      </Typography>
      <Box sx={{ display: "flex", gap: "13px", color: "grey !important" }}>
        <NotificationsIcon fontSize="large" />
        <AccountCircleIcon fontSize="large" />
      </Box>
    </Toolbar>
  </AppBar>
);

export default NavBar;
