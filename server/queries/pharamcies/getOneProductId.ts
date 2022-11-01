import { ProductPharmacy, Pharmacy, Product } from '../../models';

const getProductId = async (productId: number) =>
  ProductPharmacy.findAll({
    attributes: ['id', 'pharmacy_id', 'product_id'],
    include: [
      {
        model: Pharmacy,
        attributes: ['id', 'name', 'image', 'owner_name', 'owner_img'],
        where: {
          id: productId,
        },
      },
      {
        model: Product,
        attributes: ['id', 'name', 'img'],
      },
    ],
  });

export default getProductId;
