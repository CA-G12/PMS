import {
  adminProducts,
  pharmacies,
  products,
  productsPharmacies,
  productsRequests,
  salesHistory,
} from '../seeds';

import {
  adminProducts as adminProductsModel,
  pharmacies as pharmaciesModel,
  products as productsModel,
  productsPharmacies as productsPharmaciesModel,
  productsRequests as productsRequestsModel,
  salesHistory as salesHistoryModel,
} from '../../models';

const buildModelData = async (data: {}[], table:any) => {
//   eslint-disable-next-line no-plusplus
  for (let i = 0; i < data.length; i++) {
    table.create(data[i]);
  }
};

const buildFakeData = async () => {
  await Promise.all([
    buildModelData(pharmacies, pharmaciesModel),
    buildModelData(products, productsModel),
  ]);

  await Promise.all([
    buildModelData(adminProducts, adminProductsModel),
    buildModelData(productsPharmacies, productsPharmaciesModel),
    buildModelData(productsRequests, productsRequestsModel),
    buildModelData(salesHistory, salesHistoryModel),
  ]);
};

buildFakeData();
