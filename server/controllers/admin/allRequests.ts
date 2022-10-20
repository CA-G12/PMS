/* eslint-disable camelcase */
import { Request, Response, NextFunction } from 'express';

import { requestQuery } from '../../queries';
import { CustomError } from '../../utils';

const allRequests = async (req : Request, res : Response, next : NextFunction) => {
  const { numOffSet } = req.body;
  try {
    const data = await requestQuery(numOffSet);
    if (data.rows.length !== 0) {
      res.json({ data });
    } else {
      throw new CustomError(400, 'There are no data');
    }
  } catch (err : any) {
    next(err);
  }
};

export default allRequests;
