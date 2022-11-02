import { Pharmacy, Product, ProductsRequest } from '../../models';

const getPharmacyRequestsQuery = async (page: number, pharmacyId: number) => {
  const limit = 1;
  return Pharmacy.findAll({
    include: [
      {
        model: ProductsRequest,
        include: [
          {
            model: Product,
            attributes: ['name', 'price'],
          },
        ],
        attributes: ['status', 'quantity'],
        limit,
      },
    ],
    attributes: ['id', 'name'],
    where: {
      id: pharmacyId,
    },
    offset: (page - 1) * limit,
  });
};

export default getPharmacyRequestsQuery;
