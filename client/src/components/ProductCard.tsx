import { Box, Typography } from '@mui/material';

type Product = {
  img: string;
  name: string;
  description: string;
  price: number;
};
interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => (
  <Box
    sx={{
      borderTopLeftRadius: '25px',
      borderBottomRightRadius: '25px',
      width: '22%',
      padding: '0 3% 25px 3%',
      textAlign: 'center',
      boxShadow: '2px 2px 5px 2px #aaa',
      position: 'relative',
      margin: ' 10rem 1rem 1rem 1rem',
      backgroundColor: '#F5F5F5',
      minHeight: '240px',
      display: 'flex',
      alignItems: 'flex-end',
      marginTop:'80px'
    }}
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
        width: '-webkit-fill-available'
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
);
export default ProductCard;
