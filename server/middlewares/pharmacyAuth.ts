import { Response, NextFunction } from 'express';
import { CustomError } from '../utils';
import { UserRequest } from './interfaces';

const pharmacyAuth = async (req: UserRequest, res: Response, next: NextFunction) => {
  const role = req.user?.role;

  if (role === 'pharmacy') {
    next();
  } else {
    next(new CustomError(401, 'You are not authenticated'));
  }
};

export default pharmacyAuth;
