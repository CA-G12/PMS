import { Box, Typography } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import AllAdminPharmasis from './AdminAllPharmasis';
import './dashboard.css';

const Pharmacies = () => {
  const drawerWidth = 240;
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        width: { sm: `calc(100% - ${drawerWidth}px)`, md: '' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        paragraph
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
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
