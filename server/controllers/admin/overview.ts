import { Request, Response, NextFunction } from 'express';
import {
  pharmacyCount,
  productCount,
  requestsCount,
  pendingApplicationsCount,
  openedApplicationsCount,
  closedApplicationsCount,
  expiredAndInStockProductsCount,
} from '../../queries/admin/overview';

const getAdminOverview = async (req:Request, res:Response, next:NextFunction) => {
  const pharmaciesNumber = await pharmacyCount();
  const productsNumber = await productCount();
  const productsRequestsNumber = await requestsCount();

  const pendingApplications = await pendingApplicationsCount();
  const pendingApplicationsNumber = ((pendingApplications / pharmaciesNumber) * 100).toFixed(1);

  const openedApplications = await openedApplicationsCount();
  const openedApplicationsNumber = ((openedApplications / pharmaciesNumber) * 100).toFixed(1);

  const closedApplications = await closedApplicationsCount();
  const closedApplicationsNumber = ((closedApplications / pharmaciesNumber) * 100).toFixed(1);

  const allKindProductsCount= await expiredAndInStockProductsCount();

  res.json({
    data: {
      pharmaciesNumber,
      productsNumber,
      productsRequestsNumber,
      pendingApplicationsNumber,
      openedApplicationsNumber,
      closedApplicationsNumber,
      allKindProductsCount,
    },
    msg: 'Statistics are sent successfully',
  });
};

export default getAdminOverview;
