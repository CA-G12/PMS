import {
  Box,
  TextField,
  InputAdornment,
  CircularProgress,
  Pagination,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import empty from '../assets/empty.webp';

type row = {
  name: string;
  description: string;
  price: number;
  img: string;
  productpharmacies: string;
  pharmaciesimg: string;
};
const AllProducts = () => {
  const [searchMedicine, setSearchMedicine] = useState('');
  const [searchPharmacy, setSearchPharmacy] = useState('');
  const [products, setProducts] = useState<row[]>([] as row[]);
  const [numOfApplications, setNumOfApplications] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(1);
  const getData = async () => {
    setLoading(true);
    let productsData;
    if (searchMedicine && searchPharmacy) {
      productsData = await axios.get(
        `/product?page=${pageNum}&medicineName=${searchMedicine}&pharmacyName=${searchPharmacy}`
      );
    } else if (searchMedicine) {
      productsData = await axios.get(
        `/product?page=${pageNum}&medicineName=${searchMedicine}`
      );
    } else if (searchPharmacy) {
      productsData = await axios.get(
        `/product?page=${pageNum}&pharmacyName=${searchPharmacy}`
      );
    } else {
      productsData = await axios.get(`/product?page=${pageNum}`);
    }
    const {
      data: {
        data: { rows, count },
      },
    } = productsData;
    setProducts(rows);
    setNumOfApplications(count);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [pageNum]);

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
            value={searchMedicine}
            onChange={(e) => setSearchMedicine(e.target.value)}
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
            value={searchPharmacy}
            onChange={(e) => setSearchPharmacy(e.target.value)}
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
          onClick={() => {
            getData();
            setPageNum(1);
          }}
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
      {loading && (
        <Box sx={{ display: 'flex', margin: '20rem 30rem' }}>
          <CircularProgress />
        </Box>
      )}
      {!loading && products.length === 0 && (
        <Box sx={{ width: '100%', height: '100%', margin: 'auto 7rem' }}>
          <img src={empty} alt="Logo" />
        </Box>
      )}

      {!loading && products.length !== 0 && (
        <>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              margin: 'auto',
            }}
          >
            {products.map((product: any) => (
              <ProductCard
                key={product.id}
                product={{
                  img: product.img,
                  name: product.name,
                  description: product.description,
                  price: product.price,
                  productpharmacies: product.ProductPharmacies[0].Pharmacy.name,
                  pharmaciesimg: product.ProductPharmacies[0].Pharmacy.image,
                }}
              />
            ))}
          </Box>
          <Pagination
            sx={{
              margin: '5rem 0',
              marginLeft: '2rem',
            }}
            count={Math.ceil(numOfApplications / 12)}
            color="primary"
            page={pageNum}
            onChange={(event: React.ChangeEvent<unknown>, page: number) => {
              setPageNum(page);
            }}
          />
        </>
      )}
    </Box>
  );
};

export default AllProducts;
