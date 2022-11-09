import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Divider,
} from '@mui/material';
import { Fade, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

import key1 from '../../assets/key1.png';
import key2 from '../../assets/key2.png';
import './style.css';

const KeyBenefits = () => (
  <>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '4% 9%',
        backgroundColor: 'white',
        paddingBottom: '20px',
      }}
    >
      <Slide direction="down">
        <Typography
          sx={{
            fontSize: '26px',
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'navy',
            marginBottom: '15px',
          }}
        >
          key Benefits
        </Typography>
      </Slide>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Divider
          sx={{
            width: '5%',
            size: '20px',
            height: '6px',
            backgroundColor: 'navy',
          }}
        />
        <Divider
          sx={{
            width: '5%',
            size: '20px',
            height: '6px',
            backgroundColor: '#9bd342',
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: '20px',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography>
            All your Medicine needs <br /> in one place
          </Typography>
          <List sx={{ display: 'flex', flexDirection: 'column' }}>
            <ListItem sx={{ width: '100%' }}>
              <ListItemText className="keyItem">
                Search and find all kind of drugs
              </ListItemText>
            </ListItem>
            <ListItem sx={{ width: '100%' }}>
              <ListItemText className="keyItem">
                We have drugs for soecial case treatments
              </ListItemText>
            </ListItem>
            <ListItem sx={{ width: '100%' }}>
              <ListItemText className="keyItem">
                Get notified when your drug is available
              </ListItemText>
            </ListItem>
          </List>
          <Link to="/pharmacies">
            <button type="submit" className="get">
              Get prescription
            </button>
          </Link>
        </Box>
        <Fade
          direction="right"
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginTop: '30px',
          }}
        >
          <img src={key1} alt="key benefit 1" width="73%" />
        </Fade>
      </Box>
    </Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '2% 9%',
        backgroundColor: 'white',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: '20px',
        }}
      >
        <Fade
          direction="left"
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: '30px',
          }}
        >
          <img src={key2} alt="key benefit 1" width="73%" />
        </Fade>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography>
            Set up your profile and <br /> get refill easily
          </Typography>
          <List sx={{ display: 'flex', flexDirection: 'column' }}>
            <ListItem sx={{ width: '100%' }}>
              <ListItemText className="keyItem">
                When you are a member your refill is easier
              </ListItemText>
            </ListItem>
            <ListItem sx={{ width: '100%' }}>
              <ListItemText className="keyItem">
                With one click your medicine is on it’s way
              </ListItemText>
            </ListItem>
            <ListItem sx={{ width: '100%' }}>
              <ListItemText className="keyItem">
                Select a health care specialist
              </ListItemText>
            </ListItem>
          </List>
          <Link to="/signup">
            <button type="submit" className="get">
              Start Now
            </button>
          </Link>
        </Box>
      </Box>
    </Box>
  </>
);

export default KeyBenefits;
