import { Response, Request, NextFunction } from 'express';
import {CustomError} from '../middlewares';
import {UserRequest} from '../middlewares/interfaces'

const pharmacyAuth = async (req: UserRequest, res: Response, next: NextFunction) => {
  const role = req.user?.role;

  if(role === 'pharmacy') {
    next()
  } else {
    throw new CustomError(401, 'You are not authenticated');
  }
};

export default pharmacyAuth;