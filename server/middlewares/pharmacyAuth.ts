import { Response, NextFunction } from 'express';
import { CustomError } from '../utils';

const pharmacyAuth = async (
  req: UserRequest,
  res: Response,
  next: NextFunction
) => {
const pharmacyAuth = async (req: any, res: Response, next: NextFunction) => {

  const { role } = req.user;
  if (role === 'pharmacy') {
    next();
  } else {
    next(new CustomError(401, 'You are not authenticated'));
  }
};

export default pharmacyAuth;
