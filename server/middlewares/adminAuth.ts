import { Response, NextFunction } from 'express';
import { CustomError } from '../utils';

const adminAuth = async (req: any, _res: Response, next: NextFunction) => {
  const { role } = req.user;

  if (role === 'admin') {
    next();
  } else {
    next(new CustomError(401, 'You are not authenticated'));
  }
};

export default adminAuth;
