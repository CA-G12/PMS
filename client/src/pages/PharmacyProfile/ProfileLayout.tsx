import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { Outlet, Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Dialpad,
  AttachFile,
  Category,
  RequestQuote,
} from '@mui/icons-material';
import './profile.css';
import Profile from '../../assets/profile.jpg';

type pharmacyData = {
  name: string,
  location:string,
  email:string,
  phone:string,
  description:string,
  owner_name:string,
  owner_img:string,
}

const ProfileLayout = () => {
  const [data, setData] = useState<pharmacyData | null>();
  const id = useParams();

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
        const {data:{pharmacyData}} = await axios.get(`/pharmacy/${id}`, {
          signal: controller.signal,
        });
        setData(pharmacyData[0]);
      } catch (err) {
        setData(null);
      }
    };
    getData();
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <>
      {/* Here goes the navbar */}
      <Box className="layout">
        <Box className="dashboard">
          <Box className="personInfo">
            <Link to="/pharmacy">
              <img alt="profile" src={data?.owner_img} />
            </Link>
            <Box className="info">
              <Typography className="username">{data?.owner_name}</Typography>
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
