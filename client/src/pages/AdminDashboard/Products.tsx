import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  // Pagination,
  CircularProgress,
  Divider,
} from '@mui/material';
import image31 from '../../assets/image31.png';

const Products = () => {
  const [adminProducts, setAdminProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const drawerWidth = 240;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/admin/products');
        setAdminProducts(res.data.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', margin: '20rem 30rem' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        width: { sm: `calc(100% - ${drawerWidth}px)`, md: '' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          marginTop: '100px',
          borderRadius: '5px',
          width: '80%',
        }}
      >
        <TableContainer component={Paper}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              sx={{
                fontSize: '25px',
                fontFamily: 'Mulish',
                fontWeight: 'bold',
                marginLeft: '43px',
                marginBottom: '20px',
                marginTop: '15px',
              }}
            >
              All Products
            </Typography>
            <Divider sx={{ width: '90%', margin: '0 auto' }} />
          </Box>
          <Table
            sx={{ minWidth: 650, marginLeft: '0px', marginTop: '0px' }}
            aria-label="simple table"
          >
            <TableHead sx={{ padding: '2px 30px' }}>
              <TableRow sx={{ padding: '2px 30px' }}>
                <TableCell align="center" sx={{ padding: '16px 67px' }}>
                  {' '}
                  <Typography
                    sx={{
                      backgroundColor: '#80808036',
                      borderRadius: '7px',
                      padding: '3px',
                      fontSize: '15px',
                      fontWeight: 'bold',
                    }}
                  >
                    Product Name
                  </Typography>{' '}
                </TableCell>
                <TableCell align="center">
                  {' '}
                  <Typography
                    sx={{
                      backgroundColor: '#80808036',
                      borderRadius: '7px',
                      padding: '3px',
                      fontSize: '15px',
                      fontWeight: 'bold',
                    }}
                  >
                    In Pharmacies
                  </Typography>{' '}
                </TableCell>
                <TableCell align="center">
                  {' '}
                  <Typography
                    sx={{
                      backgroundColor: '#80808036',
                      borderRadius: '7px',
                      padding: '3px',
                      fontSize: '15px',
                      fontWeight: 'bold',
                    }}
                  >
                    In Stock
                  </Typography>{' '}
                </TableCell>
                <TableCell align="center">
                  {' '}
                  <Typography
                    sx={{
                      backgroundColor: '#80808036',
                      borderRadius: '7px',
                      padding: '3px',
                      fontSize: '15px',
                      fontWeight: 'bold',
                    }}
                  >
                    Expired
                  </Typography>{' '}
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {adminProducts.map((row: any) => (
                <TableRow
                  key={row.id}
                  sx={{
                    '&:last-child td, &:last-child th': {
                      border: 0,
                    },
                  }}
                >
                  <TableCell
                    align="center"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      fontWeight: 'bold',
                      fontSize: '15px',
                      padding: '0',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <img src={image31} alt="Logo" />
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                        }}
                      >
                        <Box
                          sx={{
                            fontWeight: 'bold',
                          }}
                        >
                          {row.name}
                        </Box>
                        <Box
                          sx={{
                            opacity: 0.7,
                            fontSize: '11px',
                            fontWeight: '700',
                          }}
                        >
                          54862053025
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell align="center">
                    {row.AdminProducts.length === 1
                      ? row.AdminProducts.map((e: any) => e.in_stock_quantity)
                      : 0}
                  </TableCell>
                  <TableCell align="center">
                    {row.ProductPharmacies.length === 1
                      ? row.ProductPharmacies.map((e: any) => e.quantity)
                      : 0}
                  </TableCell>
                  <TableCell align="center">
                    {row.AdminProducts.length === 1
                      ? row.AdminProducts.map((e: any) => e.expired_quantity)
                      : 0}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
export default Products;
