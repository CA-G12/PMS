/* eslint-disable camelcase */
import { Request, Response, NextFunction } from 'express';

import requestStatusQuery from '../../queries';
import { CustomError } from '../../utils';

const requestStatus = async (req : Request, res : Response, next : NextFunction) => {
  try {
    const { status } = req.body;
    const { requestId } = req.params;
    if (status === 'Approved' || status === 'Pending' || status === 'Rejected') {
      await requestStatusQuery(status, +requestId);
      res.json({ message: 'successful' });
    } else {
      throw new CustomError(400, 'invalid input');
    }
  } catch (err : any) {
    next(err);
  }
};

export default requestStatus;
