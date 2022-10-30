import Card from '@mui/material/Card';

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
  <Card
    sx={{
      maxWidth: 345,
      borderTopLeftRadius: '40px',
      borderBottomRightRadius: '40px',
      width: '15%',
      padding: '0 3% 25px 3%',
      textAlign: 'center',
      boxShadow: '2px 2px 5px 2px #aaa',
      position: 'relative',
    }}
  >
    <img src={product.img} alt="product img" width="80%" height="40%" />
    <h4 style={{ color: '#00007F', fontSize: '1.5rem', margin: '5px auto' }}>
      {product.name}
    </h4>
    <p style={{ fontSize: '14px', fontWeight: '600' }}>{product.description}</p>
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
);
export default ProductCard;
