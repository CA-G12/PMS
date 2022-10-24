/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../utils';

const ErrorMiddleware = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { status, message } = err;

  if (!status) {
    res.status(500).json({ msg: message });
  } else {
    res.status(status).json({ msg: message });
  }
};

export default ErrorMiddleware;
