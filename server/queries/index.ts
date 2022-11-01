import {
  getProductsAdmin,
  pharmacyStatus,
  requestStatusQuery,
  requestQuery,
} from './admin';
import pharmaciesQuery from './users';
import { loginQuery, adminLoginQuery } from './authentication';
import {
  addRequestsQuery,
  pharmacyOverviewQuery,
  productsInStockQuery,
  eidtRequestsQueryQuantity,
  checkStatusRequest,
  salesHistoryQuery,
} from './pharamcies';

export {
  getProductsAdmin,
  pharmacyStatus,
  loginQuery,
  adminLoginQuery,
  requestStatusQuery,
  requestQuery,
  productsInStockQuery,
  eidtRequestsQueryQuantity,
  salesHistoryQuery,
  addRequestsQuery,
  pharmacyOverviewQuery,
  pharmaciesQuery,
  checkStatusRequest,
};
