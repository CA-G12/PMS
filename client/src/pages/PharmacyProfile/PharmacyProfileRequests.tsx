import React, { useEffect, useState } from 'react';
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
  Pagination,
  CircularProgress,
  Divider,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import LongMenu from '../../components/Extra/Options';
import 'typeface-mulish';
import image31 from '../../assets/image31.png';
import empty from '../../assets/no-data.png';
import AddRequestPopUp from '../../components/pharmacy/AddRequest';

const options = ['cancel'];

const PharmacyProfileRequests = () => {
  const [data, setData] = useState<any>([]);
  const [pageNum, setPageNum] = useState(1);
  const [numRequests, setNumOfRequests] = useState(14);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-shadow
  const { id: pharmacyId } = useParams();

  const updateMedicineRequests = async (status: string, pharmacyId1: number) =>
    axios.put(`/admin/requests/${pharmacyId1}`, {
      status,
    });

  // eslint-disable-next-line no-shadow
  const setStatus = async (status: string, pharmacyId2: number) => {
    try {
      setLoading(true);
      await updateMedicineRequests(status, pharmacyId2);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      swal('Something went wrong');
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const {
          data: {
            data: { rows, count },
          },
        } = await axios.get(`/pharmacy/${pharmacyId}/requests?page=${pageNum}`);
        setData(rows[0].ProductsRequests);
        setNumOfRequests(count);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    })();
  });

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
              All Requests
            </Typography>
            <Divider sx={{ width: '100%', margin: '0 auto' }} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '15px',
            }}
          >
            <AddRequestPopUp />
          </Box>
          {data?.length === 0 ? (
            <Box sx={{ width: '100%', height: '100%' }}>
              <img src={empty} alt="Logo" />
            </Box>
          ) : (
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
                      Request Status
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
                      Options
                    </Typography>{' '}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* eslint-disable-next-line no-shadow */}
                {data.map((row: any) => (
                  <TableRow key={row?.Product?.name}>
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
                            {row?.Product?.name}
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
                      {row?.quantity}
                    </TableCell>
                    <TableCell align="center" sx={{ padding: '0' }}>
                      {' '}
                      {row?.status}
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
          )}
        </TableContainer>

        <Pagination
          count={Math.ceil(numRequests / 7)}
          color="primary"
          page={pageNum}
          onChange={(event: React.ChangeEvent<unknown>, page: number) => {
            setPageNum(page);
          }}
          sx={{ marginTop: '2rem' }}
        />
      </Box>
    </Box>
  );
};

export default PharmacyProfileRequests;
