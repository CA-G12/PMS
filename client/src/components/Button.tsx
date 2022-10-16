import { Button } from '@mui/material';
import React from 'react';

type ButtonComponentProps ={
  text: string,
  sendUserData: () => void
}

const ButtonComponent:React.FC<ButtonComponentProps> = ({ text, sendUserData }) => (
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
