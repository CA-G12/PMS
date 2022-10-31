import { ProductPharmacy, ProductsRequest } from '../../models';

const pharmacyStatistics = async (pharmacyId: number) => {
  const Products = await ProductPharmacy.findAndCountAll({
    where: {
      pharmacy_id: pharmacyId,
    },
    attributes: ['quantity', 'product_id'],
  });

  const Requests = await ProductsRequest.findAndCountAll({
    where: {
      pharmacy_id: pharmacyId,
    },
    attributes: ['quantity', 'product_id', 'status'],
  });

  return { Products, Requests };
};

export default pharmacyStatistics;
