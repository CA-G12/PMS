import { Request, Response, NextFunction } from 'express';
import { getProductsAdmin } from '../../queries';
import { CustomError } from '../../utils';

const getAllProductsAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await getProductsAdmin();
    res.json({
      data,
    });
  } catch (err: any) {
    next(err);
  }
};
export default getAllProductsAdmin;
