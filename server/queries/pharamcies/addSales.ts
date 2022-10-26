import { SalesHistory } from '../../models';

const addSalesHistory = async (
  productId: number,
  quantity: number,
  pharmacyId: number
) =>
  SalesHistory.create({
    quantity,
    pharmacy_id: pharmacyId,
    product_id: productId,
  });

export default addSalesHistory;
