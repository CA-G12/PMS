import { checkAuthData, logout, login, signUp } from './authentication';
import {
  requestStatus,
  getAdminOverview,
  getAllProductsAdmin,
  updatePharmacyStatusId,
  getAllPharmacies,
  allRequests,
} from './admin';
import { editRequests } from './pharamcies';

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
};
