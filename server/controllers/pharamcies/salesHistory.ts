import { Request, Response, NextFunction } from 'express';

import { salesHistoryQuery } from '../../queries';

const pharmacyOverview = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.user;
    const { page = 1 } = req.query;
    const SalesHistory = await salesHistoryQuery(+id, +page);
    res.json({ SalesHistory, msg: 'Success' });
  } catch (err: any) {
    next(err);
  }
};

export default pharmacyOverview;
