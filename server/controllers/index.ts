import { checkAuthData, logout, login, signUp } from './authentication';

import {
  requestStatus,
  getAdminOverview,
  getAllProductsAdmin,
  updatePharmacyStatusId,
  getAllPharmacies,
  
  allRequests,
  applicationUpdateStatus,
} from './admin';
import {
  oneProductId,
  pharmacyOverview,
  editRequests,
  addRequests,
  salesHistory,
  productsInStock,
  getAllProducts,
  getProducts,
} from './pharamcies';
import pharmacies from './users';

export {
  checkAuthData,
  getProducts,
  allRequests,
  getAllProductsAdmin,
  updatePharmacyStatusId,
  logout,
  login,
  signUp,
  requestStatus,
  getAllPharmacies,
  getAdminOverview,
  oneProductId,
  productsInStock,
  editRequests,
  salesHistory,
  addRequests,
  pharmacyOverview,
  pharmacies,
  getAllProducts,
  applicationUpdateStatus,
};
