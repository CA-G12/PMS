import { Box, Typography } from "@mui/material";

const Products = () => {
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
      <Typography paragraph>Products</Typography>
    </Box>
  );
};

export default Products;
