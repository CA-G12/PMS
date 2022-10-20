import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ApplicationCard from './ApplicationCard';

type row = {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: number;
  location: string;
  image: string;
  description: string;
  license_number: number;
  status: string;
  owner_id: number;
  owner_name: string;
  owner_img: string;
  createdAt: string;
  updatedAt: string;
};

const ApplicationSection = () => {
  const [cards, setCards] = useState<row[]>([] as row[]);
  const getData = async () => {
    const allApplications = await axios.post(
      '/admin/pharmacies?status=Pending',
    );
    setCards(allApplications.data.rows);
  };
  const setStatus = async (status: string, id: number) => {
    const allApplications = await axios.post(`/admin/pharmacy/${id}`, { status });
    setCards(allApplications.data.rows);
  };
  useEffect(() => {
    getData();
  }, []);
  const getAllTasksApplications = (arr: Array<row>) => arr.map((application) => (
    <ApplicationCard
      card={{
        ownerName: application.owner_name,
        ownerId: application.owner_id,
        licenseNumber: application.license_number,
        pharmacyName: application.name,
      }}
      setApproved={() => setStatus('Approved', application.id)}
      setRejected={() => setStatus('Rejected', application.id)}
    />
  ));
  return (
    <Box sx={{ padding: '2rem 0' }}>
      <Typography
        sx={{ margin: '4rem 10%', fontSize: '3rem' }}
        variant="h1"
        gutterBottom
      >
        Applications
      </Typography>
      {getAllTasksApplications(cards)}
    </Box>
  );
};

export default ApplicationSection;
