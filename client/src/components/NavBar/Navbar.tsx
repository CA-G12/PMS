import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, List, ListItem, ListItemText } from '@mui/material';
import PharmacyNavbar from './PharmacyNavbar';
import UserNavbar from './UserNavbar';
import Logo from '../../assets/logo.png';
import './Navbar.css';
import { authContext } from '../../context/authContext';

const Navbar = () => {
  const {
    authData: { role },
  } = useContext(authContext);

  const navigationMenu = ['Home', 'Pharmacies', 'Products', 'Contact Us'];

  return (
    <AppBar>
      <img alt="logo" src={Logo} width="150px" />
      <List sx={{ display: 'flex', flexDirection: 'row' }}>
        {navigationMenu.map((menu) => (
          <Link to={`/${menu.toLowerCase()}`} key={menu}>
            <ListItem>
              <ListItemText primary={menu} />
            </ListItem>
          </Link>
        ))}
      </List>
      {role === 'user' ? <UserNavbar /> : <PharmacyNavbar />}
    </AppBar>
  );
};

export default Navbar;
