import { Product, ProductsRequest } from '../../models';

const eidtRequestsQuery = (id: number, quantity: number, name: string) =>
  ProductsRequest.update(
    { quantity },
    {
      where: { product_id: id },
    }
  );
export default eidtRequestsQuery;
