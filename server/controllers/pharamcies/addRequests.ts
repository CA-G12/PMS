import { Request, Response, NextFunction } from 'express';

import { addRequestsQuery } from '../../queries';

const addRequests = async (req: any, res: Response, next: NextFunction) => {
  try {
    const { quantityNum, productId } = req.body;
    const { id } = req.user;

    const result = await addRequestsQuery(
      Number(quantityNum),
      Number(productId),
      Number(id)
    );
    res.status(201).json({ data: result, msg: 'add requests done' });
  } catch (err: any) {
    next(err);
  }
};

export default addRequests;
