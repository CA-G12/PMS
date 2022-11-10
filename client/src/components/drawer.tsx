import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  Dialpad,
  AttachFile,
  Category,
  RequestQuote,
  GridView,
} from '@mui/icons-material';
import logo from '../assets/logo.png';

const DRAWER_TABS_CONFIG = [
  { component: <Dialpad />, slug: 'Overview' },
  { component: <AttachFile />, slug: 'Pharmacies' },
  { component: <Category />, slug: 'Products' },
  { component: <RequestQuote />, slug: 'Requests' },
  { component: <GridView />, slug: 'Applications' },
];

const drawer = (
  <div style={{ backgroundColor: '#031737' }}>
    <Link to="/">
      <img
        alt="logo"
        src={logo}
        width="150px"
        style={{ marginTop: '20px', marginLeft: '30px' }}
      />
    </Link>
    <Divider />

    <List
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flexStart' }}
    >
      {DRAWER_TABS_CONFIG.map(({ component, slug }) => (
        <Link
          to={`/admin/${slug.toLowerCase()}`}
          key={slug}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <ListItem sx={{ width: '100%' }}>
            <ListItemButton className="dashboardItem">
              <ListItemIcon sx={{ color: 'white' }}>{component}</ListItemIcon>
              <ListItemText primary={slug} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  </div>
);

export default drawer;
