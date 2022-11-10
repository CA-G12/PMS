import { AdminProduct, Product, ProductPharmacy } from '../../models';

const getProductsAdmin = async (page: number) => {
  const limit = 8;
  return Product.findAndCountAll({
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
    offset: (page - 1) * limit,
    limit,
  });
};

export default getProductsAdmin;
