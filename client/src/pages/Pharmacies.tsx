import { Box, Typography } from '@mui/material';
import { ToastContainer } from 'react-toastify';
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
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <AllAdminPharmasis />
      </Typography>
    </Box>
  );
};

export default Pharmacies;
