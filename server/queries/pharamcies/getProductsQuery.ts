import { Product } from '../../models';

const getProductsQuery = async () =>
  Product.findAndCountAll({
    attributes: ['id', 'name'],
  });

export default getProductsQuery;
