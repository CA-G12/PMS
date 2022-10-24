import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const BasicSelect = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Option</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Option"
          onChange={handleChange}
        >
          <MenuItem value={10}>Option1</MenuItem>
          <MenuItem value={20}>Option2</MenuItem>
          <MenuItem value={30}>Option3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicSelect;
