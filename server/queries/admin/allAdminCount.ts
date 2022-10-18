import { ProductPharmacy, Product } from '../../models/index';

const getProductsAdminQuantity = async () => Product.findAll({
  attributes: ['id', 'name'],
  include: [
    {
      model: ProductPharmacy,
      attributes: ['id', 'product_id', 'quantity'],
    },
  ],
});

export default getProductsAdminQuantity;
