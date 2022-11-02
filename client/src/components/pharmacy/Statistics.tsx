import { Box, List, Skeleton, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BoxComponent from '../admin/BoxComponent';
import ListItemComponent from '../admin/ListItemComponent';
import chart from '../../assets/chart1.png';

type dataType = {
  Products: {
    count: string;
    rows: [];
  };
  Requests: {
    count: string;
    rows: [quantity: string];
  };
};
const Statistics = () => {
  const [usedData, setUsedData] = useState<dataType | null>(null);
  const [loading, setLoading] = useState(true);
  const id = useParams();
  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      try {
        const {
          data: { data },
        } = await axios.get(`/pharmacy/${id}/statistics`, {
          signal: controller.signal,
        });
        setUsedData(data);
        setLoading(false);
      } catch (err) {
        setLoading(true);
      }
    };
    getData();

    return () => {
      controller.abort();
    };
  }, []);

  return loading ? (
    <Box sx={{ width: '53vw', marginTop: '50px' }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  ) : (
    <Box className="boxes">
      <Box
        className="cardStatistics"
        sx={{ display: 'flex', flexDirection: 'column', marginRight: '70px' }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography
            fontFamily="Mulish"
            fontWeight="bold"
            paragraph
            marginBottom="0px"
          >
            Products
          </Typography>
          <Typography
            fontFamily="Mulish"
            variant="h6"
            marginTop="0px"
            fontWeight="bold"
          >
            {usedData?.Requests?.count}
          </Typography>
        </Box>
        <List>
          <ListItemComponent
            bgcolor="#4D96BE"
            value={35}
            label="In Pharmacies"
          />
          <ListItemComponent bgcolor="#42CAEB" value={54} label="In Stock" />
          <ListItemComponent bgcolor="#3EFFE8" value={20} label="Expired" />
        </List>
        <img
          alt="chart"
          src={chart}
          width="95px"
          style={{ marginLeft: '130px' }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '15px',
          flexWrap: 'wrap',
        }}
      >
        <BoxComponent label="Products" value="210" />
        <BoxComponent label="Most Used" value="20" />
        <BoxComponent label="Requests" value="54" />
        <BoxComponent label="Approved Requests" value="35" />
      </Box>
    </Box>
  );
};

export default Statistics;
