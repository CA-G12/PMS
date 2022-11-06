import { NextFunction, Request, Response } from 'express';
import { getPharmacyRequestsQuery } from '../../queries/pharamcies';
import { pageIdSchema } from '../../validation';

const getPharmacyRequests = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { page = 1 } = req.query;
  const { pharmacyId } = req.params;
  try {
    
    await pageIdSchema(+page, +pharmacyId);
    const requests = await getPharmacyRequestsQuery(
      page as number,
      +(pharmacyId as string)
      );
    res.json({
      data: requests,
      msg: 'Success',
    });
  } catch (err) {
    next(err);
  }
};
export default getPharmacyRequests;
