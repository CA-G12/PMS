import { Box, Typography } from '@mui/material';

const Overview = () => {
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
      <Typography paragraph>Overview</Typography>
    </Box>
  );
};

export default Overview;
