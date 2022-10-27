import { Product, ProductsRequest } from '../../models';

const eidtRequestsQueryQuantity = (
  idRequest: number,
  idProduct: number,
  quantity: number
) =>
  ProductsRequest.update(
    { quantity },
    {
      where: { product_id: idProduct, id: idRequest },
    }
  );
const eidtRequestsQueryName = (idProduct: number, name: string) =>
  Product.update(
    { name },
    {
      where: { id: idProduct },
    }
  );
export { eidtRequestsQueryQuantity, eidtRequestsQueryName };
