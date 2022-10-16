import { Request, Response, NextFunction } from 'express';

import { CustomError, verifyToken } from '../utils';

require('env2')('.env');

interface request extends Request{
    user: Object | unknown
}
const checkAuth = async (req: request, res: Response, next: NextFunction) => {
  const { token } = req.cookies;
  if (!token) throw new CustomError(401, 'Unauthorized');
  try {
    const user = await verifyToken(token);
    req.user = user;
  } catch (err) {
    next(new CustomError(401, 'Unauthorized'));
  }
};

export default checkAuth;
