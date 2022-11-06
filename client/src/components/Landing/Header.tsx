import { useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { Box, Paper, Typography } from '@mui/material';
import 'typeface-mulish';

import Navbar from '../NavBar/Navbar';
import './style.css';

const Header = () => {
  useEffect(() => {});
  return (
    <Paper>
      <Navbar />
      <Box className="headline" fontFamily="mulish">
        <Slide>
          <Typography variant="h1" className="title">
            A comprehensive and <br />
            integrated system
          </Typography>
        </Slide>
        <Fade delay={1e3} cascade damping={0.1} direction="down">
          <Typography paragraph>
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
