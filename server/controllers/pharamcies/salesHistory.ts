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
    const SalesHistory = await salesHistoryQuery(
      Number(pharmacyId),
      Number(page)
    );
    res.json({ SalesHistory });
  } catch (err: any) {
    next(err);
  }
};

export default pharmacyOverview;
