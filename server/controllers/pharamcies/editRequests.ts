import { Request, Response, NextFunction } from 'express';

import {
  eidtRequestsQueryName,
  eidtRequestsQueryQuantity,
} from '../../queries';

const editRequests = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId, quantity, name } = req.body;
    await eidtRequestsQueryName(+productId, name);
    await eidtRequestsQueryQuantity(+productId, +quantity);
    res.status(201).json({ msg: 'Edit Requests done' });
  } catch (err: any) {
    next(err);
  }
};

export default editRequests;
