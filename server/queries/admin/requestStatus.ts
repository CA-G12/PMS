import { ProductsRequest as productsRequestModel } from '../../models';

const requestStatusQuery = (
  requestStatus: 'Approved' | 'Pending' | 'Rejected',
  requestId: Number
) =>
  productsRequestModel.update(
    { status: requestStatus },
    {
      where: {
        id: requestId,
      },
    }
  );

export default requestStatusQuery;
