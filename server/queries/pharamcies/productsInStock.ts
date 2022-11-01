import {
  AdminProduct as AdminProductModel,
  Product as ProductModel,
} from '../../models';

const productsInStockQuery = () =>
  AdminProductModel.findAll({
    attributes: ['id', 'product_id', 'in_stock_quantity'],
    include: [
      {
        model: ProductModel,
        attributes: ['name'],
      },
    ],
  });

export default productsInStockQuery;
