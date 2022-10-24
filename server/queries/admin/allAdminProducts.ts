import { AdminProduct, Product, ProductPharmacy } from '../../models';

const getProductsAdmin = async () => Product.findAll({
  attributes: ['id', 'name'],
  include: [
    {
      model: AdminProduct,
      attributes: ['expired_quantity', 'in_stock_quantity'],
    },
    {
      model: ProductPharmacy,
      attributes: ['quantity'],
    },
  ],
});

export default getProductsAdmin;
