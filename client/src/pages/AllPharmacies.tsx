import { Box, Pagination, CircularProgress } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PharmacyCard from '../components/PharmacyCard';
import empty from '../assets/empty.webp';
import Navbar from '../components/NavBar/Navbar';
import { FilterComponent } from '../components';
import Footer from '../components/Landing/Footer';

type row = {
  id: number;
  name: string;
  location: string;
  image: string;
};

const AllPharmacies = () => {
  const [searchPharmacy, setSearchPharmacy] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [pharmacies, setPharmacies] = useState<row[]>([] as row[]);
  const [numOfApplications, setNumOfApplications] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(1);

  const getData = async () => {
    setLoading(true);
    const {
      data: {
        data: { rows, count },
      },
    } = await axios.get(
      `/pharmacy?page=${pageNum}&location=${searchLocation}&name=${searchPharmacy}`
    );

    setPharmacies(rows);
    setNumOfApplications(count);
    setLoading(false);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  const gitAllPharmacies = () =>
    pharmacies.map((pharmacy) => (
      <PharmacyCard
        pharmacy={{
          img: pharmacy.image,
          name: pharmacy.name,
          location: pharmacy.location,
          id: pharmacy.id,
        }}
      />
    ));

  return (
    <>
      <Navbar />
      <FilterComponent
        text="Pharmacies"
        getData={getData}
        setSearchPharmacy={setSearchPharmacy}
        setSearchLocation={setSearchLocation}
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
        {!loading && pharmacies.length === 0 && (
          <Box sx={{ width: '100%', height: '100%', margin: 'auto 7rem' }}>
            <img src={empty} alt="Logo" />
          </Box>
        )}
        {!loading && pharmacies.length !== 0 && (
          <>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                margin: 'auto',
              }}
            >
              {gitAllPharmacies()}
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
      <Footer />
    </>
  );
};

export default AllPharmacies;
