import { Product, ProductsRequest } from '../../models';

const eidtRequestsQueryQuantity = (id: number, quantity: number) =>
  ProductsRequest.update(
    { quantity },
    {
      where: { product_id: id },
    }
  );
const eidtRequestsQueryName = (id: number, name: string) =>
  Product.update(
    { name },
    {
      where: { product_id: id },
    }
  );
export { eidtRequestsQueryQuantity, eidtRequestsQueryName };
