import { SalesHistory } from '../../models';

const addSalesHistory = async (
  productId: number,
  quantity: number,
  pharmacyId: number
) =>
  SalesHistory.create({
    product_id: productId,
    quantity,
    pharmacy_id: pharmacyId,
  });

export default addSalesHistory;
