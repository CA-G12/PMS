import {
  sequelize,
  AdminProduct as adminProductsModel,
  Pharmacy as pharmacyModel,
  Product as productsModel,
  ProductPharmacy as productsPharmaciesModel,
  ProductsRequest as productsRequestsModel,
  SalesHistory as salesHistoryModel,
} from '../../models';

import {
  adminProducts,
  pharmacies,
  products,
  productsPharmacies,
  productsRequests,
  salesHistory,
} from '../seeds';

// console.log(sequelize);
const buildDB = async () => {
  // console.log('build');
  await sequelize.sync({ force: true });
  // console.log(pharmacies);
  await pharmacyModel.bulkCreate(pharmacies);
  await productsModel.bulkCreate(products);
  await adminProductsModel.bulkCreate(adminProducts);
  await productsPharmaciesModel.bulkCreate(productsPharmacies);
  await productsRequestsModel.bulkCreate(productsRequests);
  await salesHistoryModel.bulkCreate(salesHistory);
};

buildDB();

export default buildDB;

// const buildModelData = async (data: {}[], table:any) => {
// //   eslint-disable-next-line no-plusplus
//   for (let i = 0; i < data.length; i++) {
//     table.create(data[i]);
//   }
// };

// const buildFakeData = async () => {
//   await Promise.all([
//     buildModelData(pharmacies, pharmacyModel),
//     buildModelData(products, productsModel),
//   ]);

//   await Promise.all([
//     buildModelData(adminProducts, adminProductsModel),
//     buildModelData(productsPharmacies, productsPharmaciesModel),
//     buildModelData(productsRequests, productsRequestsModel),
//     buildModelData(salesHistory, salesHistoryModel),
//   ]);
// };

// buildFakeData();
