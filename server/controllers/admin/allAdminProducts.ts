import { Request, Response, NextFunction } from 'express';
import { getProductsAdmin } from '../../queries';
import { CustomError } from '../../utils';

const getAllProductsAdmin = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const data = await getProductsAdmin();
    res.json({
      data,
    });
  } catch (err:any) {
    if (err) next(new CustomError(400, 'No Products'));
    else next(err);
  }
};
export default getAllProductsAdmin;
