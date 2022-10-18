import { ProductPharmacy, Product } from '../../models/index';

const getProductsAdminQuantity = async () => Product.findAll(
  {
    include: [
      {
        model: ProductPharmacy,
      },
    ],
  },
);

export default getProductsAdminQuantity;
