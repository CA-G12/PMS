import React from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  IconButton,
  Toolbar,
  Typography,
  AppBar,
  Menu,
  MenuItem,
} from '@mui/material';
import { AccountCircle, Notifications } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';

type NavBarProps = {
  handleDrawerToggle: () => void;
};

const NavBar: React.FC<NavBarProps> = ({ handleDrawerToggle }) => {
  const drawerWidth = 240;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = async () => {
    try {
      await axios.post('/logout');
      navigate('/');
    } catch (err) {
      swal('Something went wrong when trying to log out');
    }
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: '#F9F9F9',
        color: 'black',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Dashboard
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '13px',
            color: 'grey !important',
            alignItems: 'center',
          }}
        >
          <Notifications fontSize="large" />
          <IconButton
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <AccountCircle fontSize="large" />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Log Out</MenuItem>
            <MenuItem onClick={() => navigate('/')}>Home</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
