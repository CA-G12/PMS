import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import swal from 'sweetalert';
import { Box, FormLabel, Input, Typography } from '@mui/material';
import 'typeface-mulish';

import ButtonComponent from '../Button';
import InputForm from '../InputForm';
import Navbar from '../NavBar/Navbar';
import { useAuth } from '../../context/authContext';

const Signup: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [ownerID, setOwnerID] = useState('');
  const [pharmacyName, setPharmacyName] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [pharmacyLocation, setPharmacyLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { signup } = useAuth();
  const navigate = useNavigate();

  type sendUserDataType = () => void;

  const sendUserData: sendUserDataType = async () => {
    if (
      fullName &&
      ownerID &&
      pharmacyName &&
      licenseNumber &&
      pharmacyLocation &&
      phoneNumber &&
      email &&
      password
    ) {
      if (password === confirmPassword) {
        const userData = {
          owner_name: fullName,
          owner_id: ownerID,
          name: pharmacyName,
          license_number: licenseNumber,
          location: pharmacyLocation,
          phone: phoneNumber,
          email,
          password,
          confirmPassword,
        };
        const { id } = await signup(userData);
        navigate(`/pharmacy/${id}/overview`);
      } else swal('Password and confirm password have to be matched');
    } else {
      swal('In order to sign up, all of these inputs have to be filled');
    }
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: '50vw',
          backgroundColor: '#fdfdfd',
          boxShadow: '0px 0px 14px #0000001c',
          margin: '0 auto',
          marginBottom: '50px',
          marginTop: '90px',
          paddingBottom: '20px',
        }}
      >
        <Typography
          variant="h5"
          fontFamily="mulish"
          fontWeight={800}
          margin="40px"
          pt="30px"
          display="flex"
          justifyContent="center"
          sx={{ color: '#617BAD', textShadow: '6px 3px 14px #6D85B3' }}
        >
          Sign up Your Pharmacy
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              marginBottom: '20px',
            }}
          >
            <InputForm
              label="Full Name"
              state={fullName}
              setState={setFullName}
              type="text"
            />
            <InputForm
              label="OwnerID"
              state={ownerID}
              setState={setOwnerID}
              type="number"
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              marginBottom: '20px',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <InputForm
                label="Pharmacy Name"
                state={pharmacyName}
                setState={setPharmacyName}
                type="text"
              />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <InputForm
                label="License Number"
                state={licenseNumber}
                setState={setLicenseNumber}
                type="number"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              marginBottom: '20px',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <InputForm
                label="Pharmacy Location"
                state={pharmacyLocation}
                setState={setPharmacyLocation}
                type="text"
              />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <InputForm
                label="Phone Number"
                state={phoneNumber}
                setState={setPhoneNumber}
                type="number"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '20px',
              marginLeft: '37px',
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
                  width: '94%',
                  marginTop: '10px  ',
                }}
                type="email"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              marginBottom: '5px',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <InputForm
                label="Password"
                state={password}
                setState={setPassword}
                type="password"
              />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <InputForm
                label="Confirm Password"
                state={confirmPassword}
                setState={setConfirmPassword}
                type="password"
              />
            </Box>
          </Box>
          <Typography
            variant="caption"
            display="block"
            fontFamily="mulish"
            marginLeft="35px"
          >
            You already have an account?{' '}
            <span style={{ color: '#83B239' }}>
              {' '}
              <Link to="/login"> Login</Link>
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
          <ButtonComponent text="Sign up" sendUserData={sendUserData} />
        </Box>
      </Box>
    </>
  );
};

export default Signup;
