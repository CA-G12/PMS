import { Request, Response } from 'express';
import { getProductsAdminCount } from '../../queries';
import { CustomError } from '../../utils';

const allAdminProductCount = async (req:Request, res:Response) => {
  try {
    const result = await getProductsAdminCount();
    res.json({ count: result });
  } catch (err) {
    throw new CustomError(400, 'No Products');
  }
};
export default allAdminProductCount;
