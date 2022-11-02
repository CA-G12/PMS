import React, { useState } from 'react';
import { Search, LocationOn } from '@mui/icons-material';
import { Box, Paper, Typography, InputBase, IconButton } from '@mui/material';
import './style.css';
import 'typeface-mulish';
import axios, { AxiosResponse } from 'axios';

type FilterComponentProps = {
  text: string;
};
const FilterComponent: React.FC<FilterComponentProps> = ({ text }) => {
  // type e = {
  //     e:React.ChangeEvent<HTMLInputElement>
  // }

  const [pharmacy, setPharmacy] = useState('');
  const [location, setLocation] = useState('');
  const [medicine, setMedicine] = useState('');
  const [, setFilteredData] = useState<AxiosResponse | null>(null);

  const getFilteredData = async () => {
    try {
      if (medicine && pharmacy) {
        const result = await axios.get(
          `/product?pharmacyName=${pharmacy}&medicineName=${medicine}`
        );
        setFilteredData(result);
      } else if (pharmacy && location) {
        const result = await axios.get(
          `/pharmacy?location=${location}&name=${pharmacy}`
        );
        setFilteredData(result);
      }
    } catch (err) {
      setLocation('');
      setMedicine('');
      setPharmacy('');
    }
  };

  return (
    <Box className="filterComponent">
      <Typography>Filter Any {text}</Typography>
      <Box className="filtered-inputs">
        <Paper>
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <Search />
          </IconButton>
          <InputBase
            placeholder="Set Any Pharmacy"
            onChange={(e) => setPharmacy(e.target.value)}
          />
        </Paper>
        {text === 'Pharmacies' ? (
          <Paper>
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <LocationOn />
            </IconButton>
            <InputBase
              placeholder="Set Your Location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </Paper>
        ) : (
          <Paper>
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <Search />
            </IconButton>
            <InputBase
              placeholder="Search Any Medicine"
              onChange={(e) => setMedicine(e.target.value)}
            />
          </Paper>
        )}
        <IconButton
          type="button"
          sx={{ p: '10px' }}
          aria-label="search"
          className="SearchButton"
          onClick={getFilteredData}
        >
          <Search className="searchIcon" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FilterComponent;
