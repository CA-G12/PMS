import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './style.css';

const CustomizedInputBase = () => (
  <Paper
    className="search"
    component="form"
    sx={{
      p: '1px 2px',
      display: 'flex',
      alignItems: 'center',
      width: 250,
      height: 40,
      padding: 0.3,
    }}
  >
    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon
        sx={{
          color: 'black',
          opacity: '0.7',
        }}
      />
    </IconButton>
    <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
  </Paper>
);

export default CustomizedInputBase;
