import { Response, NextFunction } from 'express';

const checkStatus = async (req: any, res: Response, next: NextFunction) => {
  const { status } = req.user;

  if (status !== 'Pending') {
    next();
  } else {
    res.json('Pending');
  }
};

export default checkStatus;
