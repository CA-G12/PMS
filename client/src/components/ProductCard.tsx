// import { useEffect } from 'react';
import Card from '@mui/material/Card';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Box, Typography } from '@mui/material';

type Product = {
  img: string;
  name: string;
  description: string;
  price: number;
  productpharmacies: string;
  pharmaciesimg: string;
};
interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        onClick={handleClickOpen}
        sx={{
          maxWidth: 345,
          borderTopLeftRadius: '40px',
          borderBottomRightRadius: '40px',
          width: '23%',
          padding: '0 1% 35px 1%',
          textAlign: 'center',
          boxShadow: '2px 2px 5px 2px #aaa',
          position: 'relative',
          backgroundColor: '#F5F5F5',
          margin: '30px',
        }}
      >
        <img src={product.img} alt="product img" width="80%" height="40%" />
        <h4
          style={{ color: '#00007F', fontSize: '1.5rem', margin: '5px auto' }}
        >
          {product.name}
        </h4>
        <p
          style={{
            fontSize: '14px',
            fontWeight: '500',
            width: '90%',
            display: 'flex',
            flex: 'wrap',
          }}
        >
          {product.description}
        </p>
        <h5
          style={{
            color: '#00007F',
            fontSize: '1.5rem',
            position: 'absolute',
            right: '1.5rem',
            bottom: '15px',
            margin: '0',
          }}
        >
          {product.price} $
        </h5>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              margin: '10px',
            }}
          >
            <Box
              sx={{
                height: '200px',
                width: '200px',
                margin: '10px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src={product.pharmaciesimg}
                alt="Product Img"
                style={{
                  height: '150px',
                  width: '150px',
                }}
              />
            </Box>
            <Typography
              sx={{
                textAlign: 'center',
                color: 'blue',
                paddingTop: '20px',
              }}
            >
              {product.productpharmacies}
            </Typography>
          </div>
          <div
            style={{
              margin: '10px',
            }}
          >
            <Box
              sx={{
                height: '200px',
                width: '200px',
                margin: '10px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src={product.img}
                alt="Product Img"
                style={{
                  height: '150px',
                  width: '150px',
                }}
              />
            </Box>
            <Typography
              sx={{
                textAlign: 'center',
                color: 'blue',
              }}
            >
              {product.name}
            </Typography>
            <Typography
              sx={{
                textAlign: 'end',
                color: 'blue',
              }}
            >
              {product.price} $
            </Typography>
            <Typography
              sx={{
                display: 'flex',
                textAlign: 'center',
                color: 'blue',
                fontSize: '10px',
                maxWidth: '200px',
                justifyContent: 'center',
              }}
            >
              {product.description}
            </Typography>
          </div>
        </div>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Dialog>
    </>
  );
};
export default ProductCard;
