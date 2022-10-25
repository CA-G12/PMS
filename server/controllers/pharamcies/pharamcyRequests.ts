import { NextFunction, Request, Response } from 'express';
import getPharmacyRequestsQuery from '../../queries/pharamcies/pharamcyRequests';

const getPharmacyRequests = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { page = 1 } = req.query;
  const requests = await getPharmacyRequestsQuery(page as number);
  console.log('requests: ', requests);
};
export default getPharmacyRequests;
