import { checkAuthData, logout, login, signUp } from './authentication';
import {
  requestStatus,
  getAdminOverview,
  getAllProductsAdmin,
  updatePharmacyStatusId,
  getAllPharmacies,
  allRequests,
} from './admin';
import {
  oneProductId,
  pharmacyOverview,
  editRequests,
  addRequests,
  salesHistory,
  productsInStock,
  getAllProducts,
} from './pharamcies';
import pharmacies from './users';

export {
  checkAuthData,
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
};
