import { Box, Typography } from "@mui/material";

const Overview = () => {
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
        <Box sx={{display:'flex', backgroundColor:'black', height:'30vh', width:'100vw'}}>
            <Box sx={{width:"60vw", backgroundColor:'red', height:'30vh'}}>
      hello
            </Box>

            <Box sx={{width:"40vw", backgroundColor:'blue', height:'30vh'}}>
There
            </Box>
        </Box>

    </Box>
  );
};

export default Overview;