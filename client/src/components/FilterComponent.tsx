import * as React from 'react';
import { Search, LocationOn } from '@mui/icons-material';
import { Box, Paper, Typography, InputBase, IconButton } from '@mui/material';
import './style.css';
import 'typeface-mulish';

type FilterComponentProps = {
    text: string,

}
const FilterComponent: React.FC<FilterComponentProps> = ({ text, }) => {
    return (
        <Box className="filterComponent">
            <Typography >
                Filter Your {text}
            </Typography>
            <Box className="filtered-inputs">
                <Paper>
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <Search />
                    </IconButton>
                    <InputBase placeholder='Set Any Pharmacy' />
                </Paper>
                {
                    text === 'Pharmacies' ?
                        <Paper>
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <LocationOn />
                            </IconButton>
                            <InputBase placeholder='Set Your Location' />
                        </Paper> 
                        :
                        <Paper>
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <Search />
                            </IconButton>
                            <InputBase placeholder='Search Any Medicine' />
                        </Paper>
                }
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search" className='SearchButton'>
                    <Search className='searchIcon' />
                </IconButton>
            </Box>
        </Box>
    )
}

export default FilterComponent