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

const getAdminOverview = async (req:Request, res:Response) => {
  const data = await Promise.all([
    pharmacyCount(),
    productCount(),
    requestsCount(),
    pendingApplicationsCount(),
    openedApplicationsCount(),
    closedApplicationsCount(),
    expiredAndInStockProductsCount(),
  ]);

  res.json({
    data: {
      pharmaciesNumber: data[0],
      productsNumber: data[1],
      productsRequestsNumber: data[2],
      pendingApplicationsNumber: data[3],
      openedApplicationsNumber: data[4],
      closedApplicationsNumber: data[5],
      allKindProductsCount: data[6],
    },
    msg: 'Statistics are sent successfully',
  });
};

export default getAdminOverview;
