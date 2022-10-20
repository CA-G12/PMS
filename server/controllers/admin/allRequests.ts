import { Request, Response, NextFunction } from 'express';

import { requestQuery } from '../../queries';
import { CustomError } from '../../utils';

const allRequests = async (req : Request, res : Response, next : NextFunction) => {
  const { numOffSet } = req.query;
  try {
    const data = await requestQuery(Number(numOffSet as string));
    res.json({ data });
  } catch (err : any) {
    next(err);
  }
};

export default allRequests;
