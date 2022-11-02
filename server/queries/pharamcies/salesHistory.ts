import { SalesHistory, Product } from '../../models';

const salesHistoryQuery = async (pharmacyId: number, page: number) =>
  SalesHistory.findAndCountAll({
    attributes: ['id', 'quantity', 'date'],
    include: [
      {
        model: Product,
        attributes: ['id', 'name', 'price'],
        where: {
          id: pharmacyId,
        },
      },
    ],
    offset: 8 * (page - 1),
    limit: 8,
  });

export default salesHistoryQuery;
