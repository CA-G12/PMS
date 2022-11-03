import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';

const SalesPopUp = () => {
  const [open, setOpen] = React.useState(false);
  const [counter, setCounter] = React.useState(0);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const addOne = () => {
    setCounter(counter + 1);
  };
  const incrmentOne = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          backgroundColor: '#88B441',
          borderRadius: '200px',
        }}
      >
        <AddIcon
          sx={{
            color: 'white',
          }}
        />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Button
          sx={{
            alignItems: 'end',
          }}
          onClick={handleClose}
        >
          <CloseIcon />
        </Button>
        <TextField
          required
          id="outlined-required"
          label="Product Name"
          sx={{
            margin: '20px',
          }}
        />
        <Box
          sx={{
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <Button
            onClick={addOne}
            sx={{
              fontSize: '20px',
            }}
          >
            {' '}
            +{' '}
          </Button>
          <Box
            sx={{
              textAlign: 'center',
              paddingTop: '5px',
            }}
          >
            {counter}
          </Box>
          <Button
            onClick={incrmentOne}
            sx={{
              fontSize: '20px',
            }}
          >
            {' '}
            -{' '}
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export default SalesPopUp;
