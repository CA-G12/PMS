import { Op } from 'sequelize';
import { ProductPharmacy, Product, Pharmacy } from '../../models';

const getAllProductsQuery = async (
  pharmacyName: string,
  medicineName: string,
  page: number,
  limit: number
) => {
  if (medicineName && pharmacyName) {
    return Pharmacy.findAndCountAll({
      include: [
        {
          model: ProductPharmacy,
          include: [
            {
              model: Product,
              where: {
                name: {
                  [Op.iLike]: `%${medicineName}%`,
                },
              },
            },
          ],
          attributes: ['pharmacy_id', 'product_id'],
        },
      ],
      attributes: ['id', 'name'],
      where: {
        name: {
          [Op.iLike]: `%${pharmacyName}%`,
        },
      },
      limit,
      offset: (page - 1) * limit,
    });
  }

  if (medicineName) {
    return Product.findAndCountAll({
      include: [
        {
          model: ProductPharmacy,
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

  if (pharmacyName) {
    return Pharmacy.findAndCountAll({
      include: [
        {
          model: ProductPharmacy,
          include: [
            {
              model: Product,
            },
          ],
          attributes: ['pharmacy_id', 'product_id'],
        },
      ],
      attributes: ['id', 'name'],
      where: {
        name: {
          [Op.iLike]: `%${pharmacyName}%`,
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
        attributes: ['pharmacy_id'],
      },
    ],
    limit,
    offset: (page - 1) * limit,
  });
};

export default getAllProductsQuery;
