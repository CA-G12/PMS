import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
  Skeleton,
  Pagination,
  Divider,
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
      component="main"
      sx={{
        flexGrow: 1,
        width: '100%',
        display: 'flex',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <TableContainer>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              sx={{
                fontSize: '22px',
                fontFamily: 'Mulish',
                fontWeight: 'bold',
                marginBottom: '10px',
              }}
            >
              Sales History
            </Typography>
            <Divider sx={{ width: '100%', margin: '0 auto' }} />

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '15px',
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
                    Date
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
                    Quantity
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
                    Price
                  </Typography>{' '}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataRequests.map((row: any) => (
                <TableRow key={Math.random()}>
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
                          {row.Product.name}
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
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.quantity}</TableCell>
                  <TableCell align="center">
                    {row.quantity * row.Product.price} $
                  </TableCell>
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
    </Box>
  );
};
export default SalesHistory;
