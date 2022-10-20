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
import BasicSelect from './Extra/Select';
import CustomizedInputBase from './Extra/Search';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return {
    name, calories, fat, carbs, protein,
  };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Nader', 356, 16.0, 49, 3.9),
];

const BasicTable = () => (
  <Box>
    <TableContainer component={Paper}>
      <Box>
        <Typography sx={{
          fontSize: '30px',
          padding: '10px',
        }}
        >
          All Pharmacies
        </Typography>
        {/* <img src="./img/image31.png" alt="Logo" /> */}
        <hr />
      </Box>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><CustomizedInputBase /></TableCell>
            <TableCell align="center">Pharmacy Owner</TableCell>
            <TableCell align="center">Pharmacy Location</TableCell>
            <TableCell align="center">Pharmacy Status</TableCell>
            <TableCell align="center"><BasicSelect /></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0, dispaly: 'flex' } }}
            >
              <TableCell
                align="left"
                component="th"
                scope="row"
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>

                  <Box>

                    <img src="./img/image31.png" alt="Logo" />
                  </Box>
                  <Box>

                    {row.name}
                  </Box>
                </Box>
              </TableCell>

              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);
export default BasicTable;
