import { Request, Response, NextFunction } from 'express';

import { salesHistoryQuery } from '../../queries';

const pharmacyOverview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { pharmacyId } = req.params;
    const { page = 1 } = req.query;
    const SalesHistory = await salesHistoryQuery(+pharmacyId, +page);
    res.json({ SalesHistory, msg: 'Success' });
  } catch (err: any) {
    next(err);
  }
};

export default pharmacyOverview;
