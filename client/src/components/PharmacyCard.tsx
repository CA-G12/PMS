import { Box, Typography } from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

type pharmacy = {
  img: string;
  name: string;
  location: string;
  id: number;
};
interface Props {
  pharmacy: pharmacy;
}

const PharmacyCard = ({ pharmacy }: Props) => (
  <Link
    to={`/pharmacy/${pharmacy.id}/overview`}
    style={{ width: '24%', marginTop: '70px' }}
    key={pharmacy.name}
  >
    <Fade>
      <Box
        sx={{
          maxWidth: 345,
          borderTopLeftRadius: '25px',
          borderBottomRightRadius: '25px',
          padding: '0 3% 25px 3%',
          textAlign: 'center',
          boxShadow: '2px 2px 5px 2px #aaa',
          position: 'relative',
          margin: ' 10rem 1rem 1rem 1rem',
          marginTop: '7%',
          backgroundColor: '#F5F5F5',
          minHeight: '220px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        <img
          src={pharmacy.img}
          alt="pharmacy img"
          width="80%"
          height="180px"
          style={{
            position: 'absolute',
            left: '10%',
            top: '-30%',
            borderTopLeftRadius: '25px',
            borderBottomRightRadius: '25px',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '90px',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h4"
            style={{
              color: '#00007F',
              fontFamily: 'mulish',
              fontWeight: '600',
              fontSize: '19px',
            }}
          >
            {pharmacy.name}
          </Typography>
          <Typography
            variant="h6"
            style={{
              fontFamily: 'mulish',
              fontWeight: '400',
              fontSize: '14px',
            }}
          >
            {pharmacy.location}
          </Typography>
        </Box>
      </Box>
    </Fade>
  </Link>
);
export default PharmacyCard;
