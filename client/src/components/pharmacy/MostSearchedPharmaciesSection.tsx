import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Slide } from 'react-awesome-reveal';
import { Box, CircularProgress, Divider, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import 'typeface-mulish';

import PharmacyCard from '../PharmacyCard';

type row = {
  id: number;
  name: string;
  location: string;
  image: string;
};

const MostSearchedPharmaciesSection = () => {
  const [pharmacies, setPharmacies] = useState<row[]>([] as row[]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const {
      data: {
        data: { rows },
      },
    } = await axios.get(`/pharmacy?page=1`);

    setPharmacies(rows);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const gitAllPharmacies = () =>
    pharmacies.slice(0, 3).map((pharmacy) => (
      <PharmacyCard
        pharmacy={{
          img: pharmacy.image,
          name: pharmacy.name,
          location: pharmacy.location,
          id: pharmacy.id,
        }}
        key={pharmacy.name}
      />
    ));

  return (
    <Box
      sx={{
        justifyContent: 'center',
        margin: 'auto',
        backgroundColor: 'white',
        paddingBottom: '30px',
      }}
    >
      <Slide direction="down">
        <h2
          style={{
            margin: '3rem 0',
            textAlign: 'center',
            color: '#043CAA',
            marginBottom: '15px',
            marginTop: '0',
            fontFamily: 'mulish',
          }}
        >
          Our Most Searched Pharmacies
        </h2>
      </Slide>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', marginBottom: '55px' }}
      >
        <Divider
          sx={{
            width: '5%',
            size: '20px',
            height: '6px',
            backgroundColor: 'navy',
          }}
        />
        <Divider
          sx={{
            width: '5%',
            size: '20px',
            height: '6px',
            backgroundColor: '#9bd342',
          }}
        />
      </Box>
      {loading && (
        <Box sx={{ display: 'flex', margin: '20rem 30rem' }}>
          <CircularProgress />
        </Box>
      )}
      {!loading && (
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
          <Link to="/pharmacies">
            <Typography
              sx={{
                color: '#83B239',
                fontSize: '20px',
                textAlign: 'end',
                marginRight: '5rem',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                fontFamily: 'mulish',
              }}
            >
              See all{' '}
              <ArrowRightAltIcon
                sx={{
                  color: '#83B239',
                  fontSize: '2rem',
                }}
              />
            </Typography>
          </Link>
        </>
      )}
    </Box>
  );
};

export default MostSearchedPharmaciesSection;
