import { Request, Response, NextFunction } from 'express';

import { eidtRequestsQuery } from '../../queries';

const editRequests = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { quantity, productId, name } = req.body;
    // const { pharmacyId } = req.params;
    const result = await eidtRequestsQuery(+quantity, +productId, name);
    res.status(201).json({ data: result, msg: 'add requests done' });
  } catch (err: any) {
    next(err);
  }
};

export default editRequests;
