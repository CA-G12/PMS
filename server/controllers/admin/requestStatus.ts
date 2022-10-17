/* eslint-disable camelcase */
import { Request, Response, NextFunction } from 'express';

import requestStatusQuery from '../../queries';
// import { CustomError } from '../../utils';

const requestStatus = async (req : Request, res : Response, next : NextFunction) => {
  const { status } = req.body;
  try {
    await requestStatusQuery(status);
    res.json({ message: 'successful' });
  } catch (err : any) {
    next(err);
  }
};

export default requestStatus;
