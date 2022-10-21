import * as React from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';
import 'typeface-mulish';

const InProgress = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '25vw',
    height: '50vh',
    bgcolor: 'background.paper',
    borderRadius: '3px',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <>
      <Button onClick={handleOpen}>Request</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <img
            alt="in progress"
            src="https://cdn.dribbble.com/users/508543/screenshots/7122590/media/7b5c4f53467d3f586a06ec39f821b084.gif"
            style={{ height: '90%' }}
          />
          <Typography
            variant="h6"
            fontFamily="mulish"
            fontWeight={800}
            margin="30px"
            display="flex"
            justifyContent="center"
            sx={{ color: '#16546e', textShadow: '6px 3px 14px #16546e' }}
            marginTop='0'
          >
            Your request is in Progress
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default InProgress;
