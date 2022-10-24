import * as React from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import "typeface-mulish";
import "./style.css";

const InProgress = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Request</Button>
      <Modal open={open} onClose={handleClose}>
        <Box className="boxModal">
          <img
            alt="in progress"
            src="https://cdn.dribbble.com/users/508543/screenshots/7122590/media/7b5c4f53467d3f586a06ec39f821b084.gif"
            style={{ height: "80%" }}
          />
          <Typography
            variant="h6"
            fontFamily="mulish"
            fontWeight={800}
            margin="30px"
            display="flex"
            justifyContent="center"
            sx={{ color: "#16546e", textShadow: "6px 3px 14px #16546e" }}
            marginTop="0"
          >
            Your request is in Progress
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default InProgress;
