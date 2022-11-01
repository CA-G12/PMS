import { Product, ProductsRequest } from '../../models';

const eidtRequestsQueryQuantity = (
  idRequest: number,
  idProduct: number,
  quantity: number
) =>
  ProductsRequest.update(
    { product_id: idProduct, quantity },
    {
      where: { id: idRequest, status: 'Pending' },
    }
  );
const checkStatusRequest = (idRequest: number) =>
  ProductsRequest.findOne({ where: { id: idRequest } });

export { eidtRequestsQueryQuantity, checkStatusRequest };
