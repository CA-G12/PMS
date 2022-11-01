import { Request, Response, NextFunction } from 'express';

import { pharmacyOverviewQuery } from '../../queries';

const pharmacyOverview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { pharmacyId } = req.params;
  try {
    const pharmacyData = await pharmacyOverviewQuery(Number(pharmacyId));
    res.json({ pharmacyData });
  } catch (err: any) {
    next(err);
  }
};

export default pharmacyOverview;
