import { Response, NextFunction } from 'express';
import { CustomError } from '../utils';
import { UserRequest } from './interfaces';

const adminAuth = async (req: UserRequest['user'], res: Response, next: NextFunction) => {
  const { role }:any = req;

  if (role === 'admin') {
    next();
  } else {
    next(new CustomError(401, 'You are not authenticated'));
  }
};

export default adminAuth;
