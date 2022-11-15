import React from 'react';
import { Search, LocationOn } from '@mui/icons-material';
import { Box, Paper, Typography, InputBase, IconButton } from '@mui/material';
import './style.css';
import 'typeface-mulish';

type FilterComponentProps = {
  text: string;
  getData: () => Promise<void>;
  setSearchLocation?: Function;
  setSearchPharmacy: Function;
  setSearchMedicine?: Function;
};

const FilterComponent: React.FC<FilterComponentProps> = ({
  text,
  getData,
  setSearchLocation,
  setSearchPharmacy,
  setSearchMedicine,
}) => {
  const paperStyle = {
    width: '50%',
    height: '54px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  };

  return (
    <Box className="filterComponent">
      <Typography
        sx={{
          color: 'navy',
          fontSize: '22px',
          fontWeight: '800',
          fontFamily: 'mulish',
        }}
      >
        Filter Any {text}
      </Typography>
      <Box className="filtered-inputs">
        <Paper sx={paperStyle}>
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <Search />
          </IconButton>
          <InputBase
            placeholder="Set Any Pharmacy"
            onChange={(e) => setSearchPharmacy(e.target.value)}
          />
        </Paper>
        {text === 'Pharmacies' ? (
          <Paper sx={paperStyle}>
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <LocationOn />
            </IconButton>
            <InputBase
              placeholder="Set Your Location"
              onChange={(e) => setSearchLocation?.(e.target.value)}
            />
          </Paper>
        ) : (
          <Paper sx={paperStyle}>
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <Search />
            </IconButton>
            <InputBase
              placeholder="Search Any Medicine"
              onChange={(e) => setSearchMedicine?.(e.target.value)}
            />
          </Paper>
        )}
        <IconButton
          type="button"
          sx={{
            backgroundColor: '#83b239',
            borderRadius: '4px',
            padding: '10px',
          }}
          aria-label="search"
          className="SearchButton"
          onClick={getData}
        >
          <Search className="searchIcon" color="disabled" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FilterComponent;
