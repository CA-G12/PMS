import { Box, CircularProgress, Pagination } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import empty from '../assets/empty.webp';
import Navbar from '../components/NavBar/Navbar';
import { FilterComponent } from '../components';
import Footer from '../components/Landing/Footer';

type row = {
  name: string;
  description: string;
  price: number;
  img: string;
  ProductPharmacies: [Pharmacy: any];
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

  const gitAllProducts = () =>
    products.map((Product) => (
      <ProductCard
        product={{
          img: Product.img,
          name: Product.name,
          description: Product.description,
          price: Product.price,
          ProductPharmacies: Product?.ProductPharmacies[0]?.Pharmacy?.name,
          pharmaciesImg: Product?.ProductPharmacies[0]?.Pharmacy?.image,
        }}
      />
    ));

  return (
    <>
      <Navbar />
      <FilterComponent
        text="Products"
        getData={getData}
        setSearchPharmacy={setSearchPharmacy}
        setSearchMedicine={setSearchMedicine}
      />
      <Box
        sx={{
          width: '90%',
          justifyContent: 'center',
          margin: 'auto',
        }}
      >
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
              {gitAllProducts()}
            </Box>
            <Pagination
              sx={{
                margin: '5rem 0',
                marginLeft: '2rem',
              }}
              count={Math.ceil(numOfApplications / 8)}
              color="primary"
              page={pageNum}
              onChange={(event: React.ChangeEvent<unknown>, page: number) => {
                setPageNum(page);
              }}
            />
          </>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default AllProducts;
