import { SalesHistory } from '../../models';

const salesHistoryQuery = async (pharmacyId: number, page: number) =>
  SalesHistory.findAndCountAll({
    where: {
      pharmacy_id: pharmacyId,
    },
    offset: 8 * (page - 1),
    limit: 8,
  });

export default salesHistoryQuery;
