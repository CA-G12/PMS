import { AccountCircle, Notifications } from '@mui/icons-material';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

const PharmacyNavbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const {
    user: { role, id },
  } = useAuth();
  const { logout } = useAuth();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = async () => {
    await logout();
    setAnchorEl(null);
    navigate('/');
  };

  const showProfile = () =>
    role === 'admin'
      ? navigate('/admin/overview')
      : navigate(`/pharmacy/${id}`);

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
