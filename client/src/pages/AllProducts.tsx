import { Box, TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ProductCard from '../components/ProductCard';

const arrData = [
  {
    name: 'Aceril 12.5 mg',
    description:
      'Its contain captopril 12.5 mg uses for  Hypertension,Diabetic Kidney Disease,Left Ventricular Dysfunction,Congestive Heart Failure,Nephropathy,Diabetes Mellitus,Heart Failure,Heart Attack,Echocardiogram .  Method of action: Agents Acting In The Renin-Angiotensin System,Antihypertensive,Hypotensive,Vasodilator',
    price: 12,
    img: 'https://pillintrip.com/style/images/medicines/aceril/aceril1.jpg',
  },
  {
    name: 'Aceril 12.5 mg',
    description:
      'Its contain captopril 12.5 mg uses for  Hypertension,Diabetic Kidney Disease,Left Ventricular Dysfunction,Congestive Heart Failure,Nephropathy,Diabetes Mellitus,Heart Failure,Heart Attack,Echocardiogram .  Method of action: Agents Acting In The Renin-Angiotensin System,Antihypertensive,Hypotensive,Vasodilator',
    price: 12,
    img: 'https://pillintrip.com/style/images/medicines/aceril/aceril1.jpg',
  },
  {
    name: 'Aceril 12.5 mg',
    description:
      'Its contain captopril 12.5 mg uses for  Hypertension,Diabetic Kidney Disease,Left Ventricular Dysfunction,Congestive Heart Failure,Nephropathy,Diabetes Mellitus,Heart Failure,Heart Attack,Echocardiogram .  Method of action: Agents Acting In The Renin-Angiotensin System,Antihypertensive,Hypotensive,Vasodilator',
    price: 12,
    img: 'https://pillintrip.com/style/images/medicines/aceril/aceril1.jpg',
  },
  {
    name: 'Aceril 12.5 mg',
    description:
      'Its contain captopril 12.5 mg uses for  Hypertension,Diabetic Kidney Disease,Left Ventricular Dysfunction,Congestive Heart Failure,Nephropathy,Diabetes Mellitus,Heart Failure,Heart Attack,Echocardiogram .  Method of action: Agents Acting In The Renin-Angiotensin System,Antihypertensive,Hypotensive,Vasodilator',
    price: 12,
    img: 'https://pillintrip.com/style/images/medicines/aceril/aceril1.jpg',
  },
  {
    name: 'Aceril 12.5 mg',
    description:
      'Its contain captopril 12.5 mg uses for  Hypertension,Diabetic Kidney Disease,Left Ventricular Dysfunction,Congestive Heart Failure,Nephropathy,Diabetes Mellitus,Heart Failure,Heart Attack,Echocardiogram .  Method of action: Agents Acting In The Renin-Angiotensin System,Antihypertensive,Hypotensive,Vasodilator',
    price: 12,
    img: 'https://pillintrip.com/style/images/medicines/aceril/aceril1.jpg',
  },
  {
    name: 'Aceril 12.5 mg',
    description:
      'Its contain captopril 12.5 mg uses for  Hypertension,Diabetic Kidney Disease,Left Ventricular Dysfunction,Congestive Heart Failure,Nephropathy,Diabetes Mellitus,Heart Failure,Heart Attack,Echocardiogram .  Method of action: Agents Acting In The Renin-Angiotensin System,Antihypertensive,Hypotensive,Vasodilator',
    price: 12,
    img: 'https://pillintrip.com/style/images/medicines/aceril/aceril1.jpg',
  },
];

const AllProducts = () => {
  // const [searchMedicine, setSearchMedicine] = useState('');
  // const [searchPharmacy, setSearchPharmacy] = useState('');
  const [allProducts] = useState(arrData);
  const gitAllProducts = () =>
    allProducts.map((Products) => (
      <ProductCard
        product={{
          img: Products.img,
          name: Products.name,
          description: Products.description,
          price: Products.price,
        }}
      />
    ));
  return (
    <Box
      sx={{
        width: '90%',
        justifyContent: 'center',
        margin: 'auto',
      }}
    >
      <h4
        style={{
          color: '#00007F',
          fontSize: '1.5rem',
          margin: '5rem auto',
          marginBottom: '2rem',
          marginLeft: '10px',
        }}
      >
        Filter your Products
      </h4>
      <Box sx={{ display: 'flex', marginBottom: '2rem' }}>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '48%', height: '100%' },
            width: '95%',
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            label="Search any medicine"
            variant="filled"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon
                    sx={{
                      color: '#6E6E6E',
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="filled-basic"
            label="Search any pharmacy"
            variant="filled"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon
                    sx={{
                      color: '#6E6E6E',
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box
          sx={{
            backgroundColor: '#83B239',
            width: '56px',
            height: '56px',
            marginTop: '10px',
            borderRadius: '5px',
          }}
        >
          <SearchIcon
            sx={{
              color: '#fff',
              backgroundColor: '#83B239',
              fontSize: '26px',
              height: '100%',
              width: '65%',
              marginLeft: '15%',
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          margin: 'auto',
        }}
      >
        {gitAllProducts()}
      </Box>
    </Box>
  );
};

export default AllProducts;
