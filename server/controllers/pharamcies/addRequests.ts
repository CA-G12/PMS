import { Request, Response, NextFunction } from 'express';

import { addRequestsQuery } from '../../queries';

const addRequests = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { quantityNum, productId } = req.body;
    const { pharmacyId } = req.params;
    const result = await addRequestsQuery(
      Number(quantityNum),
      Number(productId),
      Number(pharmacyId)
    );
    res.status(201).json({ data: result, msg: 'add requests done' });
  } catch (err: any) {
    next(err);
  }
};

export default addRequests;
