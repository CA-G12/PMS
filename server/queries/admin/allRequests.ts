import {
  ProductsRequest as productsRequestModel,
} from '../../models';

const requestQuery = (numOffSet: number) => productsRequestModel.findAll({
  offset: 7 * (numOffSet - 1),
  limit: 7,
});

export default requestQuery;
