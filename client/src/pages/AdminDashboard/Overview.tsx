import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  CircularProgress,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import 'typeface-mulish';
import { ToastContainer } from 'react-toastify';
import chart from '../../assets/chart1.png';
import BoxComponent from '../../components/admin/BoxComponent';
import ChartComponent from '../../components/admin/ChartComponent';
import ListItemComponent from '../../components/admin/ListItemComponent';

// eslint-disable-next-line import/no-unresolved
import 'react-toastify/dist/ReactToastify.css';

const Overview = () => {
  const drawerWidth = 240;
  const [productsQuantity, setProductsQuantity] = useState([]);
  const [productsQuantityOrder, setProductsQuantityOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statistics, setStatistics] = useState({
    pharmaciesNumber: 0,
    openedApplicationsNumber: 0,
    productsNumber: 0,
    pendingApplicationsNumber: 0,
    closedApplicationsNumber: 0,
  });

  const inStock: number[] = [];
  const expired: number[] = [];
  const inStockOrder: number[] = [];
  const expiredOrder: number[] = [];

  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      try {
        const {
          // eslint-disable-next-line @typescript-eslint/no-shadow
          data: { data },
        } = await axios.get('/admin/statistics', { signal: controller.signal });
        setProductsQuantity(data.allKindProductsCount.rows);
        setProductsQuantityOrder(data.allKindProductsCountOrder.rows);
        setStatistics(data);
        setLoading(false);
      } catch (err) {
        setProductsQuantity([]);
        setProductsQuantityOrder([]);
        setLoading(false);
      }
    };
    getData();

    return () => {
      controller.abort();
    };
  }, []);

  productsQuantity.forEach(
    ({
      expired_quantity: expiredQuantity,
      in_stock_quantity: inStockQuantity,
    }) => {
      inStock.push(inStockQuantity);
      expired.push(expiredQuantity);
    }
  );

  productsQuantityOrder.forEach(
    ({
      expired_quantity: expiredQuantity,
      in_stock_quantity: inStockQuantity,
    }) => {
      inStockOrder.push(inStockQuantity);
      expiredOrder.push(expiredQuantity);
    }
  );

  if (loading) {
    return (
      <Box sx={{ display: 'flex', margin: '20rem 30rem' }}>
        <CircularProgress />
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          height: '40vh',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '70px',
          marginLeft: '55px',
        }}
      >
        <Box
          sx={{
            height: '40vh',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            width: '53%',
            flexWrap: 'wrap',
            marginRight: '7px',
          }}
        >
          <Box
            className="cardStatistics"
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography
                fontWeight="bold"
                paragraph
                marginBottom="0px"
                fontFamily="Mulish"
              >
                Pharmacies
              </Typography>
              <Typography
                fontFamily="Mulish"
                variant="h6"
                marginTop="0px"
                fontWeight="bold"
              >
                {statistics?.pharmaciesNumber}
              </Typography>
            </Box>
            <List sx={{ display: 'flex', flexDirection: 'column' }}>
              <ListItem
                sx={{ paddingTop: '0px', paddingBottom: '0px', gap: '15px' }}
              >
                <span
                  style={{
                    backgroundColor: '#42CAEB',
                    width: '13px',
                    height: '13px',
                    borderRadius: '4px',
                  }}
                />
                <ListItemText sx={{ fontSize: '13px' }}>
                  <Typography
                    paragraph
                    sx={{
                      fontWeight: '700',
                      fontSize: '.8rem',
                      marginBottom: '0',
                    }}
                  >
                    {(
                      (+statistics.openedApplicationsNumber /
                        +statistics.pharmaciesNumber) *
                      100
                    ).toFixed(1)}
                    % Licensed
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem
                sx={{ paddingTop: '0px', paddingBottom: '0px', gap: '15px' }}
              >
                <span
                  style={{
                    backgroundColor: '#3EFFE8',
                    width: '13px',
                    height: '13px',
                    borderRadius: '4px',
                  }}
                />
                <ListItemText sx={{ fontSize: '13px' }}>
                  <Typography
                    paragraph
                    sx={{
                      fontWeight: '700',
                      fontSize: '.8rem',
                      marginBottom: '0',
                    }}
                  >
                    {(
                      (+statistics.pendingApplicationsNumber /
                        +statistics.pharmaciesNumber) *
                      100
                    ).toFixed(1)}
                    % Pending
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem
                sx={{ paddingTop: '0px', paddingBottom: '0px', gap: '15px' }}
              >
                <span
                  style={{
                    backgroundColor: '#4D96BE',
                    width: '13px',
                    height: '13px',
                    borderRadius: '4px',
                  }}
                />
                <ListItemText sx={{ fontSize: '13px' }}>
                  <Typography
                    paragraph
                    sx={{
                      fontWeight: '700',
                      fontSize: '.8rem',
                      marginBottom: '0',
                    }}
                  >
                    {(
                      (+statistics.closedApplicationsNumber /
                        +statistics.pharmaciesNumber) *
                      100
                    ).toFixed(1)}
                    % Rejected
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
            <img
              alt="chart"
              src={chart}
              width="95px"
              style={{ marginLeft: '130px' }}
            />
          </Box>

          <Box
            className="cardStatistics"
            sx={{ display: 'flex', flexDirection: 'column' }}
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
                {statistics?.productsNumber}
              </Typography>
            </Box>
            <List sx={{ display: 'flex', flexDirection: 'column' }}>
              <ListItemComponent
                bgcolor="#4D96BE"
                value={statistics.productsNumber}
                label="In Pharmacies"
              />
              <ListItemComponent
                bgcolor="#42CAEB"
                value={54}
                label="In Stock"
              />
              <ListItemComponent bgcolor="#3EFFE8" value={20} label="Expired" />
            </List>
            <img
              alt="chart"
              src={chart}
              width="95px"
              style={{ marginLeft: '130px' }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            height: '40vh',
            display: 'flex',
            width: '45%',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <BoxComponent label="Products" value="260" />
          <BoxComponent label="Application" value="598" />
          <BoxComponent label="Pharmacies" value="43" />
          <BoxComponent label="Requests" value="154" />
        </Box>
      </Box>

      <Typography
        fontWeight="bold"
        paragraph
        marginBottom="0px"
        fontFamily="Mulish"
        className="chart"
        marginTop="70px"
        color="#706c6c"
      >
        Chart for Most used Products Quantity
      </Typography>
      <ChartComponent inStock={inStock} expired={expired} />

      <Typography
        fontWeight="bold"
        paragraph
        marginBottom="0px"
        fontFamily="Mulish"
        className="chart"
        color="#706c6c"
      >
        Chart for Least used Products Quantity
      </Typography>
      <ChartComponent inStock={inStockOrder} expired={expiredOrder} />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Box>
  );
};

export default Overview;
