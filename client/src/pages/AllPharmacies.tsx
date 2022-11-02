import {
  Box,
  TextField,
  InputAdornment,
  Pagination,
  CircularProgress,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import axios from 'axios';
import PharmacyCard from '../components/PharmacyCard';
import empty from '../assets/empty.webp';

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
  }, [pageNum]);

  const gitAllPharmacies = () =>
    pharmacies.map((pharmacy) => (
      <PharmacyCard
        pharmacy={{
          img: pharmacy.image,
          name: pharmacy.name,
          location: pharmacy.location,
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
        Filter your Pharmacies
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
          <TextField
            id="filled-basic"
            label="Set your Location"
            variant="filled"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AddLocationAltIcon
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
          onClick={() => getData()}
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

export default AllPharmacies;
