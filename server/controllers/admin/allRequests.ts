import { Request, Response, NextFunction } from 'express';

import { requestQuery } from '../../queries';

const allRequests = async (req: Request, res: Response, next: NextFunction) => {
  const { numOffSet } = req.query;
  try {
    const data = await requestQuery(Number(numOffSet as string));
    res.json({ data, msg: 'Success' });
  } catch (err: any) {
    next(err);
  }
};

export default allRequests;
