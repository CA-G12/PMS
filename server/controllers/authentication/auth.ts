import { Response } from 'express';

const checkAuthData = (req: any, res: Response) => {
  res.json(req.user);
};

export default checkAuthData;
