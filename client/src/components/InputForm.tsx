import { Box, Input, FormLabel } from '@mui/material';
import React from 'react';

type InputFormProps = {
  label: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  type: string;
};

const InputForm: React.FC<InputFormProps> = ({
  label,
  state,
  setState,
  type,
}) => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <FormLabel
      sx={{
        fontFamily: 'Mulish',
        fontWeight: 'bold',
        color: '#000000a6',
      }}
    >
      {label}
    </FormLabel>
    <Input
      value={state}
      onChange={(e) => setState(e.target.value)}
      sx={{
        padding: '4px 0 5px',
        border: '1px solid #00000026',
        height: '45px',
        width: '270px',
        marginTop: '10px  ',
      }}
      type={type}
    />
  </Box>
);

export default InputForm;
