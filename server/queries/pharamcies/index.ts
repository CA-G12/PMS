import getProductId from './getOneProductId';
import {
  eidtRequestsQueryQuantity,
  checkStatusRequest,
} from './eidtRequestsQuery';
import pharmacyStatistics from './pharmacyStatistics';
import addSalesHistory from './addSales';
import getAllProductsQuery from './pharmacyProducts';
import pharmacyOverviewQuery from './pharmacyOverview';
import getPharmacyRequestsQuery from './pharamcyRequests';
import salesHistoryQuery from './salesHistory';
import addRequestsQuery from './addRequests';
import productsInStockQuery from './productsInStock';

export {
  eidtRequestsQueryQuantity,
  pharmacyOverviewQuery,
  checkStatusRequest,
  getAllProductsQuery,
  getPharmacyRequestsQuery,
  addSalesHistory,
  pharmacyStatistics,
  getProductId,
  salesHistoryQuery,
  addRequestsQuery,
  productsInStockQuery,
};
