import { Op } from 'sequelize';
import { ProductPharmacy, Product, Pharmacy } from '../../models';

const getAllProductsQuery = async (
  pharmacyName: string,
  medicineName: string,
  page: number,
  limit: number,
  pharmacyId: string
) => {
  if (medicineName) {
    return Product.findAndCountAll({
      include: [
        {
          model: ProductPharmacy,
        },
      ],
      where: {
        name: {
          [Op.iLike]: `%${medicineName}%`,
        },
      },
      limit,
      offset: (page - 1) * limit,
    });
  }
  if (pharmacyName) {
    return Product.findAndCountAll({
      include: [
        {
          model: ProductPharmacy,
          include: [
            {
              model: Pharmacy,
            },
          ],
        },
      ],
      where: {
        id: 5,
      },
      limit,
      offset: (page - 1) * limit,
    });
  }
  return Product.findAndCountAll({
    include: [
      {
        model: ProductPharmacy,
      },
    ],
    limit,
    offset: (page - 1) * limit,
  });
};

export default getAllProductsQuery;
