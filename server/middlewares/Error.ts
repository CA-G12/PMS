import { Request, Response } from 'express';
import { CustomError } from '../utils';

const ErrorMiddleware = ((err: CustomError, req: Request, res: Response) => {
  const { status, message } = err;

  if (!status) {
    res.status(500).json({ msg: message });
  } else {
    res.status(status).json({ msg: message });
  }
});

export default ErrorMiddleware;
