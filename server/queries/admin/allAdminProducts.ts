import { AdminProduct, Product } from '../../models/index';

const getProductsAdmin = async () => Product.findAll({
  include: [
    {
      model: AdminProduct,
    },
  ],
});

export default getProductsAdmin;
