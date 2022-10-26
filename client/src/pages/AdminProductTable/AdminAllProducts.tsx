import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useState, useEffect } from 'react';
import image31 from '../../assets/image31.png';
// admin/products

const AdminAllProducts = () => {
  const [adminProducts, setAdminProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/admin/products');
        setAdminProducts(res.data.data);
      } catch (err) {
        setError('Somethig went wrong.');
      }
    })();
  }, []);

  if (error) {
    return <Box>{error}</Box>;
  }

  return (
    <Box>
      <TableContainer component={Paper}>
        <Box>
          <Typography
            sx={{
              fontSize: '30px',
              padding: '10px',
            }}
          >
            All Products
          </Typography>
          <hr />
        </Box>
        <Table
          sx={{ minWidth: 650, marginLeft: '0px', marginTop: '0px' }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Products Name</TableCell>
              <TableCell align="center">Number of Products in Stock </TableCell>
              <TableCell align="center">
                Number of Products in Pharmisis{' '}
              </TableCell>
              <TableCell align="center">Number of Expired Products</TableCell>
            </TableRow>
          </TableHead>

          <TableBody
            sx={{
              marginTop: '50px',
            }}
          >
            {adminProducts.map((row: any) => (
              <TableRow
                key={row.id}
                sx={{
                  '&:last-child td, &:last-child th': {
                    border: 0,
                    dispaly: 'flex',
                  },
                }}
              >
                <TableCell align="left" component="th" scope="row">
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                      <img src={image31} alt="Logo" />
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          fontWeight: 'bold',
                        }}
                      >
                        {row.name}
                      </Box>
                      <br />
                      <Box
                        sx={{
                          opacity: 0.7,
                        }}
                      >
                        151515151551
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
  );
};
export default AdminAllProducts;
