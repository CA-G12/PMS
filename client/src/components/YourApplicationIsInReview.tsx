import { Box, Typography } from '@mui/material';
import loading from '../assets/Loading-pana 1.png';

const YourApplicationIsInReview = () => (
  <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      margin: '0',
      alignItems: 'center',
      padding: '0px',
      flexDirection: 'column',
    }}
  >
    <Box
      sx={{
        width: '650px',
        paddingRight: '200px',
      }}
    >
      <img src={loading} alt="Loading..." />
    </Box>
    <Typography
      sx={{
        fontSize: '30px',
        textAlign: 'center',
        height: '100px',
      }}
    >
      Your application is in review
    </Typography>
  </Box>
);
export default YourApplicationIsInReview;
