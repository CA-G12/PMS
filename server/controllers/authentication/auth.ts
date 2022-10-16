// eslint-disable-next-line import/no-import-module-exports
import { Response } from 'express';
import { UserRequest } from '../../middlewares/interfaces';

const checkAuthData = (req:UserRequest, res:Response) => {
  res.status(200).json(req.user);
};

export default checkAuthData;
