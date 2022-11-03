import { useEffect, useState } from 'react';
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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Divider } from '@mui/material';
import { LongMenu } from '../../components/Extra';
import image31 from '../../assets/image31.png';

const options = ['Opened', 'Closed'];

const AllAdminPharmasis = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const updatePharmacyStatus = (status: string, pharmacyId: number) =>
    axios.put(`/admin/pharmacy/${pharmacyId}`, {
      status,
    });

  const getPharmacies = async () => {
    const res = await axios.get('/admin/pharmacies');
    return res.data.data.rows;
  };

  const setStatus = async (status: string, pharmacyId: number) => {
    try {
      setLoading(true);

      await updatePharmacyStatus(status, pharmacyId);
      const pharmacies = await getPharmacies();
      setData(pharmacies);
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

        const pharmacies = await getPharmacies();

        setData(pharmacies);
        setLoading(false);
      } catch (err) {
        setError('Somethig went wrong.');
        setLoading(false);
      }
    })();
  }, []);

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
          <TableHead sx={{ padding: '2px 30px' }}>
            <TableRow sx={{ padding: '2px 30px' }}>
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
                  Pharmacy Name
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
    </Box>
  );
};
export default AllAdminPharmasis;
