import { AppBar, Box, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import Logo from '../../assets/logo.png';
import ButtonComponent from '../Button';
import './Navbar.css'
import PharmacyNavbar from './PharmacyNavbar';
import UserNavbar from './UserNavbar';
type NavBarProps ={
    role : string
}
const Navbar:React.FC<NavBarProps> = ({role}) => {
    return (
        <AppBar>
            <img alt='logo' src={Logo} width='150px' />
            <List>
                <ListItem>
                    <ListItemText primary='Home' />
                </ListItem>
                <ListItem>
                    <ListItemText primary='Pharmacies' />
                </ListItem>
                <ListItem>
                    <ListItemText primary='Products' />
                </ListItem>
                <ListItem>
                    <ListItemText primary='Contact Us' />
                </ListItem>
            </List>
            {
                role === 'user' ?
                <UserNavbar /> : <PharmacyNavbar />
            }
        </AppBar>
    )
}

export default Navbar;
