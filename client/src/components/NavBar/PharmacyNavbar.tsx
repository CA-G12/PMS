import { AccountCircle, Notifications } from '@mui/icons-material';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../context/authContext';

const PharmacyNavbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const {
    authData: { role },
  } = useContext(authContext);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = async () => setAnchorEl(null);

  const showProfile = () =>
    role === 'admin' ? navigate('/admin') : navigate('/profile');

  return (
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
        <MenuItem onClick={showProfile}> Show Dashboard </MenuItem>
        <MenuItem onClick={handleClose}> Log Out </MenuItem>
      </Menu>
    </Box>
  );
};

export default PharmacyNavbar;
