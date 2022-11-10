import { Request, Response, NextFunction } from 'express';
import { getProductsAdmin } from '../../queries';

const getAllProductsAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await getProductsAdmin();
    res.json({
      data,
      msg: 'Success',
    });
  } catch (err: any) {
    next(err);
  }
};
export default getAllProductsAdmin;
