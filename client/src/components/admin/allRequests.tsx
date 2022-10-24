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
import BasicSelect from '../Extra/Select';
import CustomizedInputBase from '../Extra/Search';
import LongMenu from '../Extra/Options';
import image31 from '../../assets/image31.png';

function createData(
  name: string,
  calories: string,
  fat: string,
  carbs: string,
) {
  return {
    name,
    calories,
    fat,
    carbs,
  };
}

const rows = [
  createData('Frozen yoghurt', 'John Doe', 'Palestine - Gaza', 'Approved'),
  createData('Ice cream sandwich', 'John Doe', 'Palestine - Gaza', 'Rejected'),
  createData('Eclair', 'John Doe', 'Palestine - Gaza', 'Closed'),
  createData('Cupcake', 'John Doe', 'Palestine - Gaza', 'Approved'),
  createData('Gingerbread', 'John Doe', 'Palestine - Gaza', 'Rejected'),
  createData('Nader', 'John Doe', 'Palestine - Gaza', 'Approved'),
];

const AllRequests = () => (
  <Box
    sx={{
      margin: '6rem auto',
      borderRadius: '5px',
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
          All Pharmacies
        </Typography>
        <hr />
      </Box>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <CustomizedInputBase />
            </TableCell>
            <TableCell align="center">Pharmacy Owner</TableCell>
            <TableCell align="center">Pharmacy Location</TableCell>
            <TableCell align="center">Pharmacy Status</TableCell>
            <TableCell align="center">
              <BasicSelect />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
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

              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">
                <LongMenu />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);
export default AllRequests;
