import { AdminProduct, Product } from '../../models/index';

const getProductsAdmin = async () => Product.findAll({
  attributes: ['id', 'name'],
  include: [
    {
      model: AdminProduct,
      attributes: ['product_id', 'expired_quantity', 'in_stock_quantity'],
    },
  ],
});

export default getProductsAdmin;
