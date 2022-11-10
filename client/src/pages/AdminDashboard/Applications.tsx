import { Box, Typography, Pagination, CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ApplicationCard from '../../components/admin/ApplicationCard';
import empty from '../../assets/empty.webp';
import 'typeface-mulish';

/* eslint-disable camelcase */
type row = {
  id: number;
  name: string;
  email: string;
  phone: number;
  location: string;
  image: string;
  description: string;
  license_number: number;
  status: string;
  owner_id: number;
  owner_name: string;
  ownerImg: string;
  createdAt: string;
  updatedAt: string;
};

const Applications = () => {
  const [cards, setCards] = useState<row[]>([] as row[]);
  const [pageNum, setPageNum] = useState(1);
  const [numOfApplications, setNumOfApplications] = useState(1);
  const [loading, setLoading] = useState(true);
  const drawerWidth = 240;

  const getData = async () => {
    setLoading(true);
    const {
      data: {
        data: { rows, count },
      },
    } = await axios.get(`/admin/pharmacies?page=${pageNum}&status=Pending`);
    setCards(rows);
    setNumOfApplications(count);
    setLoading(false);
  };

  const setStatus = async (status: string, id: number) => {
    setLoading(true);
    const allApplications = await axios.put(`/admin/pharmacy/${id}`, {
      status,
    });
    setLoading(false);
    setCards(allApplications.data.rows);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  const getAllTasksApplications = (arr: Array<row>) =>
    arr.map((application) => (
      <ApplicationCard
        card={{
          ownerName: application.owner_name,
          ownerId: application.owner_id,
          licenseNumber: application.license_number,
          pharmacyName: application.name,
        }}
        setApproved={() => setStatus('Opened', application.id)}
        setRejected={() => setStatus('Rejected', application.id)}
      />
    ));

  if (loading) {
    return (
      <Box sx={{ display: 'flex', margin: '20rem 30rem' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (cards.length === 0) {
    return (
      <Box sx={{ width: '100%', height: '100%', margin: 'auto 7rem' }}>
        <img src={empty} alt="Logo" />
      </Box>
    );
  }

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)`, md: '' },
      }}
    >
      <Box sx={{ marginLeft: '80px' }}>
        <Typography
          sx={{
            color: 'black',
            fontSize: '25px',
            fontWeight: '800',
            fontFamily: 'mulish',
            marginBottom: '20px',
          }}
        >
          Applications
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            marginBottom: '20px',
          }}
        >
          {getAllTasksApplications(cards)}
        </Box>
        <Pagination
          count={Math.ceil(numOfApplications / 3)}
          color="primary"
          page={pageNum}
          onChange={(event: React.ChangeEvent<unknown>, page: number) => {
            setPageNum(page);
          }}
        />
      </Box>
    </Box>
  );
};

export default Applications;
