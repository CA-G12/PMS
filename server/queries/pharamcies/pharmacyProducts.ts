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
  if (pharmacyId) {
    return ProductPharmacy.findAndCountAll({
      include: [
        {
          model: Product,
        },
      ],
      where: {
        pharmacy_id: pharmacyId,
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
        },
      ],
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
      },
    ],
    limit,
    offset: (page - 1) * limit,
  });
};

export default getAllProductsQuery;
