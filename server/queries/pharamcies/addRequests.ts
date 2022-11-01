import { ProductsRequest } from '../../models';

const addRequestsQuery = async (
  quantityNum: number,
  productId: number,
  pharmacyId: number
) =>
  ProductsRequest.create({
    quantity: quantityNum,
    product_id: productId,
    pharmacy_id: pharmacyId,
  });

export default addRequestsQuery;
