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
  editRequests,
  pharmacyOverview,
  addRequests,
  salesHistory,
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
  editRequests,
  salesHistory,
  addRequests,
  pharmacyOverview,
  pharmacies,
};
