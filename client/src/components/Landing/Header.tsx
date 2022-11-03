import { Box, Paper, Typography } from '@mui/material';
import 'typeface-mulish';
import Navbar from '../NavBar/Navbar';
import './style.css';

const Header = () => (
  <Paper>
    <Navbar />
    <Box className="headline" fontFamily="mulish">
      <Typography variant="h1" className="title">
        A comprehensive and <br />
        integrated system
      </Typography>
      <Typography paragraph>
        This system contributes to improving and sustainably promoting the
        health situation. This system contributes to improving and sustainably
        promoting the health situation
      </Typography>
    </Box>
  </Paper>
);

export default Header;
