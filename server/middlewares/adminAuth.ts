import { Response, NextFunction } from 'express';
import { CustomError } from '../utils';
import { UserRequest } from './interfaces';

const adminAuth = async (req: UserRequest, res: Response, next: NextFunction) => {
  const { user } = req;
  if (!user) return next(new CustomError(400, 'bad request'));
  const { role } = user;
  if (role === 'admin') {
    next();
  } else {
    next(new CustomError(401, 'You are not authenticated'));
  }
};

export default adminAuth;
