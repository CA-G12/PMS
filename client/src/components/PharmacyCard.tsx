import { Box } from '@mui/material';

type pharmacy = {
  img: string;
  name: string;
  location: string;
};
interface Props {
  pharmacy: pharmacy;
}

const PharmacyCard = ({ pharmacy }: Props) => (
  <Box
    sx={{
      maxWidth: 345,
      borderTopLeftRadius: '40px',
      borderBottomRightRadius: '40px',
      width: '15%',
      padding: '0 3% 25px 3%',
      textAlign: 'center',
      boxShadow: '2px 2px 5px 2px #aaa',
      position: 'relative',
      margin: ' 10rem 1rem 3rem 1rem',
      marginTop: '7%',
      backgroundColor: '#F5F5F5',
      minHeight: '220px',
    }}
  >
    <img
      src={pharmacy.img}
      alt="pharmacy img"
      width="80%"
      height="65%"
      style={{
        position: 'absolute',
        left: '10%',
        top: '-30%',
        borderTopLeftRadius: '40px',
        borderBottomRightRadius: '40px',
      }}
    />
    <Box>
      <h4
        style={{
          color: '#00007F',
          fontSize: '1.5rem',
          margin: '5px auto',
          paddingTop: '55%',
        }}
      >
        {pharmacy.name}
      </h4>
      <h5
        style={{
          fontSize: '1rem',
          margin: ' 15px 0',
          opacity: '63%',
        }}
      >
        {pharmacy.location}
      </h5>
    </Box>
  </Box>
);
export default PharmacyCard;
