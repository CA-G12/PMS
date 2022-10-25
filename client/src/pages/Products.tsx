import { Box, Typography } from "@mui/material";
import AdminAllProducts from './AdminProductTable/AdminAllProducts';

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
      <AdminAllProducts />
    </Box>
  );
};

export default Products;
