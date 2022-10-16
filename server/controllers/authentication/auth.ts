import { Response } from 'express';
import { UserRequest } from '../../middlewares/interfaces';

const checkAuthData = (req:UserRequest, res:Response) => {
  res.json(req.user);
};

export default checkAuthData;
