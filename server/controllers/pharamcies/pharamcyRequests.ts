import { NextFunction, Request, Response } from 'express';
import getPharmacyRequestsQuery from '../../queries/pharamcies';
import pageIdSchema from '../../validation/IdPageSchema';

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
      msg: 'Pharmacy Requests are sent successfully',
    });
  } catch (err) {
    next(err);
  }
};
export default getPharmacyRequests;
