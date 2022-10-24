import {
  ProductsRequest as productsRequestModel,
  Pharmacy as PharmacyModel,
  Product as ProductModel,
} from '../../models';

const requestQuery = (numOffSet: number) => productsRequestModel.findAndCountAll({
  attributes: ['id', 'status'],
  include: [
    {
      model: PharmacyModel,
      attributes: ['name'],
    },
    {
      model: ProductModel,
      attributes: ['name'],
    },
  ],
  offset: 7 * (numOffSet - 1),
  limit: 7,
});

export default requestQuery;
