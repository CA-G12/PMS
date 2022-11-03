import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Typography, Button } from '@mui/material';

type Card = {
  ownerName: string;
  ownerId: number;
  licenseNumber: number;
  pharmacyName: string;
};
interface Props {
  card: Card;
  setApproved: () => Promise<void>;
  setRejected: () => Promise<void>;
}

const ApplicationCard = ({ card, setApproved, setRejected }: Props) => (
  <Box
    sx={{
      border: '2px solid #B6CAFD',
      backgroundColor:'white',
      display: 'flex',
      width: '60%',
      padding: '17px 30px',
      justifyContent: 'space-between',
      borderRadius: '7px',
    }}
  >
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography sx={{ fontSize: '1.3rem', margin: '0.5rem 0' }}>
        <strong>Pharmacy name : </strong>
        {card.pharmacyName}
      </Typography>
      <Typography sx={{ fontSize: '1.3rem', margin: '0.5rem 0' }}>
        <strong>license number : </strong>
        {card.licenseNumber}
      </Typography>
      <Typography sx={{ fontSize: '1.3rem', margin: '0.5rem 0' }}>
        <strong>Owner’s name : </strong>
        {card.ownerName}
      </Typography>
      <Typography sx={{ fontSize: '1.3rem', margin: '0.5rem 0' }}>
        <strong>Owner’s Id : </strong>
        {card.ownerId}
      </Typography>
    </Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}
    >
      <Button
        sx={{
          borderRadius: '50%',
          height: '65px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        variant="contained"
        onClick={() => setApproved()}
      >
        <CheckIcon sx={{ fontSize: '2.5rem' }}>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </CheckIcon>
      </Button>
      <Button
        sx={{
          borderRadius: '50%',
          height: '65px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        variant="outlined"
        onClick={() => setRejected()}
      >
        <CloseIcon sx={{ fontSize: '2.5rem' }}>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </CloseIcon>
      </Button>
    </Box>
  </Box>
);

export default ApplicationCard;
