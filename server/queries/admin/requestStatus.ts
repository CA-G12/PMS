import {
  ProductsRequest as productsRequestModel,
} from '../../models';

const requestStatusQuery = (status: number) => productsRequestModel.findAll({
  offset: 7 * (status - 1),
  limit: 7,
});

export default requestStatusQuery;
