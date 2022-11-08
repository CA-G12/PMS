import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
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
  Pagination,
  CircularProgress,
  Divider,
} from '@mui/material';
import { LongMenu } from '../../components/Extra';
import image31 from '../../assets/image31.png';
import dataLoadingError from '../../assets/dataLoadingError.png';
import 'typeface-mulish';

type row = {
  id: number;
  status: string;
  Pharmacy: { name: string };
  Product: { name: string };
};
const options = ['Approved', 'Rejected'];

const Requests = () => {
  const [data, setData] = useState<row[]>([]);
  const [pageNum, setPageNum] = useState(1);
  const [numRequests, setNumOfRequests] = useState(14);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getMedicineRequests = useCallback(async () => {
    const {
      data: {
        data: { rows, count },
      },
    } = await axios.get(`/admin/requests?numOffSet=${pageNum}`);

    return { rows, count };
  }, [pageNum]);

  const updateMedicineRequests = (status: string, pharmacyId: number) =>
    axios.put(`/admin/requests/${pharmacyId}`, {
      status,
    });

  const setStatus = async (status: string, pharmacyId: number) => {
    try {
      setLoading(true);
      await updateMedicineRequests(status, pharmacyId);
      const { rows, count } = await getMedicineRequests();
      setData(rows);
      setNumOfRequests(count);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      swal('Something went wrong');
    }
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { rows, count } = await getMedicineRequests();
        setData(rows);
        setNumOfRequests(count);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError('Something went wrong');
      }
    })();
  }, [getMedicineRequests]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', margin: '20rem 30rem' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          margin: '6rem 5%',
          borderRadius: '5px',
          width: '80%',
        }}
      >
        <img src={dataLoadingError} alt="Logo" />
      </Box>
    );
  }

  const drawerWidth = 240;
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
              All Requests
            </Typography>
            <Divider sx={{ width: '90%', margin: '0 auto' }} />
          </Box>
          <Table
            sx={{ Width: '100%', margin: '1rem 0%' }}
            aria-label="simple table"
          >
            <TableHead sx={{ padding: '2px 30px' }}>
              <TableRow sx={{ padding: '2px 30px' }}>
                <TableCell align="center">
                  <Typography
                    sx={{
                      backgroundColor: '#80808036',
                      borderRadius: '7px',
                      padding: '3px',
                      fontSize: '15px',
                      fontWeight: 'bold',
                    }}
                  >
                    Pharmacy Name
                  </Typography>
                </TableCell>
                <TableCell align="center">
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
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    sx={{
                      backgroundColor: '#80808036',
                      borderRadius: '7px',
                      padding: '3px',
                      fontSize: '15px',
                      fontWeight: 'bold',
                    }}
                  >
                    Request Status
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    sx={{
                      backgroundColor: '#80808036',
                      borderRadius: '7px',
                      padding: '3px',
                      fontSize: '15px',
                      fontWeight: 'bold',
                    }}
                  >
                    Options
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  sx={{
                    '&:last-child td, &:last-child th': {
                      border: 0,
                      dispaly: 'flex',
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
                            textAlign: 'left',
                            marginBottom: '5px',
                          }}
                        >
                          {row.Pharmacy.name}
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

                  <TableCell align="center" sx={{ padding: '0' }}>
                    {row.Product.name}
                  </TableCell>
                  <TableCell align="center" sx={{ padding: '0' }}>
                    {row.status}
                  </TableCell>
                  <TableCell align="center" sx={{ padding: '0' }}>
                    <LongMenu
                      id={row.id}
                      setStatus={(status, PharmacyId) =>
                        setStatus(status, PharmacyId)
                      }
                      options={options}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          count={Math.ceil(numRequests / 7)}
          color="primary"
          page={pageNum}
          onChange={(event: React.ChangeEvent<unknown>, page: number) => {
            setPageNum(page);
          }}
          sx={{
            marginTop: '2rem',
            marginBottom: '60px',
            display: 'flex',
            justifyContent: 'center',
          }}
        />
      </Box>
    </Box>
  );
};

export default Requests;
