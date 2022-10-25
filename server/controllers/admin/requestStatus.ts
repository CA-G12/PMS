import { Request, Response, NextFunction } from 'express';

import { requestStatusQuery } from '../../queries';
import { CustomError } from '../../utils';
import { requestStatusSchema } from '../../validation';

const requestStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { status } = req.body;
    const { requestId } = req.params;
    await requestStatusSchema.validateAsync({ status, requestId });
    await requestStatusQuery(status, +requestId);
    res.json({ msg: 'successful' });
  } catch (err: any) {
    if (err.name === 'ValidationError')
      next(new CustomError(400, 'invalid input'));
    else next(err);
  }
};

export default requestStatus;
