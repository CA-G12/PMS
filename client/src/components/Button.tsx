import React from 'react';
import { Button } from '@mui/material';
import { ButtonComponentType } from '../utils';

const ButtonComponent: React.FC<ButtonComponentType> = ({
  text,
  sendUserData,
}) => (
  <Button
    sx={{
      backgroundColor: '#83B239',
      color: 'white',
      borderRadius: '24px',
      width: '115px',
      marginBottom: '20px',
    }}
    onClick={sendUserData}
  >
    {text}
  </Button>
);

export default ButtonComponent;
