import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Skeleton,
  Pagination,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import image31 from '../../assets/image31.png';
import empty from '../../assets/no-data.png';
import SalesPopUp from '../../components/pharmacy/AddSalesPopup';

const SalesHistory = () => {
  const [dataRequests, setDataRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [numOfSales, setNumOfSales] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const {
          data: {
            SalesHistory: { rows, count },
          },
        } = await axios.get(`/pharmacy/${id}/sales?page=${pageNum}`);
        setDataRequests(rows);
        setNumOfSales(count);
      } catch (err) {
        setError('Something went wrong.');
      } finally {
        setLoading(false);
      }
    })();
  });

  if (error) {
    return (
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        Something went wrong
      </Box>
    );
  }

  if (dataRequests.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img width="40%" alt="No Data" src={empty} />
      </Box>
    );
  }

  return loading ? (
    <Box sx={{ width: '53vw', marginTop: '50px' }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  ) : (
    <Box
      sx={{
        margin: '6rem 5%',
        borderRadius: '5px',
        width: '100%',
      }}
    >
      <TableContainer component={Paper}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 10px',
          }}
        >
          <Typography
            sx={{
              fontSize: '30px',
              padding: '10px',
            }}
          >
            Sales History
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <SalesPopUp />
          </Box>
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
                <TableCell align="left">{row.Product.price} $</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        sx={{
          margin: '5rem 0',
          marginLeft: '2rem',
        }}
        count={Math.ceil(numOfSales / 5)}
        color="primary"
        page={pageNum}
        onChange={(event: React.ChangeEvent<unknown>, page: number) => {
          setPageNum(page);
        }}
      />
    </Box>
  );
};
export default SalesHistory;
