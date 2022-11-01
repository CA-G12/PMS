import '../style.css';
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
import React, { useCallback, useEffect, useState } from 'react';
import { Pagination, CircularProgress } from '@mui/material';
import swal from 'sweetalert';
import CustomizedInputBase from '../Extra/Search';
import LongMenu from '../Extra/Options';
import image31 from '../../assets/image31.png';
import dataLoadingError from '../../assets/dataLoadingError.png';

type row = {
  id: number;
  status: string;
  Pharmacy: { name: string };
  Product: { name: string };
};
const options = ['Approved', 'Rejected'];
const AllRequests = () => {
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

  const updateMedicineRequests = async (status: string, pharmacyId: number) =>
    axios.put(`/admin/requests/${pharmacyId}`, {
      status,
    });

  const setStatus = async (status: string, pharmacyId: number) => {
    try {
      setLoading(true);

      await updateMedicineRequests(status, pharmacyId);
      await getMedicineRequests();

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
            All Requests
          </Typography>
          <hr />
        </Box>
        <Table
          sx={{ Width: '100%', margin: '1rem 0%' }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <CustomizedInputBase />
              </TableCell>
              <TableCell align="left"> Product Name </TableCell>
              <TableCell align="left"> request Status </TableCell>
              <TableCell align="left"> Options</TableCell>
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
                <TableCell align="left" component="th" scope="row">
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                      <img src={image31} alt="Logo" />
                    </Box>
                    <Box>{row.Pharmacy.name}</Box>
                  </Box>
                </TableCell>

                <TableCell align="left">{row.Product.name}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left">
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
        sx={{ marginTop: '2rem' }}
      />
    </Box>
  );
};
export default AllRequests;