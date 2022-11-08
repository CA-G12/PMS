import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import 'typeface-mulish';

import './style.css';

const Footer = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#043CAA',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: '40px 0px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          sx={{
            fontFamily: 'mulish',
            fontSize: '18px',
            fontWeight: '800',
            color: '#83B239',
          }}
        >
          Sign Up for our site
        </Typography>
        <Typography
          paragraph
          sx={{
            color: 'white',
            fontFamily: 'mulish',
            maxWidth: '400px',
            marginTop: '20px',
          }}
        >
          Get to know updates in the field of medicine and know how often our
          stores are stocked
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          sx={{
            color: '#83B239',
            fontFamily: 'mulish',
            fontSize: '18px',
            fontWeight: '800',
          }}
        >
          Email
        </Typography>
        <input
          type="email"
          placeholder="Enter Your Email"
          style={{
            height: '31px',
            width: '320px',
            borderRadius: '20px',
            border: 'none',
            padding: '5px 30px',
            marginTop: '19px',
            outline: 'none',
          }}
        />
      </Box>
    </Box>

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          sx={{
            color: '#83B239',
            fontFamily: 'mulish',
            fontSize: '18px',
            fontWeight: '800',
          }}
        >
          Pharmacy System
        </Typography>
        <Typography
          paragraph
          sx={{
            color: 'white',
            fontFamily: 'mulish',
            maxWidth: '400px',
            marginTop: '20px',
            marginBottom: '15px',
          }}
        >
          Your favorite online pharmacy store. We offer onsite delivery and your
          health is our priority
        </Typography>
      </Box>
      <Box>
        <List sx={{ display: 'flex', flexDirection: 'column' }}>
          <ListItem className="footerItem">
            <ListItemText primary="Quick Links" />
          </ListItem>
          <ListItem className="footerItem">
            <ListItemText primary="Contact Us" />
          </ListItem>
          <ListItem className="footerItem">
            <ListItemText primary="About us" />
          </ListItem>
          <ListItem className="footerItem">
            <ListItemText primary="Pharmacies" />
          </ListItem>
        </List>
        <List sx={{ display: 'flex', flexDirection: 'column' }}>
          <ListItem className="footerItem">
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem className="footerItem">
            <ListItemText primary="Delivery" />
          </ListItem>
          <ListItem className="footerItem">
            <ListItemText primary="Purchase" />
          </ListItem>
          <ListItem className="footerItem">
            <ListItemText primary="Consultant" />
          </ListItem>
        </List>
        <List sx={{ display: 'flex', flexDirection: 'column' }}>
          <ListItem className="footerItem">
            <ListItemText primary="Social Media" />
          </ListItem>
          <ListItem className="footerItem">
            <ListItemText primary="Facebook" />
          </ListItem>
          <ListItem className="footerItem">
            <ListItemText primary="Instagram" />
          </ListItem>
          <ListItem className="footerItem">
            <ListItemText primary="Twitter" />
          </ListItem>
        </List>
      </Box>
    </Box>
    <Typography
      sx={{
        color: 'white',
        textAlign: 'center',
        fontSize: '17px',
        fontWeight: '500',
        marginBottom: '20px',
      }}
    >
      Developed by Team 10 @ GSG
    </Typography>
  </Box>
);

export default Footer;
