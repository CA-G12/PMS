import { Pharmacy } from '../../models';

const getAllPharmaciesGeneral = async (status: string, page: number) => {
  const limit = 9;
  if (status) {
    return Pharmacy.findAndCountAll({
      where: {
        status,
      },
      offset: (page - 1) * limit,
      limit,
    });
  }
  return Pharmacy.findAndCountAll({
    offset: (page - 1) * limit,
    limit,
    order: ['id'],
  });
};
export default getAllPharmaciesGeneral;
