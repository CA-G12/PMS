import React, { useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import { Box, FormLabel, Input, Typography } from '@mui/material';
import 'typeface-mulish';
import ButtonComponent from '../Button';
import InputForm from '../InputForm';
import Navbar from '../NavBar/Navbar';

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

  type sendUserDataType = () => void;

  const sendUserData: sendUserDataType = async () => {
    try {
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

          await axios.post('/auth/signup', userData);
        } else
          throw new Error('Password and confirm password have to be matched');
      } else {
        throw new Error(
          'In order to sign up, all of these inputs have to be filled'
        );
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        swal(err.response?.data?.msg);
      } else if (err instanceof Error) {
        swal(err.message);
      }
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
          marginTop: '75px',
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
            />
            <InputForm label="OwnerID" state={ownerID} setState={setOwnerID} />
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
              />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <InputForm
                label="License Number"
                state={licenseNumber}
                setState={setLicenseNumber}
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
              />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <InputForm
                label="Phone Number"
                state={phoneNumber}
                setState={setPhoneNumber}
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
              />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <InputForm
                label="Confirm Password"
                state={confirmPassword}
                setState={setConfirmPassword}
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
            <span style={{ color: '#83B239' }}>Login</span>
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
