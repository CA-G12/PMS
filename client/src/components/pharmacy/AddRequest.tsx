import * as React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useParams, useNavigate } from 'react-router-dom';

const AddRequestPopUp = () => {
  const [open, setOpen] = React.useState(false);
  const [allProducts, setAllProducts] = React.useState([]);
  const [error, setError] = React.useState('');
  const [quantity, setQuantity] = React.useState(1);
  const [productId, setProductId] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setProductId(event.target.value as string);
  };
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      try {
        const allData = await axios.get(`/products/requests`);
        setAllProducts(allData.data.data.rows);
      } catch (err) {
        setError('Something went wrong.');
      }
    })();
  }, []);
  if (error) {
    return (
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        Something went wrong
      </Box>
    );
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const addOne = () => {
    setQuantity(quantity + 1);
  };
  const incrmentOne = () => {
    setQuantity(quantity - 1);
  };
  const sendData = () => {
    (async () => {
      try {
        await axios.post(`/pharmacy/addRequests`, {
          productId,
          quantity,
        });
        navigate(`/pharmacy/${id}/requests`);
      } catch (err) {
        setError('Something went wrong.');
      }
    })();
    handleClose();
  };
  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          backgroundColor: '#88B441',
          borderRadius: '200px',
        }}
      >
        <AddIcon
          sx={{
            color: 'white',
          }}
        />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Button
          sx={{
            alignItems: 'end',
            color: 'black',
            borderRadius: '50px',
            width: '60px',
            backgroundColor: '#88B441',
            margin: '20px',
          }}
          onClick={handleClose}
        >
          <Box
            sx={{
              backgroundColor: '#88B441',
              display: 'flex',
              justifyContent: 'end',
            }}
          >
            <CloseIcon
              sx={{
                alignItems: 'end',
                color: 'white',
                backgroundColor: '#88B441',
              }}
            />
          </Box>
        </Button>
        <Box
          sx={{
            display: 'flex',
            margin: '50px',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ minWidth: 300 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Request Product
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={productId}
                label="Request Products"
                onChange={handleChange}
              >
                {allProducts.map((row: any) => (
                  <MenuItem value={row.id} key={row.id}>
                    {row.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            <Button
              onClick={addOne}
              sx={{
                fontSize: '20px',
              }}
            >
              +
            </Button>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                justifyItems: 'center',
                paddingTop: '15%',
              }}
            >
              {quantity}
            </Box>
            <Button
              onClick={incrmentOne}
              sx={{
                fontSize: '20px',
              }}
            >
              -
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: '10px',
          }}
        >
          <Button
            variant="outlined"
            onClick={sendData}
            sx={{
              backgroundColor: '#88B441',
              borderRadius: '200px',
              width: '100px',
              color: 'white',
            }}
          >
            Add
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export default AddRequestPopUp;
