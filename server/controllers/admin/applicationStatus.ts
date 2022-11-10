import { NextFunction, Request, Response } from 'express';
import { pharmacyStatus } from '../../queries';
import { CustomError } from '../../utils';
import { applicationSchema } from '../../validation';

const applicationUpdateStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { pharmacyId } = req.params;
  const { status } = req.body;
  try {
    await applicationSchema(+pharmacyId, status);
    await pharmacyStatus(+pharmacyId, status);
    res.json({ msg: 'Success' });
  } catch (err: any) {
    if (err) next(new CustomError(400, 'Something went wrong'));
    next(err);
  }
};
export default applicationUpdateStatus;
