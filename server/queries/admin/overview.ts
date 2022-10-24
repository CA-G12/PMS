import {
  Pharmacy, Product, ProductsRequest, AdminProduct,
} from '../../models';

const pharmacyCount = async () => Pharmacy.count();
const pendingApplicationsCount = async () => Pharmacy.count({
  where: {
    status: 'Pending',
  },
});
const closedApplicationsCount = async () => Pharmacy.count({
  where: {
    status: 'Closed',
  },
});
const openedApplicationsCount = async () => Pharmacy.count({
  where: {
    status: 'Opened',
  },
});

const productCount = async () => Product.count();

const expiredAndInStockProductsCount = async () => AdminProduct.findAndCountAll({
  attributes: ['expired_quantity', 'in_stock_quantity'],
  order:[
    ['in_stock_quantity', 'DESC']
  ],
  limit:8
});

const expiredAndInStockProductsCountOrder = async () => AdminProduct.findAndCountAll({
  attributes: ['expired_quantity', 'in_stock_quantity'],
  order:[
    ['in_stock_quantity', 'ASC']
  ],
  limit:8
});

const requestsCount = async () => ProductsRequest.count();

export {
  pharmacyCount,
  productCount,
  requestsCount,
  pendingApplicationsCount,
  openedApplicationsCount,
  closedApplicationsCount,
  expiredAndInStockProductsCount,
  expiredAndInStockProductsCountOrder
};
