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

  const navigationMenu = [
    { menuItem: 'Home', link: '' },
    { menuItem: 'Pharmacies', link: 'pharmacies' },
    { menuItem: 'Products', link: 'products' },
  ];

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
      <Link to="/">
        <img alt="logo" src={Logo} width="150px" />
      </Link>
      <List sx={{ display: 'flex', flexDirection: 'row' }}>
        {navigationMenu.map(({ menuItem, link }) => (
          <Link
            to={`/${link}`}
            key={menuItem}
            style={{ textDecoration: 'none' }}
          >
            <ListItem>
              <ListItemText
                primary={menuItem}
                sx={{
                  color: '#9bd342!important',
                }}
                id="navbarItem"
              />
            </ListItem>
          </Link>
        ))}
      </List>
      {role === 'user' ? <UserNavbar /> : <PharmacyNavbar />}
    </AppBar>
  );
};

export default Navbar;
