import {
  Box, Typography, Pagination, CircularProgress,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ApplicationCard from './ApplicationCard';
import empty from '../../assets/empty.webp';

type row = {
  id: number;
  name: string;
  email: string;
  phone: number;
  location: string;
  image: string;
  description: string;
  licenseNumber: number;
  status: string;
  ownerId: number;
  ownerName: string;
  ownerImg: string;
  createdAt: string;
  updatedAt: string;
};

const ApplicationSection = () => {
  const [cards, setCards] = useState<row[]>([] as row[]);
  const [pageNum, setPageNum] = useState(1);
  const [numOfApplications, setNumOfApplications] = useState(1);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const { data: { data: { rows, count } } } = await axios.get(`/admin/pharmacies?page=${10}&status=Pending`);
    setCards(rows);
    setNumOfApplications(count);
    setLoading(false);
  };

  const setStatus = async (status: string, id: number) => {
    const allApplications = await axios.put(`/admin/pharmacy/${id}`, {
      status,
    });
    setCards(allApplications.data.rows);
  };

  useEffect(() => {
    getData();
  }, [pageNum]);

  const getAllTasksApplications = (arr: Array<row>) => arr.map((application) => (
    <ApplicationCard
      card={{
        ownerName: application.ownerName,
        ownerId: application.ownerId,
        licenseNumber: application.licenseNumber,
        pharmacyName: application.name,
      }}
      setApproved={() => setStatus('Approved', application.id)}
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
      <Box sx={{ width: '100%', height: '100%', margin: 'auto 7rem' }}><img src={empty} alt="Logo" /></Box>

    );
  }
  return (
    <Box sx={{ padding: '2rem 8%', width: '100%' }}>
      <Typography
        sx={{ margin: '4rem 3%', fontSize: '3rem' }}
        variant="h1"
        gutterBottom
      >
        Applications
      </Typography>
      {getAllTasksApplications(cards)}
      <Pagination
        count={Math.ceil(numOfApplications / 3)}
        color="primary"
        page={pageNum}
        onChange={
          (event: React.ChangeEvent<unknown>, page: number) => {
            setPageNum(page);
          }
        }
      />
    </Box>
  );
};

export default ApplicationSection;
