import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Typography } from '@mui/material';

type Card = {
    ownerName:string;
    ownerId:number;
    licenseNumber: string;
    pharmacyName:string;
};
interface Props{
    card:Card
}

const ApplicationCard = ({ card }:Props) => (
  <Box sx={{
    border: '2px solid #B6CAFD',
    borderRadius: '2rem',
    width: '80%',
    margin: 'auto',
    padding: '2rem 0',
    paddingLeft: '3rem',
    display: 'flex',
    position: 'relative',
    fontSize: '2rem',
  }}
  >
    <Box>
      <Typography sx={{ fontSize: '2rem' }}>
        <strong>Owner’s name : </strong>
        {card.ownerName}
      </Typography>
      <Typography sx={{ fontSize: '2rem' }}>
        <strong>Owner’s Id : </strong>
        {card.ownerId}
      </Typography>
      <Typography sx={{ fontSize: '2rem' }}>
        <strong>license number : </strong>
        {card.licenseNumber}
      </Typography>
      <Typography sx={{ fontSize: '2rem' }}>
        <strong>Pharmacy name : </strong>
        {card.pharmacyName}
      </Typography>
    </Box>
    <Box sx={{
      position: 'absolute',
      right: '6rem',
      display: 'flex',
      flexDirection: 'column',
    }}
    >
      <Button
        sx={{
          marginBottom: '1.5rem',
          borderRadius: '50%',
          fontSize: '4rem',
        }}
        variant="contained"
      >
        <CheckIcon sx={{ fontSize: '3rem' }}>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </CheckIcon>
      </Button>
      <Button
        sx={{
          borderRadius: '50%',
          marginTop: '1.5rem',
          fontSize: '4rem',
        }}
        variant="outlined"
      >
        <CloseIcon sx={{ fontSize: '3rem' }}>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </CloseIcon>
      </Button>
    </Box>
  </Box>
);

export default ApplicationCard;
