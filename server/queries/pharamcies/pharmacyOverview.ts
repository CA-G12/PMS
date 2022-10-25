import { Pharmacy } from '../../models';

const pharmacyOverviewQuery = async (pharmacyId: number) =>
  Pharmacy.findAll({
    attributes: { exclude: ['password'] },
    where: {
      id: pharmacyId,
    },
  });

export default pharmacyOverviewQuery;
