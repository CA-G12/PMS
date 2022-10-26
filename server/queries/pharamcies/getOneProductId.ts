import { Product } from '../../models';

const getProductId = async (productId: number) =>
  Product.findAll({
    where: { id: productId },
  });

export default getProductId;
