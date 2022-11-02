import { ProductPharmacy, Pharmacy, Product } from '../../models';

const getProductId = async (productId: number) =>
  Product.findAll({
    attributes: ['id', 'name', 'img'],
    include: [
      {
        model: ProductPharmacy,
        attributes: ['id', 'pharmacy_id', 'product_id'],
        where: {
          id: productId,
        },
        include: [
          {
            model: Pharmacy,
            attributes: ['id', 'name', 'image', 'owner_name', 'owner_img'],
          },
        ],
      },
    ],
  });

export default getProductId;
