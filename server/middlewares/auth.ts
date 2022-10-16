import { Response, NextFunction } from 'express';
import request from './interfaces/UserRequest';
import { CustomError, verifyToken } from '../utils';

const auth = async (req: request, res: Response, next: NextFunction) => {
  const { token } = req.cookies;
  if (!token) throw new CustomError(401, 'Unauthorized');
  try {
    const user = await verifyToken(token);
    req.user = user;
  } catch (err) {
    next(err);
  }
};

export default auth;
