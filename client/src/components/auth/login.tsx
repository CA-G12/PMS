import React, { useState } from 'react';
import swal from 'sweetalert';
import { Box, FormLabel, Input, Typography } from '@mui/material';
import 'typeface-mulish';

import { useNavigate, Link } from 'react-router-dom';
import ButtonComponent from '../Button';
import Navbar from '../NavBar/Navbar';
import { useAuth } from '../../context/authContext';
import ScrollToTopOnMount from '../../utils/ScrollToTop';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  type sendUserDataType = () => void;

  const sendUserData: sendUserDataType = async () => {
    if (email && password) {
      const { role, id, status } = await login(email, password);
      if (role === 'admin') navigate('/admin/overview');
      if (role === 'pharmacy') {
        if (status === 'Pending') {
          navigate('/pharmacy/pending');
        } else navigate(`/pharmacy/${id}/overview`);
      }
    } else {
      swal('In order to login, all of these inputs have to be filled');
    }
  };

  return (
    <>
      <ScrollToTopOnMount />
      <Navbar />
      <Box
        sx={{
          width: '50vw',
          backgroundColor: '#fdfdfd',
          boxShadow: '0px 0px 14px #0000001c',
          margin: '0 auto',
          marginBottom: '50px',
          marginTop: '130px',
          height: '60vh',
        }}
      >
        <Typography
          variant="h5"
          fontFamily="mulish"
          fontWeight={800}
          margin="40px"
          pt="20px"
          display="flex"
          justifyContent="center"
          sx={{ color: '#617BAD', textShadow: '6px 3px 14px #6D85B3' }}
        >
          login
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '20px',
              margin: '20px 150px',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <FormLabel
                sx={{
                  fontFamily: 'Mulish',
                  fontWeight: 'bold',
                  color: '#000000a6',
                }}
              >
                Email
              </FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  padding: '4px 0 5px',
                  border: '1px solid #00000026',
                  height: '45px',
                  marginTop: '10px  ',
                }}
              />
            </Box>
          </Box>
          {/* start password */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '20px',
              margin: '0 150px',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <FormLabel
                sx={{
                  fontFamily: 'Mulish',
                  fontWeight: 'bold',
                  color: '#000000a6',
                }}
              >
                Password
              </FormLabel>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  padding: '4px 0 5px',
                  border: '1px solid #00000026',
                  height: '45px',
                  marginTop: '10px  ',
                }}
                type="password"
              />
            </Box>
          </Box>
          {/* end password */}
          <Typography variant="caption" fontFamily="mulish" marginLeft="150px">
            Don`t have an account?{' '}
            <span style={{ color: '#83B239' }}>
              {' '}
              <Link to="/signup">Sign up</Link>
            </span>
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: '20px',
          }}
        >
          <ButtonComponent text="login" sendUserData={sendUserData} />
        </Box>
      </Box>
    </>
  );
};

export default Login;
