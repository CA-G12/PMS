import * as React from 'react';
import { Fade } from 'react-awesome-reveal';
import Dialog from '@mui/material/Dialog';
import { Box, Typography } from '@mui/material';

type Product = {
  img: string;
  name: string;
  description: string;
  price: number;
  ProductPharmacies?: string;
  pharmaciesImg?: string;
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
      <Fade
        style={{
          width: '25%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '30px',
        }}
      >
        <Box
          sx={{
            borderTopLeftRadius: '25px',
            borderBottomRightRadius: '25px',
            width: '70%',
            padding: '0 3% 25px 3%',
            textAlign: 'center',
            boxShadow: '2px 2px 5px 2px #aaa',
            position: 'relative',
            margin: ' 10rem 1rem 1rem 1rem',
            backgroundColor: '#F5F5F5',
            minHeight: '240px',
            display: 'flex',
            alignItems: 'flex-end',
            marginTop: '80px',
          }}
          onClick={handleClickOpen}
        >
          <img
            src={product.img}
            alt="product img"
            width="80%"
            height="180px"
            style={{
              position: 'absolute',
              left: '10%',
              top: '-30%',
              borderTopLeftRadius: '25px',
              borderBottomRightRadius: '25px',
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '90px',
              justifyContent: 'center',
              width: '-webkit-fill-available',
            }}
          >
            <Typography
              variant="h4"
              style={{
                color: '#00007F',
                fontFamily: 'mulish',
                fontWeight: '600',
                fontSize: '19px',
              }}
            >
              {product.name}
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontFamily: 'mulish',
                fontWeight: '400',
                fontSize: '14px',
              }}
            >
              {product.description.split(/\s+/).slice(0, 8).join(' ')}
            </Typography>
            <Typography
              paragraph
              style={{
                fontFamily: 'mulish',
                fontWeight: '400',
                fontSize: '14px',
                display: 'flex',
                justifyContent: 'flex-end',
                color: 'navy',
              }}
            >
              {product.price}$
            </Typography>
          </Box>
        </Box>
      </Fade>

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
                margin: '10px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src={product.pharmaciesImg}
                alt="Pharmacy"
                style={{
                  height: '300px',
                  width: '200px',
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
              {product.ProductPharmacies}
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
            <Typography
              sx={{
                textAlign: 'end',
                color: 'blue',
              }}
            >
              {product.price} $
            </Typography>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default ProductCard;
