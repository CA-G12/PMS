import { CChart } from "@coreui/react-chartjs";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import 'typeface-mulish';
import chart from '../assets/chart1.png';

const Overview = () => {
  const drawerWidth = 240;
  const [productsQuantity, setProductsQuantity] = useState({});
  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      try {
        const { data: { data } } = await axios.get('/admin/statistics', { signal: controller.signal })
        setProductsQuantity(data)
        console.log('statistics: ', data);
      } catch (err) {
        console.log(err)
      }
    }
    getData();

    return () => {
      controller.abort();
    }
  }, [])
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)`, md: "" },
      }}
    >
      <Box
        sx={{ display: "flex", height: "40vh", flexWrap: 'wrap' }}
      >
        <Box
          sx={{
            height: "40vh",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
            width: "53%",
            flexWrap: 'wrap'
          }}
        >

          <Box className='cardStatistics'>
            <Box>
              <Typography fontWeight="bold" paragraph marginBottom="0px" fontFamily='Mulish'>
                Pharmacies
              </Typography>
              <Typography fontFamily='Mulish' variant="h6" marginTop="0px" fontWeight="bold">
                1,350
              </Typography>
            </Box>
            <List>
              <ListItem
                sx={{ paddingTop: "0px", paddingBottom: "0px", gap: "15px" }}
              >
                <span
                  style={{
                    backgroundColor: "#42CAEB",
                    width: "13px",
                    height: "13px",
                    borderRadius: "4px",
                  }}
                ></span>
                <ListItemText sx={{ fontSize: '13px' }}>
                  <Typography paragraph sx={{ fontWeight: '700', fontSize: '.8rem', marginBottom: '0' }}>
                    30% Licensed
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem
                sx={{ paddingTop: "0px", paddingBottom: "0px", gap: "15px" }}
              >
                <span
                  style={{
                    backgroundColor: "#3EFFE8",
                    width: "13px",
                    height: "13px",
                    borderRadius: "4px",
                  }}
                ></span>
                <ListItemText sx={{ fontSize: '13px' }}>
                  <Typography paragraph sx={{ fontWeight: '700', fontSize: '.8rem', marginBottom: '0' }}>
                    40% Pending
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem
                sx={{ paddingTop: "0px", paddingBottom: "0px", gap: "15px" }}
              >
                <span
                  style={{
                    backgroundColor: "#4D96BE",
                    width: "13px",
                    height: "13px",
                    borderRadius: "4px",
                  }}
                ></span>
                <ListItemText sx={{ fontSize: '13px' }}>
                  <Typography paragraph sx={{ fontWeight: '700', fontSize: '.8rem', marginBottom: '0' }}>
                    20% Rejected
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
            <img alt='chart' src={chart} width='95px' style={{ marginLeft: '130px' }} />
          </Box>
          <Box className='cardStatistics'>
            <Box>
              <Typography fontFamily='Mulish' fontWeight="bold" paragraph marginBottom="0px">
                Products
              </Typography>
              <Typography fontFamily='Mulish' variant="h6" marginTop="0px" fontWeight="bold">
                1,350
              </Typography>
            </Box>
            <List>
              <ListItem
                sx={{ paddingTop: "0px", paddingBottom: "0px", gap: "15px" }}
              >
                <span
                  style={{
                    backgroundColor: "#4D96BE",
                    width: "13px",
                    height: "13px",
                    borderRadius: "4px",
                  }}
                ></span>
                <ListItemText sx={{ fontSize: '13px' }}>
                  <Typography paragraph sx={{ fontWeight: '700', fontSize: '.8rem', marginBottom: '0' }}>
                    30% In Pharmacies
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem
                sx={{ paddingTop: "0px", paddingBottom: "0px", gap: "15px" }}
              >
                <span
                  style={{
                    backgroundColor: "#42CAEB",
                    width: "13px",
                    height: "13px",
                    borderRadius: "4px",
                  }}
                ></span>
                <ListItemText sx={{ fontSize: '13px' }}>
                  <Typography paragraph sx={{ fontWeight: '700', fontSize: '.8rem', marginBottom: '0' }}>
                    40% In Stock
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem
                sx={{ paddingTop: "0px", paddingBottom: "0px", gap: "15px" }}
              >
                <span
                  style={{
                    backgroundColor: "#3EFFE8",
                    width: "13px",
                    height: "13px",
                    borderRadius: "4px",
                  }}
                ></span>
                <ListItemText sx={{ fontSize: '13px' }}>
                  <Typography paragraph sx={{ fontWeight: '700', fontSize: '.8rem', marginBottom: '0' }}>
                    20% Expired
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
            <img alt='chart' src={chart} width='95px' style={{ marginLeft: '130px' }} />

          </Box>
        </Box>

        <Box
          sx={{
            height: "40vh",
            display: "flex",
            width: "45%",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              border: "1px solid #80808045",
              backgroundColor: 'white',
              width: "150px",
              height: "90px",
              padding: "20px",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Typography fontFamily='Mulish' fontWeight="bold" paragraph marginBottom="0px" fontSize='1.2rem' sx={{ color: 'grey' }}>
              Products
            </Typography>
            <Typography fontFamily='Mulish' fontWeight="bold" paragraph marginBottom="0px" fontSize='1.5rem' sx={{ color: 'grey' }} marginTop='20px'>
              260
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: 'white',
              border: "1px solid #80808045",
              width: "150px",
              height: "90px",
              padding: "20px",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography fontFamily='Mulish' fontWeight="bold" paragraph marginBottom="0px" fontSize='1.2rem' sx={{ color: 'grey' }}>
              Products
            </Typography>
            <Typography fontFamily='Mulish' fontWeight="bold" paragraph marginBottom="0px" fontSize='1.5rem' sx={{ color: 'grey' }} marginTop='20px'>
              598
            </Typography>
          </Box>
          <Box
            sx={{
              border: "1px solid #80808045",
              backgroundColor: 'white',
              width: "150px",
              height: "90px",
              padding: "20px",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography fontFamily='Mulish' fontWeight="bold" paragraph marginBottom="0px" fontSize='1.2rem' sx={{ color: 'grey' }}>
              Products
            </Typography>
            <Typography fontFamily='Mulish' fontWeight="bold" paragraph marginBottom="0px" fontSize='1.5rem' sx={{ color: 'grey' }} marginTop='20px'>
              250
            </Typography>
          </Box>
          <Box
            sx={{
              border: "1px solid #80808045",
              backgroundColor: 'white',
              width: "150px",
              height: "90px",
              padding: "20px",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography fontFamily='Mulish' fontWeight="bold" paragraph marginBottom="0px" fontSize='1.2rem' sx={{ color: 'grey' }}>
              Products
            </Typography>
            <Typography fontFamily='Mulish' fontWeight="bold" paragraph marginBottom="0px" fontSize='1.5rem' sx={{ color: 'grey' }} marginTop='20px'>
              154
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box sx={{ backgroundColor: 'white', borderRadius: '10px' }}>

        </Box>
      </Box>

      <CChart
        type="line"
        data={{
          labels: ["Product A", "Product B", "Product C", "Product D", "Product E", "Product F", "Product J"],
          datasets: [
            {
              label: "In Stock Quantity",
              backgroundColor: "rgba(220, 220, 220, 0.2)",
              borderColor: "rgba(220, 220, 220, 1)",
              pointBackgroundColor: "rgba(220, 220, 220, 1)",
              pointBorderColor: "#fff",
              data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
            },
            {
              label: "Expired Quantity",
              backgroundColor: "rgba(151, 187, 205, 0.2)",
              borderColor: "rgba(151, 187, 205, 1)",
              pointBackgroundColor: "rgba(151, 187, 205, 1)",
              pointBorderColor: "#fff",
              data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
            },
          ],
        }}
      />
    </Box>
  );
};

export default Overview;
