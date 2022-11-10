import { Request, Response, NextFunction } from 'express';
import { getProductsAdmin } from '../../queries';

const getAllProductsAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { page = 1 } = req.query;
  try {
    const data = await getProductsAdmin(+page);
    res.json({
      data,
      msg: 'Success',
    });
  } catch (err: any) {
    next(err);
  }
};
export default getAllProductsAdmin;
