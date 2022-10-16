import { Request, Response, NextFunction } from 'express';
import CustomError from './customError';

const { status, message } = CustomError;

const ErrorMiddleware = ((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  if (!status) {
    res.status(500).json({ msg: message });
  } else {
    res.status(status).json({ msg: message });
  }
});

export default ErrorMiddleware;