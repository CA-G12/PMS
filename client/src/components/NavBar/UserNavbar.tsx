import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import ButtonComponent from '../Button';

const UserNavbar = () => (
  <Box>
    <Link to="/login">
      <ButtonComponent text="Login" />
    </Link>
    <Link to="/signUp">
      <ButtonComponent text="Sign up" />
    </Link>
  </Box>
);

export default UserNavbar;
