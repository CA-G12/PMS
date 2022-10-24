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
import React, { useEffect, useState } from 'react';
import { Pagination, CircularProgress } from '@mui/material';
import CustomizedInputBase from '../Extra/Search';
import LongMenu from '../Extra/Options';
import image31 from '../../assets/image31.png';

type row = {
  id: number;
  status: string;
  Pharmacy: { name: string };
  Product: { name: string };
};
const fakeData = [
  {
    id: 1,
    status: 'Approved',
    Pharmacy: { name: 'Ahmed Pharmacy 1' },
    Product: { name: 'Ahmed Product 1' },
  },
  {
    id: 2,
    status: 'Approved',
    Pharmacy: { name: 'Ahmed Pharmacy 2' },
    Product: { name: 'Ahmed Product 2' },
  },
  {
    id: 3,
    status: 'Approved',
    Pharmacy: { name: 'Ahmed Pharmacy 3' },
    Product: { name: 'Ahmed Product 3' },
  },
  {
    id: 4,
    status: 'Approved',
    Pharmacy: { name: 'Ahmed Pharmacy 3' },
    Product: { name: 'Ahmed Product 3' },
  },
];

const AllRequests = () => {
  const [data, setData] = useState<row[]>(fakeData);
  const [pageNum, setPageNum] = useState(1);
  const [numRequests, setNumOfRequests] = useState(14);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const {
      data: {
        data: { rows, count },
      },
    } = await axios.get(`/admin/requests?numOffSet=${pageNum}`);
    setData(rows);
    setNumOfRequests(count);
    setLoading(false);
  };
  const setStatus = async (status: string, PharmacyId: number) => {
    await axios.put(`/admin/requests/${PharmacyId}`, {
      status,
    });
    getData();
  };

  useEffect(() => {
    getData();
  }, [pageNum]);
  if (loading && false) {
    return (
      <Box sx={{ display: 'flex', margin: '20rem 30rem' }}>
        <CircularProgress />
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
        <Table sx={{ Width: '100%' }} aria-label="simple table">
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
                    setStatus={(status, PharmacyId) => setStatus(status, PharmacyId)}
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
