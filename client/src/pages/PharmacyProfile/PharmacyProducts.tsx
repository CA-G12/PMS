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
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import empty from '../../assets/empty.webp';

type row = {
  name: string;
  description: string;
  price: number;
  img: string;
};
const PharmacyProducts = () => {
  const [searchMedicine, setSearchMedicine] = useState('');
  const [products, setProducts] = useState<row[]>([] as row[]);
  const [numOfApplications, setNumOfApplications] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(1);
  const { id } = useParams();

  const getData = async () => {
    let URL = `/product?page=${pageNum}&id=${id}`;
    if (searchMedicine) {
      URL += `&medicineName=${searchMedicine}`;
    }
    setLoading(true);
    const {
      data: {
        data: { rows, count },
      },
    } = await axios.get(URL);

    setProducts(rows);
    setNumOfApplications(count);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [pageNum]);

  const gitAllProducts = () =>
    products.map((Product) => (
      <ProductCard
        product={{
          img: Product.img,
          name: Product.name,
          description: Product.description,
          price: Product.price,
        }}
      />
    ));
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
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
            '& > :not(style)': { m: 1, width: '90%', height: '100%' },
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
            }}
          >
            {gitAllProducts()}
          </Box>
          <Pagination
            sx={{
              margin: '5rem 0',
              marginLeft: '2rem',
            }}
            count={Math.ceil(numOfApplications / 9)}
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

export default PharmacyProducts;
