import React, { useEffect, useState, useCallback } from 'react';
import {
  Table,
  Pagination,
  Divider,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LongMenu } from '../../components/Extra';
import image31 from '../../assets/image31.png';

const options = ['Opened', 'Closed'];

const AllAdminPharmasis = () => {
  const [data, setData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [numRequests, setNumOfRequests] = useState(14);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getPharmacies = useCallback(async () => {
    const {
      data: {
        data: { rows, count },
      },
    } = await axios.get(`/admin/pharmacies?page=${pageNum}`);

    return { rows, count };
  }, [pageNum]);

  const updatePharmacyStatus = (status: string, pharmacyId: number) =>
    axios.put(`/admin/pharmacy/${pharmacyId}`, {
      status,
    });

  const setStatus = async (status: string, pharmacyId: number) => {
    try {
      setLoading(true);
      await updatePharmacyStatus(status, pharmacyId);
      const { rows, count } = await getPharmacies();
      setData(rows);
      setNumOfRequests(count);
      toast.success('updated status', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error('cant not update status', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { rows, count } = await getPharmacies();
        setData(rows);
        setNumOfRequests(count);
        setLoading(false);
      } catch (err) {
        setError('Somethig went wrong.');
        setLoading(false);
      }
    })();
  }, [getPharmacies]);

  if (loading) {
    return <Box>loading</Box>;
  }

  if (error) {
    return <Box>{error}</Box>;
  }

  return (
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
            All Pharmacies
          </Typography>
          <Divider sx={{ width: '90%', margin: '0 auto' }} />
        </Box>
        <Table
          sx={{ minWidth: 650, marginLeft: '0px', marginTop: '0px' }}
          aria-label="simple table"
        >
          <TableHead sx={{ padding: '9px' }}>
            <TableRow sx={{ padding: '9px' }}>
              <TableCell
                align="center"
                sx={{ padding: '6px', marginLeft: '15px' }}
              >
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
                  Pharmacy Name
                </Typography>{' '}
              </TableCell>
              <TableCell align="center" sx={{ padding: '6px' }}>
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
                  Pharmacy Owner
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
                  Pharmacy Location
                </Typography>{' '}
              </TableCell>
              <TableCell align="center" sx={{ padding: '9px' }}>
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
                  Pharmacy Status
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
            {data.map((row: any) => (
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
                          textAlign: 'left',
                          marginBottom: '5px',
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

                <TableCell align="center" sx={{ padding: '0' }}>
                  {row.owner_name}
                </TableCell>
                <TableCell align="center" sx={{ padding: '0' }}>
                  {row.location}
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
  );
};
export default AllAdminPharmasis;
