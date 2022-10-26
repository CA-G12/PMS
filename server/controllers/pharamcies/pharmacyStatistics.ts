import { NextFunction, Request, Response } from 'express';
import pharmacyStatistics from '../../queries/pharamcies';
import { pharmacyIdSchema } from '../../validation';

const getPharmacyStatistics = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { pharmacyId } = req.params;
  try {
    await pharmacyIdSchema(+pharmacyId);
    const result = await pharmacyStatistics(+(pharmacyId as string));
    res.json({
      data: result,
      msg: 'Statistics are sent successfully',
    });
  } catch (err) {
    next(err);
  }
};

export default getPharmacyStatistics;
