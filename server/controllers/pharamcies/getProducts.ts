import { Request, Response, NextFunction } from 'express';
import { getproductsQuery } from '../../queries';

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await getproductsQuery();
    res.json({
      data,
      msg: 'Success',
    });
  } catch (err: any) {
    next(err);
  }
};
export default getProducts;
