/* eslint-disable no-param-reassign */
import { Op } from 'sequelize';
import { ProductPharmacy, Product, Pharmacy } from '../../models';

const getAllProductsQuery = async (
  pharmacyName: string,
  medicineName: string,
  page: number,
  limit: number,
  id: number
) => {
  if (!pharmacyName) pharmacyName = '';
  if (!medicineName) medicineName = '';
  if (id !== -1) {
    return Product.findAndCountAll({
      include: [
        {
          model: ProductPharmacy,
          where: {
            pharmacy_id: id,
          },
        },
      ],
      attributes: ['id', 'name', 'description', 'img', 'price'],
      where: {
        name: {
          [Op.iLike]: `%${medicineName}%`,
        },
      },
      limit,
      offset: (page - 1) * limit,
    });
  }
  return Product.findAndCountAll({
    include: [
      {
        model: ProductPharmacy,
        include: [
          {
            model: Pharmacy,
            where: {
              name: {
                [Op.iLike]: `%${pharmacyName}%`,
              },
            },
          },
        ],
      },
    ],
    attributes: ['id', 'name', 'description', 'img', 'price'],
    where: {
      name: {
        [Op.iLike]: `%${medicineName}%`,
      },
    },
    limit,
    offset: (page - 1) * limit,
  });
};

export default getAllProductsQuery;
