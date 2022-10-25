import { Box, Typography } from '@mui/material';
import AllAdminPharmasis from './AllAdminPharmasis/AdminAllPharmasis';

const Pharmacies = () => {
  const drawerWidth = 240;
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)`, md: '' },
      }}
    >
      <Typography paragraph>
        <AllAdminPharmasis />
      </Typography>
    </Box>
  );
};

export default Pharmacies;
