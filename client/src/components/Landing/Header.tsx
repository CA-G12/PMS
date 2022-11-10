import { Fade, Slide } from 'react-awesome-reveal';
import { Box, Paper, Typography } from '@mui/material';
import 'typeface-mulish';

import Navbar from '../NavBar/Navbar';
import header from '../../assets/landing.png';

const Header = () => {
  const style = {
    backgroundImage: `url(${header})`,
    backgroundSize: 'cover',
    height: '100vh',
    borderRadius: '0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  };
  return (
    <Paper sx={style}>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '20px',
          margin: '40px',
          color: 'white',
          marginTop: '220px',
          marginLeft: '70px',
        }}
        fontFamily="mulish"
      >
        <Slide>
          <Typography
            variant="h1"
            sx={{ color: 'white', fontWeight: '800', fontSize: '50px' }}
          >
            A comprehensive and <br />
            integrated system
          </Typography>
        </Slide>
        <Fade delay={1e3} cascade damping={0.1} direction="down">
          <Typography
            paragraph
            sx={{ maxWidth: '400px', color: '#ffffff99', fontSize: '18px' }}
          >
            This system contributes to improving and sustainably promoting the
            health situation. This system contributes to improving and
            sustainably promoting the health situation
          </Typography>
        </Fade>
      </Box>
    </Paper>
  );
};

export default Header;
