import { ProductPharmacy } from '../../models/index';

const getOneProduct = async (pharmacyId:number) => ProductPharmacy.findAll({
  attributes: ['quantity'],
  where: {
    id: pharmacyId,
  },
});

export default getOneProduct;
