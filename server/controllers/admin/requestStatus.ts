import { Request, Response, NextFunction } from 'express';

import requestStatusQuery from '../../queries';
import { CustomError } from '../../utils';
import requestStatusSchema from '../../validation/requestStatusSchema';

const requestStatus = async (req : Request, res : Response, next : NextFunction) => {
  try {
    const { status } = req.body;
    const { requestId } = req.params;
    const isValid = await requestStatusSchema.validateAsync({ status, requestId });
    if (isValid) {
      await requestStatusQuery(status, +requestId);
      res.json({ msg: 'successful' });
    } else {
      throw new CustomError(400, 'invalid input');
    }
  } catch (err : any) {
    next(err);
  }
};

export default requestStatus;
