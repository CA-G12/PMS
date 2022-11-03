import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import image31 from '../../assets/image31.png';

const SalesHistory = () => {
  const [dataRequests, setDataRequests] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/pharmacy/sales');
        setDataRequests(res.data.SalesHistory.rows);
      } catch (err) {
        setError('Somethig went wrong.');
      }
    })();
  }, []);
  if (error) {
    return <Box>{error}</Box>;
  }
  return (
    <Box
      sx={{
        margin: '6rem 5%',
        borderRadius: '5px',
        width: '100%',
      }}
    >
      <TableContainer component={Paper}>
        <Box>
          <Typography
            sx={{
              fontSize: '30px',
              padding: '10px',
            }}
          >
            Sales History
          </Typography>
        </Box>
        <Table
          sx={{ Width: '100%', margin: '1rem 0%' }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">Product Name</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Quantity</TableCell>
              <TableCell align="left">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataRequests.map((row: any) => (
              <TableRow>
                <TableCell align="left" component="th" scope="row">
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                      <img src={image31} alt="Logo" />
                    </Box>
                    <Box>{row.Product.name}</Box>
                  </Box>
                </TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{row.quantity}</TableCell>
                <TableCell align="left">{row.Product.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default SalesHistory;
