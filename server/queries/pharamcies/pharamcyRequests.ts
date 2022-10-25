import { Pharmacy, ProductsRequest } from '../../models';

const getPharmacyRequestsQuery = async (page: number) => {
  ProductsRequest.findAndCountAll({
    include: [{ model: Pharmacy }],
  });
};

export default getPharmacyRequestsQuery;
