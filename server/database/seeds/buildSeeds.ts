import {
  sequelize,
  AdminProduct as adminProductsModel,
  Pharmacy as pharmacyModel,
  Product as productsModel,
  ProductPharmacy as productsPharmaciesModel,
  ProductsRequest as productsRequestsModel,
  SalesHistory as salesHistoryModel,
  admin as adminModel,
} from '../../models';

import {
  adminProducts,
  pharmacies,
  products,
  productsPharmacies,
  productsRequests,
  salesHistory,
  admin,
} from '.';

const buildSeeds = async () => {
  await sequelize.sync({ force: true });
  await pharmacyModel.bulkCreate(pharmacies);
  await productsModel.bulkCreate(products);
  await adminProductsModel.bulkCreate(adminProducts);
  await productsPharmaciesModel.bulkCreate(productsPharmacies);
  await productsRequestsModel.bulkCreate(productsRequests);
  await salesHistoryModel.bulkCreate(salesHistory);
  await adminModel.bulkCreate(admin);
};
if (process.env.NODE_ENV === 'development') {
  buildSeeds();
}

export default buildSeeds;
