import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ApplicationCard from './ApplicationCard';

type Card = {
    ownerName: string;
    ownerId: number;
    licenseNumber: number;
    pharmacyName: string;
  };

const card = {
  ownerName: 'ahmed',
  ownerId: 1116,
  licenseNumber: 123456,
  pharmacyName: 'ahmed pharmacy',
};

const fakeCards = [card, card, card, card, card, card];

const ApplicationSection = () => {
  const [cards, setCards] = useState<Card[]>([] as Card[]);
  const getData = () => {
    setCards(fakeCards);
  };
  useEffect(() => {
    getData();
  }, [cards]);
  // eslint-disable-next-line max-len
  const getAllTasksApplications = (arr :Array<Card>) => arr.map((application) => <ApplicationCard card={application} />);
  return (
    <Box sx={{ padding: '2rem 0' }}>
      <Typography sx={{ margin: '4rem 10%', fontSize: '3rem' }} variant="h1" gutterBottom>
        Applications
      </Typography>
      { getAllTasksApplications(cards) }
    </Box>
  );
};

export default ApplicationSection;
