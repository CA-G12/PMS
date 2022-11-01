import { Product, ProductsRequest } from '../../models';

const eidtRequestsQueryQuantity = (
  idRequest: number,
  idProduct: number,
  quantity: number
) =>
  ProductsRequest.update(
    { idProduct, quantity },
    {
      where: { product_id: idProduct, id: idRequest, status: 'Pending' },
    }
  );
const checkStatusRequest = (idRequest: number) =>
  ProductsRequest.findOne({ where: { id: idRequest } });

export { eidtRequestsQueryQuantity, checkStatusRequest };
