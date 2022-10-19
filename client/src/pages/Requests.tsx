import { Box, Typography } from "@mui/material";
import React from "react";

const Requests = () => {
  const drawerWidth = 240;
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)`, md: "" },
      }}
    >
      <Typography paragraph>Requests</Typography>
    </Box>
  );
};

export default Requests;
