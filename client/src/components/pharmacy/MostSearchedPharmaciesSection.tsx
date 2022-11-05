import { Box, CircularProgress, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
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
      <h2
        style={{
          margin: '4rem 0',
          textAlign: 'center',
          color: '#043CAA',
        }}
      >
        Our Most Searched Pharmacies
      </h2>
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
          <Typography
            onClick={() => {
              navigate('/pharmacies');
            }}
            sx={{
              color: '#83B239',
              fontSize: '1.5rem',
              textAlign: 'end',
              marginRight: '5rem',
            }}
          >
            see all{' '}
            <ArrowRightAltIcon
              sx={{
                color: '#83B239',
                fontSize: '2rem',
              }}
            />
          </Typography>
        </>
      )}
    </Box>
  );
};

export default MostSearchedPharmaciesSection;
