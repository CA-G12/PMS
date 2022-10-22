import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomizedInputBase from './Extra/Search';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
) {
  return {
    name,
    calories,
    fat,
    carbs,
  };
}

const rows = [
  createData('Frozen yoghurt', 12, 12, 12),
  createData('Ice cream sandwich', 15, 15, 15),
  createData('Eclair', 16, 16, 16),
  createData('Cupcake', 17, 17, 17),
  createData('Gingerbread', 18, 18, 18),
  createData('Nader', 19, 19, 19),
];

const AdminAllProducts = () => (
  <Box>
    <TableContainer component={Paper}>
      <Box>
        <Typography
          sx={{
            fontSize: '30px',
            padding: '10px',
          }}
        >
          All Products
        </Typography>
        <hr />
      </Box>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <CustomizedInputBase />
            </TableCell>
            <TableCell align="center">Number of Products in Stock </TableCell>
            <TableCell align="center">Number of Products in Pharmisis  </TableCell>
            <TableCell align="center">Number of  Expired Products</TableCell>
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
                    <img src="./img/image31.png" alt="Logo" />
                  </Box>
                  <Box>{row.name}</Box>
                </Box>
              </TableCell>

              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);
export default AdminAllProducts;
