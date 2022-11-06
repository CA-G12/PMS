import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, List, ListItem, ListItemText } from '@mui/material';
import PharmacyNavbar from './PharmacyNavbar';
import UserNavbar from './UserNavbar';
import Logo from '../../assets/logo.png';
import './Navbar.css';
import { useAuth } from '../../context/authContext';

const Navbar = () => {
  const {
    user: { role },
  } = useAuth();
  const [scroll, setScroll] = useState<boolean>(false);

  const navigationMenu = ['Home', 'Pharmacies', 'Products', 'Contact Us'];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <AppBar className={scroll ? 'fixed' : 'first-nav'}>
      <img alt="logo" src={Logo} width="150px" />
      <List sx={{ display: 'flex', flexDirection: 'row' }}>
        {navigationMenu.map((menu) => (
          <Link
            to={`/${menu.toLowerCase()}`}
            key={menu}
            style={{ textDecoration: 'none' }}
          >
            <ListItem>
              <ListItemText primary={menu} color="white" />
            </ListItem>
          </Link>
        ))}
      </List>
      {role === 'user' ? <UserNavbar /> : <PharmacyNavbar />}
    </AppBar>
  );
};

export default Navbar;
