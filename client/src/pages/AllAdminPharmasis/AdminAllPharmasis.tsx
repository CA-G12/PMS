import './style.css';
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
import { useState } from 'react';
import CustomizedInputBase from './Extra/Search';
import LongMenu from './Extra/Options';
import image31 from '../../assets/image31.png';

const options = ['Opened', 'Closed'];

const AllAdminPharmasis = () => {
  const [data, setData] = useState([]);
  const setStatus = async (status: string, PharmacyId: number) => {
    await axios.put(`/admin/pharmacy/${PharmacyId}`, {
      status,
    });
  };
  axios({
    method: 'get',
    url: '/admin/pharmacies',
  }).then((response) => {
    setData(response.data.data.rows);
  });
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
            All Pharmacies
          </Typography>
          <hr />
        </Box>
        <Table
          sx={{ minWidth: 650, marginLeft: '0px', marginTop: '0px' }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <CustomizedInputBase />
              </TableCell>
              <TableCell align="center">Pharmacy Owner</TableCell>
              <TableCell align="center">Pharmacy Location</TableCell>
              <TableCell align="center">Pharmacy Status</TableCell>
              <TableCell align="center">Option</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
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
                    <Box>{row.name}</Box>
                  </Box>
                </TableCell>

                <TableCell align="center">{row.owner_name}</TableCell>
                <TableCell align="center">{row.location}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">
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
    </Box>
  );
};
export default AllAdminPharmasis;
