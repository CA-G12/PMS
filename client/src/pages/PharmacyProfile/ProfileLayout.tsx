import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { Outlet, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import {
  Dialpad,
  AttachFile,
  Category,
  RequestQuote,
} from '@mui/icons-material';
import './profile.css';
import Profile from '../../assets/profile.jpg';

const ProfileLayout = () => {
  const [owner, setOwner] = useState<AxiosResponse | null>();

  const TABS_CONFIG = [
    { component: <Dialpad />, slug: 'Profile Overview' },
    { component: <AttachFile />, slug: 'Pharmacy Products' },
    { component: <Category />, slug: 'Active Requests' },
    { component: <RequestQuote />, slug: 'Sales History' },
  ];
  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      try {
        const result = await axios.get('/pharmacy/:id', {
          signal: controller.signal,
        });
        setOwner(result);
        console.log(owner);
      } catch (err) {
        setOwner(null);
      }
    };
    getData();
    return () => {
      controller.abort();
    };
  });
  return (
    <>
      {/* Here goes the navbar */}
      <Box className="layout">
        <Box className="dashboard">
          <Box className="personInfo">
            <Link to="/pharmacy">
              <img alt="profile" src={Profile} />
            </Link>
            <Box className="info">
              <Typography className="username">Ibtisam Hemmo</Typography>
              <Typography className="job">Pharmacist</Typography>
            </Box>
          </Box>
          <List className="dash">
            {TABS_CONFIG.map(({ component, slug }) => (
              <Link
                to={`/pharmacy/${slug.toLowerCase()}`}
                className="navLeft"
                key={slug}
              >
                <ListItem className="dashLi">
                  <ListItemButton>
                    <ListItemIcon>{component}</ListItemIcon>
                    <ListItemText primary={slug} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
        <Box className="outlet">
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default ProfileLayout;
