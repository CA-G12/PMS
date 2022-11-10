import { Search } from '@mui/icons-material';
import { IconButton, Paper, Box, InputBase } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.css';

type PharmacyFilterProps = {
  setFilteredData: React.Dispatch<React.SetStateAction<[]>>;
};

const PharmacyFilter: React.FC<PharmacyFilterProps> = ({ setFilteredData }) => {
  const [product, setProduct] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const getData = async () => {
      try {
        const {
          data: { rows },
        } = await axios.get(`/product?medicineName=${product}`, {
          signal: controller.signal,
        });
        setFilteredData(rows);
      } catch (err) {
        setFilteredData([]);
      }
    };
    getData();
    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);
  return (
    <Box>
      <Paper>
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <Search />
        </IconButton>
        <InputBase
          placeholder="Search Any Product"
          onChange={(e) => setProduct(e.target.value)}
        />
      </Paper>
    </Box>
  );
};

export default PharmacyFilter;
